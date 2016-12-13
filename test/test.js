var profanityFilter = require('../index');
var assert = require('assert');

describe('ProfanityFilter', function() {
  describe('filter', function() {
    it('Should replace swear words with asterisks.', function() {
      assert.equal("**** you!", profanityFilter.filter("Fuck you!"));
    });
  });
  describe('addWords', function() {
    it('Should add words to the current bad words list.', function() {
      profanityFilter.addWords(["add", "custom", "words"]);
      assert.equal("These are ****** bad *****.", profanityFilter.filter("These are custom bad words."));
      assert.equal("Old one still ****ing works.", profanityFilter.filter("Old one still fucking works."));
    });
  });
  describe('replaceWords', function() {
    it('Should replace bad words list with input array.', function() {
      profanityFilter.replaceWords(["add", "custom", "words"]);
      assert.equal("These are ****** bad *****.", profanityFilter.filter("These are custom bad words."));
      assert.equal("Old one no longer fucking works.", profanityFilter.filter("Old one no longer fucking works."));
    });
  });
});