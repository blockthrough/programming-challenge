
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

describe('Nomnomthrough', () => {
  describe('When there is not enough for even one serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServing);
	  
      assert.equal(output, 0);
    });	
  });
});


describe('Nomnomthrough', () => {
  describe('When there is not good params provided', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroParams);
	  
      assert.equal(output, 0);
    });	
  });
});