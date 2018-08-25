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
});

describe('Nomnomthrough', () => {
  describe('When there not is enough ingredient for a serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.noServings);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for thirty servings', () => {
    it('should return 30', () => {
      const output = howManyServings(inputs.thirtyServings);
      assert.equal(output, 30);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is a missing ingredient', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.missingIngredient);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is enough ingredient for one serving, and extra inventory', () => {
    it('should return 1', () => {
      const output = howManyServings(inputs.extraIngredient);
      assert.equal(output, 1);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is an invalid quantity', () => {
    it('should return -1', () => {
      const output = howManyServings(inputs.invalidVal);
      assert.equal(output, -1);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When there is invalid input', () => {
    it('should return -1', () => {
      const output = howManyServings(inputs.invalidParams);
      assert.equal(output, -1);
    });
  });
});
