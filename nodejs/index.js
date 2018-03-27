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

  // If we know for sure what are the ingredients and that the structures of both inventory and recipe dictionaries are always the same, 
  // then it's pretty straight forward: (uncomment for testing).

  // while(((inventory["bread"] - recipe["bread"]) >= 0) && ((inventory["peanutButter"] - recipe["peanutButter"]) >= 0) &&((inventory["jam"] - recipe["jam"]) >= 0)){
  //  count +=1;
  //  inventory["bread"] = inventory["bread"] - recipe["bread"];
  //  inventory["peanutButter"] = inventory["peanutButter"] - recipe["peanutButter"];
  //  inventory["jam"] = inventory["jam"] - recipe["jam"];
  // }
  // return count

  //If not:
  var ingredients = []
  for (var i = 0; i < Object.keys(inventory).length;i++){
  	ingredients.push(Math.floor(inventory[Object.keys(inventory)[i]] / recipe[Object.keys(recipe)[i]]));
  }

  return Math.min(...ingredients);
}

module.exports = {howManyServings}
