function howManyServings (params) {
  const {recipe, inventory} = params

  var available_number = 2147483647; // Yeah this is ugly - I could instead add an extra conditional below, but I thought this was cleaner

  for (ingredient in recipe) {
      if (!isFinite(String(recipe[ingredient]))) {
          throw new Error("Recipe ingredient quantity is not a number!");
      } else if (!inventory.hasOwnProperty(ingredient)) {
          // If the recipe specifies a required ingredient with non-zero quantity but the inventory items does not exist, return 0
          return 0;
      } else if (recipe[ingredient] < 0) {
          throw new Error("Recipe ingredient has negative quantity!");
      } else if (!isFinite(String(inventory[ingredient]))) {
          throw new Error("Inventory ingredient quantity is not a number!");
      } else if (inventory[ingredient] < 0) {
          throw new Error("Inventory ingredient has negative quantity!");
      } else if (recipe[ingredient] == 0) {
          // If the recipe specifies an ingredient with quantity zero, we don't care about that one (and this avoids a divide-by-zero later)
          continue;
      } else {
          var available_for_this_ingredient = parseInt(inventory[ingredient] / recipe[ingredient]);
          if (available_for_this_ingredient < available_number) {
              available_number = available_for_this_ingredient
          }
      }
  }

  return available_number;
}

module.exports = {howManyServings}
