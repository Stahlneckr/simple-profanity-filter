var badWords = require('./bad-words');

module.exports = function addWords(newBadWords) {
  for(var i=0; i<newBadWords.length; i++) {
    badWords.push(newBadWords[i]);
  }
};