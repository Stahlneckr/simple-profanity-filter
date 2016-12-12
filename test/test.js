var profanityFilter = require('../index');
var assert = require('assert');

describe('ProfanityFilter', function() {
  describe('filter', function() {
    it('Should replace swear words with asterisks.', function() {
      assert.equal("**** you!", profanityFilter.filter("Fuck you!"));
    });
  });
  describe('addWords', function() {
    it('Should add words to the current dictionary', function() {
      profanityFilter.addWords(["add", "custom", "words"]);
      assert.equal("These are ****** bad *****", profanityFilter.filter("These are custom bad words"));
      assert.equal("Old one still ****ing works.", profanityFilter.filter("Old one still fucking works."));
    });
  });
});