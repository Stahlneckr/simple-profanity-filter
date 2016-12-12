var badWords = require('./bad-words');

module.exports = function filter(string) {
  string = string || '';
  var regexp = new RegExp(badWords.join('|'), 'gi');

  return string.replace(regexp, function(str) {
    var replace_str = '';
    for(var i=0; i<str.length; i++) {
      replace_str = replace_str+'*';
    }
    return replace_str;
  });
};