function howManyServings (params) {
  const {recipe, inventory} = params
  var servings = 0;

  if (recipe == null || recipe == undefined || inventory == null || inventory == undefined){
    return servings;
  }
  if (Object.keys(inventory).length < Object.keys(recipe).length){
    return servings;
  }

  else {
    servings = Math.floor(Math.min(...Object.keys(inventory).map( 
      key => inventory[key] / recipe[key] ))) || 0;
  }

  return servings;
}
module.exports = {howManyServings}
var params = require('./inputs.js');

console.log(howManyServings(params.oneServing));
console.log(howManyServings(params.twoServings));
console.log(howManyServings(params.missingIngredient));
console.log(howManyServings(params.noneFound));
console.log(howManyServings(params.party));

// If recipe is shorter than inventory, does not accomodate calculation and returns 0.