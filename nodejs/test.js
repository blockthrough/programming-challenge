const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {

  describe('Core Scenarios', () => {
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
  });
  describe('Unacceptable Quantities', () => {

    describe('Undefined Quantities', () => {
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

    describe('Empty Quantity Objects', () => {
      describe('When no ingredient is defined in recipe', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.noIngredientInRecipe);
          assert.equal(output, 0);
        });
      });
      describe('When no ingredient is defined in inventory', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.noIngredientInInventory);
          assert.equal(output, 0);
        });
      });
      describe('When no ingredient is defined in recipe and inventory', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.noIngredientInRecipeAndInventory);
          assert.equal(output, 0);
        });
      });
    });

    describe('NaN Quantity', () => {
      describe('When recipe contains ingredient which is NaN', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.recipeContainsNaN);
          assert.equal(output, 0);
        });
      });
      describe('When inventory contains ingredient which is NaN', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.inventoryContainsNaN);
          assert.equal(output, 0);
        });
      });
    });

    describe('Float Quantity', () => {
      describe('When inventory contains ingredients with Float Quantities', () => {
        it('should return 1', () => {
          const output = howManyServings(inputs.oneServingWithFloatQuantities);
          assert.equal(output, 1);
        });
      });
    });

    describe('Zero Quantity', () => {
      describe('When recipe contains ingredient with Zero Quantity', () => {
        it('should return 2', () => {
          const output = howManyServings(inputs.zeroQuantityInRecipe);
          assert.equal(output, 2);
        });
      });
      describe('When inventory contains ingredient with Zero Quantity', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.zeroQuantityInInventory);
          assert.equal(output, 0);
        });
      });
    });

    describe('Negative Quantity', () => {
      describe('When recipe contains ingredient with Negative Quantity', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.negativeQuantityInRecipe);
          assert.equal(output, 0);
        });
      });
      describe('When inventory contains ingredient with Negative Quantity', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.negativeQuantityInInventory);
          assert.equal(output, 0);
        });
      });
      describe('When recipe and inventory both contains ingredient with Negative Quantity', () => {
        it('should return 0', () => {
          const output = howManyServings(inputs.negativeQuantityInBoth);
          assert.equal(output, 0);
        });
      });
    });
  });
});
