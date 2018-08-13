const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there are enough ingredients', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });

    it('added an optional ingredient should return 1', () => {
      const output = howManyServings(inputs.oneServingWithOptional);
      assert.equal(output, 1);
    });

    it('should return 2', () => {
      const output = howManyServings(inputs.twoServings);
      assert.equal(output, 2);
    });

    it('should return 8', () => {
      const output = howManyServings(inputs.eightServings);
      assert.equal(output, 8);
    });
  });

  describe('When there are not enough ingredients for a serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noServings);
      assert.equal(output, 0);
    });

    it('missing an ingredient should return 0', () => {
      const output = howManyServings(inputs.missingIngredient);
      assert.equal(output, 0);
    });

    it('switched an optional ingredient should return 0', () => {
      const output = howManyServings(inputs.missingIngredientWithOptional);
      assert.equal(output, 0);
    });
  });

  describe('When recipe the has an ingredient of 0', () => {
    it('1 serving - should return 1', () => {
      const output = howManyServings(inputs.oneServingEmptyIngredient);
      assert.equal(output, 1);
    });

    it('0 servings - should return 0', () => {
      const output = howManyServings(inputs.noServingsEmptyIngredient);
      assert.equal(output, 0);
    });
  });

  describe('When the ingredient is less than 0', () => {
    it('Recipe - should return 1', () => {
      const output = howManyServings(inputs.negativeRecipeIngredient);
      assert.equal(output, 1);
    });
    it('Inventory - should return 0', () => {
      const output = howManyServings(inputs.negativeInventoryIngredient);
      assert.equal(output, 0);
    });
  });
});