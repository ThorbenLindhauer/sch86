var forEach = require('lodash/collection/forEach');
var sortBy = require('lodash/collection/sortBy');
var sortings = require('./helpers/postSortings');
var filters = require('./helpers/postFilters');
var formatter = require('./helpers/formatter');
var excerpt = require('./helpers/excerpt');
var moment = require('moment');
moment.locale('de');


var tagMenus = {
  "Erste": "verein",
  "Zweite": "verein"
};

module.exports = function(druck) {

  // initialize the kartoffeldruck instance
  // you may specify (global) template locals
  // as well as the place for templates, pages, assets and dest more
  druck.init({
    source: 'pages',
    dest: 'dist',
    templates: 'templates'
  });

  var nunjucks = druck.config.nunjucks;
  nunjucks.addFilter('formatDate', formatter.formatDate);
  nunjucks.addFilter('excerpt', excerpt);

  // render static pages
  var staticPages = druck.files('static/**/*');
  druck.generate({
    source: staticPages,
    dest: ':name/index.html'
  });

  // preprocess blog posts
  var posts = druck.files('posts/**/*');
  posts.forEach(function(p) {
    p.date = moment(p.date);
  });

  var filterDate = new Date();
  filterDate.setHours(filterDate.getHours() - 24 * 30);
  var recentPosts = filters.youngerThan(posts, filterDate);
  var posts2015 = filters.between(posts, new Date('2015-07-01'), new Date('2016-07-01'));

  // generate all posts
  druck.generate({
    source: posts,
    dest: ':name/index.html'
  });

  // front page
  druck.generate({
    source: 'index.html',
    //dest: ':page/index.html',
    dest: 'index.html',
    locals: { 
      items: sortings.byDate(recentPosts),
      menu: 'start'
    }
    //paginate: 5 
  });

  // extract tags
  var tagged = {};

  posts.forEach(function(p) {
    (p.tags || []).forEach(function(tag) {
      var t = tagged[tag] = (tagged[tag] || { tag: tag, items: [] });
      t.items.push(p);
    });
  });

  // tage pages
  forEach(tagged, function(t) {
    druck.generate({
      source: '_tagged.html',
      dest: 'tags/:tag/:page/index.html',
      locals: {tag: t.tag, items: sortings.byDate(t.items), menu: tagMenus[t.tag]},
      paginate: 5
    });
  });


};
