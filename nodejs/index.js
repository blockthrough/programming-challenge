function howManyServings (params) {
  const {recipe, inventory} = params

  // Write code to solve the problem here.

  //Validating inventory and recipe values
  for (var i = 0; i < Object.keys(inventory).length;i++){

  	if((inventory[Object.keys(inventory)[i]] == undefined) || (recipe[Object.keys(recipe)[i]] == undefined)){
  		throw new Error("undefined type not accepted");
  	}
  	if((typeof inventory[Object.keys(inventory)[i]] !== "number") || (inventory[Object.keys(inventory)[i]] < 0)){
  		throw new Error("Inventory only accepts positive integers");
  	}
  	if((typeof recipe[Object.keys(recipe)[i]] !== "number") || (recipe[Object.keys(recipe)[i]] < 0)){
  		throw new Error("Recipe only accepts positive integers");
  	}
  	if(Object.keys(inventory).length !== Object.keys(recipe).length){
  		throw new Error("Number of items in inventory and recipe don't match");
  	}
  	if(Object.keys(inventory)[i] !== Object.keys(recipe)[i]) {
  		throw new Error("Items in inventory and recipe don't match");	
  	}
  }
  var ingredients = []
  for (var i = 0; i < Object.keys(inventory).length;i++){
  	ingredients.push(Math.floor(inventory[Object.keys(inventory)[i]] / recipe[Object.keys(recipe)[i]]));
  }

  return Math.min(...ingredients);
}

module.exports = {howManyServings}