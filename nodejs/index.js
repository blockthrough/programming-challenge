function howManyServings (params) {
  const {recipe, inventory} = params

	var numberOfServings = 0;
    var currentRecipeUnit = 0;
    var currentInventoryUnit = 0;
    var calc = 0;
    var results = [];

    for(key in recipe) {

        currentRecipeUnit = recipe[key];

        //Skip if the recipe ingredient unit is 0
        if(currentRecipeUnit === 0) {
            continue;
        }

        //recipe not found in inventory
        if(!inventory.hasOwnProperty(key)) {
            return 0;
        }

        currentInventoryUnit = inventory[key];

        calc = Math.floor(currentInventoryUnit/currentRecipeUnit);
        results.push(calc);
    }

    numberOfServings = Math.min.apply(null, results);
    return numberOfServings
  }

module.exports = {howManyServings}