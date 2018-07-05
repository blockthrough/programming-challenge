howManyServings = (params) => {
  const {recipe, inventory} = params
  let numberOfServings = -1 // but could also leave it undefined

  // ensure we have both recipe and inventory
  if ( !recipe || !inventory ) return 0

  // clean up recipe; remove any ingredients of which 0 are required
  Object.keys(recipe).map((ingredient) => {
    if (recipe[ingredient] === 0) {
      // yes, we are mutating it
      delete recipe[ingredient]
    }
  })

  // fail fast if recipe requires more ingredients than available in inventory
  if (Object.keys(recipe).length > Object.keys(inventory).length) {
    return 0
  }

  // TODO: fail fast if inventory or recipe contain non-numeric quantities

  // calculate portions yielded by each ingredient
  let perIngredient = Object.keys(recipe).map((ingredient) => {
    
    // if no such ingredient in inventory, assume 0
    if ( inventory[ingredient] === undefined ) return 0

    // return minimum number of portions for that ingredient
    return Math.floor((inventory[ingredient] / recipe[ingredient]), 0)
  })

  // calculate maximum number of servings we can make
  numberOfServings = Math.min(...perIngredient)

  return numberOfServings
}

module.exports = {howManyServings}