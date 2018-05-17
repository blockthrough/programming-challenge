const assert = require('assert');
const howManyServings = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for one serving', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.oneServing);
      assert.equal(output, 1);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for two servings', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.twoServings);
      assert.equal(output, 2);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is  not enough ingredient for one serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServing);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When one ingredient is missing (jam)', () => {
    it('should return Ingredient Missing: jam', () => {
      try {
        const output = howManyServings(inputs.missingJamIngredient);
      }
      catch (err) {
        assert.equal(err.message, "Ingredient Missing: jam");
      }
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When one ingredient is missing (bread)', () => {
    it('should return Ingredient Missing: bread', () => {
      try {
        const output = howManyServings(inputs.missingBreadIngredient);
      }
      catch (err) {
        assert.equal(err.message, "Ingredient Missing: bread");
      }
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When value is of string type (non number)', () => {
    it('should return Invalid Value of Type: string for key: jam', () => {
      try {
        const output = howManyServings(inputs.stringValue);
      }
      catch (err) {
        assert.equal(err.message, "Invalid Value of Type: string for key: jam");
      }
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When value is of string type (non number)', () => {
    it('should return Negative Value: -5 for key: jam', () => {
      try {
        const output = howManyServings(inputs.negativeValue);
      }
      catch (err) {
        assert.equal(err.message, "Negative Value: -5 for key: jam");
      }
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for five servings', () => {
    it('should return 5', () => {
      const output = howManyServings(inputs.fiveServings);
      assert.equal(output, 5);
    });
  });
});
