const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there are enough ingredients for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });

  describe('When not enough ingredients for any servings', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noServings);
      assert.equal(output, 0);
    });
  });

  describe('When missing one or more required ingredients', () => {
    it('inventory smaller than recipe should return 0', () => {
      const output = howManyServings(inputs.inventoryTooSmall);
      assert.equal(output, 0);
    });

    it('substituting a useless ingredient should return 0', () => {
      const output = howManyServings(inputs.uselessIngredient);
      assert.equal(output, 0);
    });
  });

  describe('When we can make 5 servings', () => {
    it('should return 5 if we have additional ingredients in inventory', () => {
      const output = howManyServings(inputs.fiveServingsExtraIngredients);
      assert.equal(output, 5);
    });

    it('should return 5 if we do not have any additional ingredients', () => {
      const output = howManyServings(inputs.fiveServingsNoExtraIngredients);
      assert.equal(output, 5);
    });
  });

  describe('When recipe calls for 0 quantity of an ingredient', () => {
    it('able to make one serving - should return 1', () => {
      const output = howManyServings(inputs.oneServingZeroQtyIngredient);
      assert.equal(output, 1);
    });

    it('not able to make any servings - should return 0', () => {
      const output = howManyServings(inputs.noServingZeroQtyIngredient);
      assert.equal(output, 0);
    });
  });

  describe('When there is no recipe', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noRecipe);
      assert.equal(output, 0);
    });
  });

  describe('When there is no inventory', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noInventory);
      assert.equal(output, 0);
    });
  });

  // describe('When inventory not quantifiable', () => {
  //   it('should return an error', () => {
  //     const output = howManyServings(inputs.inventoryNotQuantifiable);
  //     assert.equal(output, Error);
  //   });
  // });

  // describe('When recipe not quantifiable', () => {
  //   it('should return an error', () => {
  //     const output = howManyServings(inputs.inventoryNotQuantifiable);
  //     assert.equal(output, Error);
  //   });
  // });
});