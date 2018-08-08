function howManyServings (params) {
  try {
    const {recipe, inventory} = params;
    const maxQuantities = [];
    const recipeList = Object.keys(recipe);
    const inventoryList = Object.keys(inventory);

    //Check if inventory contains all required ingredients with valid quantities
    let hasAllIngredients = true;
    for(var i = 0; i < recipeList.length; i++) {
      const item = recipeList[i];
      if (!inventoryList.includes(item) || inventory[item] <= 0) {
        hasAllIngredients = false;
        break;
      }
    }

    if (hasAllIngredients) {
      //Computes max ratio of quantity available to quantity required
      recipeList.forEach(ingredient => {
        const maxRatio = Math.floor(inventory[ingredient] / recipe[ingredient]);
        maxQuantities.push(maxRatio);
      });

      //Number of servings will be determined by the minimum ratio of quantity available to quantity required
      return Math.min(...maxQuantities);
    }

    //Returns zero if ingredients are missing
    return 0;

  } catch (err) {
    // Returns zero if an error occurs
    //The only expected error is a TypeError if the params does not contain recipe and/or inventory keys (or params is not an object altogether)
    return 0;
  }
}

module.exports = {howManyServings}
