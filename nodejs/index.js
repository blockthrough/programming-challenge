
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
  
  if(!params || !params.recipe || !params.inventory){
	  return 0; 
  }
  const {recipe, inventory} = params
  
  var quanity; 
  for(ingredient in recipe){
	  
	if(!inventory[ingredient]/recipe[ingredient]){
		
		return 0; 
	 }
	if(inventory[ingredient]/recipe[ingredient] < quanity || !quanity){
		quanity = inventory[ingredient]/recipe[ingredient];  
	}
  }
  return quanity; 
  
}





module.exports = howManyServings