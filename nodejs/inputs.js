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

  noServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 2,
      peanutButter: 10,
      jam: 5
    }
  },

  inventoryTooSmall: {
    recipe: {
      bread: 3,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 2,
      jam: 5
    }
  },

  uselessIngredient: {
    recipe: {
      bread: 3,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 2,
      jam: 5,
      chocolate: 3
    }
  },

  oneServingZeroQtyIngredient: {
    recipe: {
      bread: 3,
      peanutButter: 5,
      jam: 5,
      jelly: 0 
    },
    inventory: {
      bread: 4,
      jam: 5,
      peanutButter: 6
    }
  },

  noServingZeroQtyIngredient: {
    recipe: {
      bread: 20,
      peanutButter: 5,
      jam: 5,
      jelly: 0 
    },
    inventory: {
      bread: 4,
      jam: 5,
      peanutButter: 6
    }
  },

  fiveServingsExtraIngredients: {
    recipe: {
      bread: 2,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 11,
      jam: 29,
      peanutButter: 27,
      chocolate: 8
    }
  },

  fiveServingsNoExtraIngredients: {
    recipe: {
      bread: 2,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 11,
      jam: 29,
      peanutButter: 27,
    }
  },

  noRecipe: {
    inventory: {
      bread: 2
    }
  },

  noInventory: {
    recipe: {
      bread: 2,
    }
  },

  recipeNotQuantifiable: {
    recipe: {
      bread: 3,
      peanutButter: "one teaspoon",
      jam: 5
    },
    inventory: {
      bread: 2,
      jam: 5,
      peanutButter: 5
    }
  },

  inventoryNotQuantifiable: {
    recipe: {
      bread: 3,
      peanutButter: 4,
      jam: 5
    },
    inventory: {
      bread: 2,
      jam: "one teaspoon",
      peanutButter: 5
    }
  },
}