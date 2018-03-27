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
  describe('When there is enough ingredient for two serving', () => {
    it('should return 2', () => {
      const output = howManyServings(inputs.twoServing);
      assert.equal(output, 2);
    });
  });
  describe('When there is enough ingredient for three serving', () => {
    it('should return 3', () => {
      const output = howManyServings(inputs.threeServing);
      assert.equal(output, 3);
    });
  });
  describe('When there is enough ingredient for zero serving', () => {
    it('should return 0', () => {
      const output = howManyServings(inputs.zeroServing);
      assert.equal(output, 0);
    });
  });
  describe('When there is NonIntegerValue', () => {
    it('should throw error for non integer type or negative integer', () => {
      try{
      const output = howManyServings(inputs.NonIntegerValue);
  		}
      catch(err) {
      assert.equal(err.message, "Inventory only accepts positive integers");
  		}
    });
  });
  describe('When there is negative integer', () => {
    it('should throw error for non integer type or negative integer', () => {
      try{
      const output = howManyServings(inputs.NonPositiveInteger);
  		}
  	  catch(err){
      assert.equal(err.message, "Inventory only accepts positive integers");
  		}
    });
  });
  describe('When number of items Dont Match', () => {
    it('should throw error for number of items dont matching', () => {
    try{
      const output = howManyServings(inputs.numberOfItemsDontMatch);
  		}
  	catch(err){
      assert.equal(err.message, "Number of items in inventory and recipe don't match");
  		}	
    });
  });
  describe('When items Dont Match', () => {
    it('should throw error for items not matching', () => {
    try{
      const output = howManyServings(inputs.ItemsDontMatch);
    }
    catch(err){
      assert.equal(err.message, "Items in inventory and recipe don't match");
    }
    });
  });
  describe('When there is undefined value', () => {
    it('should throw error for undefined values', () => {
    try{
      const output = howManyServings(inputs.undefinedValue);
    }
    catch(err){
      assert.equal(err.message, "undefined type not accepted");
     }
    });
  });
});