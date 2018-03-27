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
  twoServing: {
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
  threeServing: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 30,
      peanutButter: 15,
      jam: 15
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
      jam: 0
    }
  },
  NonIntegerValue: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: "5"
    }
  },
  NonPositiveInteger: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: -20,
      peanutButter: 10,
      jam: 10
    }
  },
  numberOfItemsDontMatch: {
    recipe: {
      bread: 10,
      peanutButter: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  },
  ItemsDontMatch: {
    recipe: {
      garlicBread: 10,
      Butter: 5,
      Ham: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  },
  undefinedValue: {
    recipe: {
      bread: undefined,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  }
}


























