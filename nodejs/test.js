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
  describe('When there is not enough ingredient for one serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noServing);
      assert.equal(output, 0);
    });
  });
  describe('When there is enough ingredient for 1000 servings', () => {
    it('should return 1000', () => {
      const output = howManyServings(inputs.thousandServing);
      assert.equal(output, 1000);
    });
  });
  describe('When there is missing ingredient in inventory', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.missingInventoryIngredient);
      assert.equal(output, 0);
    });
  });
  describe('When there is ingredient in inventory which is not found in recipe, and have enough for 10 servings', () => {
    it('should return 10', () => {
      const output = howManyServings(inputs.missingRecipeIngredient);
      assert.equal(output, 10);
    });
  });
});