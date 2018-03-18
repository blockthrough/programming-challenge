function howManyServings (params) {
  const {recipe, inventory} = params

  // use for-in loop to verify the input
  for (var key in params) {
  	for (var keys in params[key]) {
  		obj = params[key]
  		if (typeof(obj[keys]) != 'number') {
  			return new TypeError('Only integers can be used as values!')
  		}
  	}
  	}

  // Divide the amount in the inventory by the amount required for the recipe
  // round it down because there can't be a fraction of an ingredient, we can only use 
  // what is enough for the recipe

  var bread_confirm = Math.floor(inventory.bread / recipe.bread)
  var peanutButter_confirm = Math.floor(inventory.peanutButter / recipe.peanutButter)
  var jam_confirm = Math.floor(inventory.jam / recipe.jam)

  minimum_servings = Math.min(bread_confirm, peanutButter_confirm, jam_confirm)
  return minimum_servings
}

module.exports = {howManyServings}
