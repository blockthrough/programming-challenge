module.exports = {
  zeroServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 10
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 9
    }
  },
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

  onethousandServings: {
    recipe: {
      bread: 1,
      peanutButter: 1,
      jam: 1
    },
    inventory: {
      bread: 1050,
      peanutButter: 1023,
      jam: 1000
    }
  },

  nonintegerValue: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 'sfsf'
    }
  },

  numberString: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: '10'
    }
  },

  negativeintegerValue: {
    recipe: {
      bread: -10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  },

  missingEntry: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
    }
  },
}
