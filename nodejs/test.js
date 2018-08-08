const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs');

describe('Nomnomthrough', () => {
  //Enough ingredients for 1 serving
  describe('When there is enough ingredient for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });

  //Enough ingredients for multiple servings
  describe('When there is enough ingredients for multiple servings', () => {
    it('should return 196', () => {
      const output = howManyServings(inputs.multipleServings);
      assert.equal(output, 1);
    });
  });

  //Missing ingredients
  describe('When there are ingredients missing', () => {
    it('should return 0 when an ingredient key is missing', () => {
      const output = howManyServings(inputs.missingKey);
      assert.equal(output, 0);
    });

    it('should also return 0 when ingredient value is zero', () => {
      const output = howManyServings(inputs.zeroQuantity);
      assert.equal(output, 0);
    });
  });

  //Invalid params
  describe('When invalid params are passed', () => {
    it('should return 0 when recipe key is missing', () => {
      const output = howManyServings(inputs.missingRecipe);
      assert.equal(output, 0);
    });

    it('should return 0 when inventory key is missing', () => {
      const output = howManyServings(inputs.missingInventory);
      assert.equal(output, 0);
    });

    it('should return 0 when both recipe and inventory keys are missing', () => {
      const output = howManyServings(inputs.missingBoth);
      assert.equal(output, 0);
    });

    it('should return 0 when params is not an object', () => {
      const output = howManyServings(inputs.invalidType);
      assert.equal(output, 0);
    });
  });

});
