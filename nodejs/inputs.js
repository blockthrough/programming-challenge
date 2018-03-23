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
      bread: 4,
      peanutButter: 5,
      jam: 1
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  negativeServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: -20,
      peanutButter: 10,
      jam: 5
    }
  },
  zeroServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 0,
      peanutButter: 10,
      jam: 5
    }
  },
  stringValueServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 'bread',
      peanutButter: 10,
      jam: 5
    }
  },
  numberStringServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: '20',
      peanutButter: 10,
      jam: 5
    }
  },
  incompleteValueServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      peanutButter: 10,
      jam: 5
    }
  },
  nullValueServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: null,
      peanutButter: 10,
      jam: 5
    }
  },
  differentRecipeOneServing: {
    recipe: {
      "olive oil": 10,
      pasta: 5,
      tomato: 5,
      pesto: 3
    },
    inventory: {
      "olive oil": 20,
      pasta: 10,
      tomato: 5,
      pesto: 3
    }
  }
}