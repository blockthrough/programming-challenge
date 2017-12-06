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
  describe('When there is enough ingredient for two servings', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.twoServings);
      assert.equal(output, 2);
    });
  });
  describe('When there is enough ingredient for zero servings', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServings);
      assert.equal(output, 0);
    });
  });
  describe('When there is enough ingredient for null servings', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.nullServings);
      assert.equal(output, 0);
    });
  });
  describe('When there is enough ingredient for nan servings', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.nanServings);
      assert.equal(output, 0);
    });
  });
  describe('When there is enough ingredient for -1 servings', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.negServings);
      assert.equal(output, 0);
    });
  });
  describe('When there are (is a) missing ingredient(s)', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.missingServings);
      assert.equal(output, 0);
    });
  });
  // Really I feel like we should assert that a recipe value must be
  // greater than 0, but idk how you guys would want that handled.
  describe('When the recipe calls for 0 of an ingredient', () => {
    it('should ignore that ingredient?', () => {
      const output = howManyServings(inputs.zeroRecipe);
      assert.equal(output, 2);
    });
  });
  describe('When the recipe calls for float of an ingredient', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.floatServings);
      assert.equal(output, 1);
    });
  });
});