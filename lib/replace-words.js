var badWords = require('./bad-words');

module.exports = function replaceWords(newBadWords) {
  badWords.length = 0;
  badWords.push.apply(badWords, newBadWords);
};