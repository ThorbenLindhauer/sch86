CONTINUE = '<!-- continue -->';

module.exports = function excerpt(content, slug)  {
  var splitIdx = content.indexOf(CONTINUE);
  if (splitIdx !== -1) {
    content = content.substring(0, splitIdx);

    content += '<p><a href="' + slug + '">Weiterlesen...</a></p>';
  }

  return content;
};
