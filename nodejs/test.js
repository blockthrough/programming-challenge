const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
  describe('When there is enough for two servings', () => {
  	it('should return 2', () => {
  		const output = howManyServings(inputs.twoServings);
  		assert.equal(output, 2);
  	});
  });
  describe('When there is enough for one hundred servings', () => {
  	it('should return 1000', () => {
  		const output = howManyServings(inputs.onehundredServings);
  		assert.equal(output, 1000);
  	});
  });
  describe('When the amount is not an integer', () => {
  	it('should return NaN', () => {
  		const output = howManyServings(inputs.nonintegerValue);
  		assert.ok(isNaN(output));
  	});
  });
  describe('When the amount is a number in a string', () => {
  	it('should throw a TypeError', () => {
  		const output = howManyServings(inputs.numberString);
  		assert.ok(output, 'Only integers can be used as values!')
  	});
  });
});
