var select = require('lodash/collection/select');

module.exports = {
  /**
  * beginning inclusive; ending exclusive
  */
  between: function(posts, beginning, ending) {
    return select(posts, function(p) {
      return p.date >= beginning && p.date < ending;
    });
  },

  youngerThan: function(posts, date) {
    return select(posts, function(p) {
      return p.date >= date;
    });
  }
}
