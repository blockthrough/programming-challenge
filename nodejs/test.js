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
  describe('When the recipe ingredient is not available in the inventory', () => {
    it('should return 0', () => {
     var testInputs = { oneServing: {
          recipe: {
            bread: 10,
            peanutButter: 5,
            jam: 5
          },
          inventory: {}
        }
      };
      const output = howManyServings(testInputs.oneServing);
      assert.equal(output, 0);
    });
  });
});

describe('Nomnomthrough', () => {
  describe('When the required recipe ingredient unit is set to 0', () => {
    it('should skip and return 1', () => {
     var testInputs = { oneServing: {
          recipe: {
            bread: 10,
            peanutButter: 5,
            jam: 5,
            ketchup: 0
          },
          inventory: {
              bread: 20,
              peanutButter: 10,
              jam: 5
          }
        }
      };
      const output = howManyServings(testInputs.oneServing);
      assert.equal(output, 1);
    });
  });
});