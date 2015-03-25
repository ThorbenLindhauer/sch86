var sortBy = require('lodash/collection/sortBy');

module.exports = {
  byDate: function(posts) {
    return sortBy(posts, function(post) {
      return new Date(post.date).getTime();
    });
  }
}


