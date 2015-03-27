var forEach = require('lodash/collection/forEach');
var sortBy = require('lodash/collection/sortBy');
var sortings = require('./helpers/postSortings');
var filters = require('./helpers/postFilters');

module.exports = function(druck) {

  // initialize the kartoffeldruck instance
  // you may specify (global) template locals
  // as well as the place for templates, pages, assets and dest more
  druck.init({
    source: 'pages',
    dest: 'dist',
    templates: 'templates',
    
    locals: {
      site: {
        title: 'SC Hiltrup 86'
      }
    }
  });



  var posts = druck.files('posts/*');
  var posts2015 = filters.between(posts, new Date('2015-07-01'), new Date('2016-07-01'));

  druck.generate({
    source: posts,
    dest: ':name/index.html'
  });

  druck.generate({
    source: 'index.html',
    dest: 'index.html',
    locals: { items: sortings.byDate(posts2015) },
    paginate: 5
  });
  // extract tags
  var tagged = {};

  posts.forEach(function(p) {
    (p.tags || []).forEach(function(tag) {
      var t = tagged[tag] = (tagged[tag] || { tag: tag, items: [] });
      t.items.push(p);
    });
  });

  forEach(tagged, function(t) {
    druck.generate({
      source: '_tagged.html',
      dest: ':tag/:page/index.html',
      locals: {tag: t.tag, items: sortings.byDate(t.items)},
      paginate: 5
    });
  });


};
