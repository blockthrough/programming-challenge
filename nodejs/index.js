function howManyServings(params) {
  const { recipe, inventory } = params;

  const validate = value => {
    if (value === undefined) {
      throw new Error("There is a missing ingredient.");
    }
    if (typeof value !== "number") {
      throw new Error(`"${value}" is not an integer number.`);
    }
    if (value < 0) {
      throw new Error(`${value} is not a positive integer.`);
    }
  };

  const servings = ingredient => {
    validate(inventory[ingredient]);
    validate(recipe[ingredient]);
    return Math.floor(inventory[ingredient] / recipe[ingredient]);
  };

  const ingredients = Object.keys(recipe);

  const ingredientServings = ingredients.map(item => servings(item));

  return Math.min(...ingredientServings)
}

module.exports = { howManyServings };
