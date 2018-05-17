
function validateValue(key, value) {
  if(value === undefined) {
    throw new Error(`Ingredient Missing: ${key}`);
  }
  else if(typeof(value) !== "number") {
    throw new Error(`Invalid Value of Type: ${typeof(value)} for key: ${key}`);
  }
  else if(value < 0) {
    throw new Error(`Negative Value: ${value} for key: ${key}`);
  }
}

function howManyServings (params) {
  const recipe = params.recipe
  var inventory = params.inventory

  const firstKey = Object.keys(recipe)[0];

  // Considering servings for any one ingredient as initial servings value
  // If serving for another ingredient is less than the initial value,
  // it will be updated with the lesser value
  var servings = parseInt(inventory[firstKey]/recipe[firstKey]);

  Object.keys(recipe).forEach(function(key) {

    // Validate value of ingredient for recipe and inventory and raise an error
    validateValue(key, inventory[key]);
    validateValue(key, recipe[key]);

    const ingredientServings = parseInt(inventory[key]/recipe[key]);

    // If serving for an ingredient is less than previous servings value, the lower value is assigned to servings
    if (ingredientServings < servings) {
      servings = ingredientServings;
    }
  });
  
  return servings;
}

module.exports = howManyServings
