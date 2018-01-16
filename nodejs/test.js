const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there are enough ingredients for exactly 42 servings', () => {
    it('should return 42', () => {
      const output = howManyServings(inputs.fortyTwoServings);
      assert.equal(output, 42);
    });
  });
  describe('When there are enough ingredients for 41 servings and extra', () => {
    it('should return 41', () => {
      const output = howManyServings(inputs.fortyOneServingsAndExtra);
      assert.equal(output, 41);
    });
  });
  describe('When there are enough ingredients for two servings and the recipe specifies an ingredient that is zero', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.twoServingsExceptRecipeBreadIsZero);
      assert.equal(output, 2);
    });
  });
  describe('When the recipe is malformed by including a negative ingredient', () => {
    it('should throw exception', () => {
      try {
        const output = howManyServings(inputs.oneServingExceptRecipeBreadMalformedAsNegativeOne);
      } catch(err) {
        assert.equal(err.message, 'Recipe ingredient has negative quantity!');
      }
    });
  });
  describe('When the recipe is malformed by including an ingredient whose quantity is a string', () => {
    it('should throw exception', () => {
      try {
        const output = howManyServings(inputs.oneServingExceptRecipeBreadMalformedAsString);
        throw new Error('Expected exception but did not get one');
      } catch (err) {
          assert.equal(err.message, 'Recipe ingredient quantity is not a number!');
      }
    });
  });
  describe('When the inventory is malformed by including a required inventory ingredient whose inventory is negative', () => {
    it('should throw exception', () => {
      try {
        const output = howManyServings(inputs.oneServingExceptInventoryBreadMalformedAsNegativeOne);
        throw new Error('Expected exception but did not get one');
      } catch(err) {
        assert.equal(err.message, 'Inventory ingredient has negative quantity!');
      }
    });
  });
  describe('When the inventory is malformed by including a required inventory ingredient that is a string', () => {
    it('should throw exception', () => {
      try {
        const output = howManyServings(inputs.oneServingExceptInventoryBreadMalformedAsString);
      } catch(err) {
        assert.equal(err.message, 'Inventory ingredient quantity is not a number!');
      }
    });
  });
  describe('When there would be enough ingredients for exactly 1 serving except one ingredient is entirely missing from the inventory ', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.oneServingExceptInventoryBreadMissing);
      assert.equal(output, 0);
    });
  });
  describe('When there are not enough ingredients for even one serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServings);
      assert.equal(output, 0);
    });
  });
  describe('When there are enough ingredients for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
});
