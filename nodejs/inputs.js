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
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
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
      peanutButter: 0,
      jam: 0
    }
  },
  nullServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: null,
      peanutButter: null,
      jam: null
    }
  },
  nanServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 'a',
      peanutButter: 'b',
      jam: 'c'
    }
  },
  negServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: -1,
      peanutButter: -1,
      jam: -1
    }
  },
  missingServings: {
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
  zeroRecipe: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 0
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  floatServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10.5,
      peanutButter: 5.5,
      jam: 5.5
    }
  }
}