
const assert = require('assert');
const howManyServings = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
});