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

  oneServingWithOptional: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5,
      banana: 5
    }
  },

  twoServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  },

  eightServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 80,
      peanutButter: 40,
      jam: 40
    }
  },

  noServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 9,
      peanutButter: 4,
      jam: 4
    }
  },

  missingIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10,
      peanutButter: 5
    }
  },

  missingIngredientWithOptional: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10,
      peanutButter: 5,
      banana: 5
    }
  },

  oneServingEmptyIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5,
      banana: 0
    },
    inventory: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    }
  },

  noServingsEmptyIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5,
      banana: 0
    },
    inventory: {
      bread: 5,
      peanutButter: 5,
      jam: 5
    }
  },

  negativeRecipeIngredient: {
    recipe: {
      bread: -10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10,
      peanutButter: 10,
      jam: 5
    }
  },

  negativeInventoryIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10,
      peanutButter: 10,
      jam: -5
    }
  }
}