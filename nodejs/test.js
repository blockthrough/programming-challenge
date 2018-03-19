const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there is not enough for any servings', () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.zeroServings);
  		assert.equal(output, 0);
  	});
  });
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
  describe('When there is enough for one thousand servings', () => {
  	it('should return 1000', () => {
  		const output = howManyServings(inputs.onethousandServings);
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
  		assert.ok(output, 'Only integers can be used as values!');
  	});
  });
  describe('When the value is a negative integer', () => {
  	it('should throw an Error', () => {
  		const output = howManyServings(inputs.negativeintegerValue);
  		assert.ok(output, 'Only positive integers are valid!');
  	});
  });  
});
