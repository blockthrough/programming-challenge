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
  zeroServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 1
    }
  },
  tenServings: {
    recipe: {
      bread: 1,
      peanutButter: 1,
      jam: 1
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 15
    }
  },
  extraInventory: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5,
      ham: 5
    }
  },
  lackingInventory: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      ham: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  inventoryNotDefined: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    }
  },
  recipeNotDefined: {
    inventory: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    }
  },
  noIngredientInRecipe: {
    recipe: {
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  noIngredientInInventory: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
    }
  },
  noIngredientInRecipeAndInventory: {
    recipe: {
    },
    inventory: {
    }
  },
  recipeContainsNaN: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 'five'
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  inventoryContainsNaN: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 'five'
    }
  },
}
