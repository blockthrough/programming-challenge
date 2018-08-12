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
  describe('When there is not enough ingredient even for one serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServing);
      assert.equal(output, 0);
    });
  });
  describe('When there are enough ingredients for ten servings', () => {
    it('should return 10', () => {
      const output = howManyServings(inputs.tenServings);
      assert.equal(output, 10);
    });
  });
  describe('When there are extra ingredients in inventory', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.extraInventory);
      assert.equal(output, 1);
    });
  });
  describe('When inventory lacks ingredients for recipe', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.lackingInventory);
      assert.equal(output, 0);
    });
  });
  describe('When inventory is not defined', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.inventoryNotDefined);
      assert.equal(output, 0);
    });
  });
  describe('When recipe is not defined', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.recipeNotDefined);
      assert.equal(output, 0);
    });
  });
});
