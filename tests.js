
//console.log("This is the tests");

var inputs = require( './inputs.js')  ; /// something here is the issue. not importing as an object, just as a not defined 
var tests = require("./tests.js")
var assert = require('assert'); //this is used for comparisons



module.exports ={

	sanityCheck: function(sane){ //check for string variable
		this.sane = [];
		for (var j = 0; j <sane.length; j++){
			if (isNaN(sane[j]) == true){
				console.log("Sorry, but one of those quantities doesn't seem quite right. Maybe give your values another look?")
				return 0; 
			}
			else {return 1;}
		}

	},

	oneServing: function(name, item){ // make the list
		console.log(item);
		this.name = [];
		
    	names = {'bread': name[0], 'peanutButter': name[1], 'jam': name[2]} ;

    	console.log('Bread\t  Peanut Butter\t  Jam')
    	console.log( name[0]+'\t\t' +name[1]+' \t   '+name[2])
    	console.log("")
        return names;
    },

	howManyServings: function(recipe, inventory){ // how many servings based on the recipe
		this.recipe = [];
		this.inventory=[];

		var servings = 0;
		var rem =[ ];

			for (var i = 0; i <recipe.length; i++){
				rem[i] = (inventory[i]/ recipe[i]);
				if(i==0){
					servings=rem[i]
				}

				if ((i==1)||(i==2)){
					if (rem[i] <= rem[i-1]){
						servings = rem[i];
					}
				}
				
			}
		console.log("\nThe quantity of servings available is: " + servings);
		console.log("")
	}



//	newRecipe: function(){ // make the list

		// get user input
		// Use .push to add to an array
//    },



}