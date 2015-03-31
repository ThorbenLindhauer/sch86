var sortBy = require('lodash/collection/sortBy');

module.exports = {
  byDate: function(posts) {
    return sortBy(posts, function(post) {
      return post.date;
    }).reverse();
  }
}


