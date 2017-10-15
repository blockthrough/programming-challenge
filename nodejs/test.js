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
});

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for two serving', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.twoServings);
      assert.equal(output, 2);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is a missing ingredient in inventory.', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.missingIngredient);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is no elements', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noneFound);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is no elements', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noneFound);
      assert.equal(output, 0);
    });
  });
});