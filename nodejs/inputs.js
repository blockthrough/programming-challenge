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
  twoServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 2
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
      bread: 5,
      peanutButter: 10,
      jam: 5
    }
  },
  missingJamIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 5,
      peanutButter: 10,
    }
  },
  missingBreadIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      jam: 5,
      peanutButter: 10,
    }
  },
  stringValue: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 5,
      peanutButter: 10,
      jam: 'x'
    }
  },
  negativeValue: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 5,
      peanutButter: 10,
      jam: -5
    }
  },
  fiveServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 55,
      peanutButter: 50,
      jam: 100
    }
  },
}
