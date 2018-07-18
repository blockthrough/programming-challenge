function howManyServings (params) {
  const {recipe, inventory} = params
  let ingredientsThatIHaveInInventory = []
  let ingredientsInRecipe = []
  let servingPerIngredient = []
  for(ingredient in recipe){
    ingredientsInRecipe.push(ingredient)
    for(item in inventory){
      if(item === ingredient && inventory[item] >= 0){
        ingredientsThatIHaveInInventory.push(item)
        servingPerIngredient.push(inventory[item]/recipe[ingredient])
      }
    }
  }
  if(ingredientsThatIHaveInInventory.length === ingredientsInRecipe.length && ingredientsThatIHaveInInventory.length > 0){
    let minServingPerIngredient = Math.min(...servingPerIngredient)
    return Math.floor(minServingPerIngredient)
  }
  else {
    return 0
  }
}

module.exports = {howManyServings}