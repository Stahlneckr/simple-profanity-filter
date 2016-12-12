var assert = require('assert');
var profanityFilter = require('../index');

describe('ProfanityFilter', function() {
  describe('filter', function() {
    it('should replace swear words with asterisk', function() {
      assert.equal("**** you!", profanityFilter.filter("Fuck you!"));
    });
  });
});