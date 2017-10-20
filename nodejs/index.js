
/**
 *  howManyServings
 *	calculates number of servings by the recipe and inventory supplied in the parameters
 * @params {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  }} - params example
 * @return {number} The resulting number of servings that are possible.
 */
function howManyServings (params) {
  const {recipe, inventory} = params
  
  // take recipe and cycle through each property and find it in inventory 
  var quanity; 
  for(ingredient in recipe){
	if(!inventory[ingredient]/recipe[ingredient]){
		console.log("Missing ingredient from inventory. No servings possible.")
		return 0; 
	 }
	if(inventory[ingredient]/recipe[ingredient] < quanity || !quanity){
		quanity = inventory[ingredient]/recipe[ingredient];  
	}
  }
  return quanity; 
  
}


module.exports = howManyServings