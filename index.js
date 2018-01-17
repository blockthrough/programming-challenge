//Introduction
console.log("\nHello, \nMy name is Mark O'Sullivan. Over the past week I have been completing this assignment.")
console.log("It has been over a year since I have been scripting of any sort. Node.js, as well as Javascript is all new for me. ")
console.log("I understand this answer may not be perfect, and there are easier ways to complete what I have done in these files")
console.log("I believe the 'mocha' module that was suggested could possibly complete the task more simply than my method")
console.log("Although this script is not as extensive as I'd have liked, I'm hoping it shows that I have some scripting knowledge, and that I am still willing to learn")

console.log("\nThe script imports arrays, set out in 'inputs.js'. These are type checked in 'tests.js'. Arrays are then converted to the list of 'recipe' and 'inventory' ")
console.log("howManyServings is then executed and returns the servings quantity")
console.log("")


//requirements
var inputs = require( './inputs.js')  ; 
var tests = require('./tests.js');
	

const inventory= inputs.inventory;
const recipe= inputs.recipe;

const howManyServings = tests.howManyServings;
const sanityCheck = tests.sanityCheck;


tests.oneServing(recipe, 'Recipe');
tests.oneServing(inventory, 'Inventory');

t=sanityCheck(inputs.recipe)

if ( t == 1){ // 1 is sane and ok 
	//check if 3 or more servings
	if (inputs.recipe.length == 3){
		howManyServings(inputs.recipe,inputs.inventory); //these are undefined 
	}

}
