module.exports = {
  oneServing: {
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
  },
  noServing: {
    recipe: {
      bread: 5,
      jam: 5
    },
    inventory:{
      bread:2,
      jam: 6
    }
  },
  ingredientDoesntExist: {
    recipe: {
      bread: 5,
      jam: 5
    },
    inventory: {
      bread: 5,
      peanutButter: 5
    }
  },
  multipleServings: {
    recipe: {
      bread: 2,
      jam :2,
    },
    inventory: {
      bread:8,
      jam: 10
    }
  },
  specialCharacters: {
    recipe: {
      "!@#":1,
      "%^&":2
    },
    inventory: {
      "!@#":1,
      "%^&":2
    }
  },
  negativeInventory:{
    recipe: {
      bread: 2,
      jam :2,
    },
    inventory: {
      bread:-2,
      jam: -2
    }
  },
  negativeRecipe:{
    recipe: {
      bread: -2,
      jam :-2,
    },
    inventory: {
      bread:2,
      jam: 2
    }
  },
  negativeRecipeAndInventory:{
    recipe: {
      bread: -2,
      jam :-2,
    },
    inventory: {
      bread:-2,
      jam:-2
    }
  },
  maxInteger:{
    recipe: {
      bread: Number.MAX_VALUE/2
    },
    inventory:{
      bread: Number.MAX_VALUE
    }
  },
  zeroRecipe:{
    recipe:{
      bread:0,
    },
    inventory:{
      bread:1,
    }
  },
  noRecipe:{
    inventory: {
      bread: 1
    }
  },
  noIngredients:{
    recipe:{
      bread:1
    }
  },
  noRecipeOrIngredients:{}
}