var select = require('lodash/collection/select');

module.exports = {
  /**
  * beginning inclusive; ending exclusive
  */
  between: function(posts, beginning, ending) {
    return select(posts, function(p) {
      postDate = new Date(p.date);
      return postDate >= beginning && postDate < ending;
    });
  }
}
