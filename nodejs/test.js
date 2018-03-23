const assert = require("assert");
const { howManyServings } = require("./index");
const inputs = require("./inputs");

describe("Nomnomthrough", () => {
  describe("When there is enough ingredients for one serving", () => {
    it("should return 1", () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
  describe("When there is enough ingredients for two servings", () => {
    it("should return 2", () => {
      const output = howManyServings(inputs.twoServings);
      assert.equal(output, 2);
    });
  });
  describe("When the value for an ingredient is a negative integer", () => {
    it("should return an error message", () => {
      try {
        const output = howManyServings(inputs.negativeServing);
      } catch (err) {
        assert.equal(err.message, "-20 is not a positive integer.");
      }
    });
  });
  describe("When there is enough ingredients for zero servings", () => {
    it("should return 0", () => {
      const output = howManyServings(inputs.zeroServings);
      assert.equal(output, 0);
    });
  });
  describe("When the value for an ingredient is a string value", () => {
    it("should return an error message", () => {
      try {
        const output = howManyServings(inputs.stringValueServing);
      } catch (err) {
        assert.equal(err.message, "\"bread\" is not an integer number.");
      }
    });
  });
  describe("When the value for an ingredient is a string number", () => {
    it("should return an error message", () => {
      try {
        const output = howManyServings(inputs.numberStringServing);
      } catch (err) {
        assert.equal(err.message, "\"20\" is not an integer number.");
      }
    });
  });
  describe("When an ingredient in inventory is missing", () => {
    it("should return an error message", () => {
      try {
        const output = howManyServings(inputs.incompleteValueServing);
      } catch (err) {
        assert.equal(err.message, "There is a missing ingredient.");
      }
    });
  });
  describe("When the value for an ingredient is null", () => {
    it("should return an error message", () => {
      try {
        const output = howManyServings(inputs.nullValueServing);
      } catch (err) {
        assert.equal(err.message, "\"null\" is not an integer number.");
      }
    });
  });
  describe("When there is a different recipe and enough ingredients for one serving", () => {
    it("should return 1", () => {
      const output = howManyServings(inputs.differentRecipeOneServing);
      assert.equal(output, 1);
    });
  });
});
