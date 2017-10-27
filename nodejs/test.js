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
  describe("When not enough inventory for one serving", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.noServing);
  		assert.equal(output, 0);
  	});
  });
  describe("When do not have ingredients", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.ingredientDoesntExist);
  		assert.equal(output, 0);
  	});
  });
  describe("When can make multiple servings", () => {
  	it('should return 4', () => {
  		const output = howManyServings(inputs.multipleServings);
  		assert.equal(output, 4);
  	});
  });
  describe("When testing special characters", () => {
  	it('should return 1', () => {
  		const output = howManyServings(inputs.specialCharacters);
  		assert.equal(output, 1);
  	});
  });
  describe("When testing negative inventory", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.negativeInventory);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing negative recipe", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.negativeRecipe);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing negative recipe and inventory", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.negativeRecipeAndInventory);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing max integer value", () => {
  	it('should return 2', () => {
  		const output = howManyServings(inputs.maxInteger);
  		assert.equal(output, 2);
  	});
  });
  describe("When testing zero recipe required", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.zeroRecipe);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing with no recipe", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.noRecipe);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing with no ingredients", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.noIngredients);
  		assert.equal(output, 0);
  	});
  });
  describe("When testing with no recipe or ingredients", () => {
  	it('should return 0', () => {
  		const output = howManyServings(inputs.noRecipeOrIngredients);
  		assert.equal(output, 0);
  	});
  });
});