const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there is enough ingredients for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
  describe('When there is enough ingredients for 5 servings and numbers are not evenly divisible', () => {
    it('should return 5', () => {
      const output = howManyServings(inputs.fiveServings);
      assert.equal(output, 5);
    });
  });
  describe('When inventory contains an extra ingredient', () => {
    it('should return 5', () => {
      const output = howManyServings(inputs.extraInventory);
      assert.equal(output, 5);
    });
  });
  describe('When there is a negative integer', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.negativeValue);
      assert.equal(output, 0);
    });
  });
  describe('When inventory is missing an ingredient', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.inventoryMissingIngredient);
      assert.equal(output, 0);
    })
  })
  describe('When params provided is a string', () => {
    it('stringTest', () => {
      const output = howManyServings(inputs.inventoryMissingIngredient);
      assert.equal(output, 0);
    })
  })
});