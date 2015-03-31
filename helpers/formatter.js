require('moment-timezone');

module.exports = {
  formatDate: function(date) {
    return date.tz('Europe/Berlin').format('dddd, Do MMMM YYYY');
  }
}
