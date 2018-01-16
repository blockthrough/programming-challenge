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
  fortyTwoServings: {
    recipe: {
      bread: 1,
      peanutButter: 1,
      jam: 1
    },
    inventory: {
      bread: 42,
      peanutButter: 42,
      jam: 42
    }
  },
  fortyOneServingsAndExtra: {
    recipe: {
      bread: 1,
      peanutButter: 1,
      jam: 1
    },
    inventory: {
      bread: 41,
      peanutButter: 41,
      jam: 43,
      butter: 10
    }
  },
  twoServingsExceptRecipeBreadIsZero: {
    recipe: {
      bread: 0,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 10
    }
  },
  oneServingExceptRecipeBreadMalformedAsNegativeOne: {
    recipe: {
      bread: -1,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  oneServingExceptRecipeBreadMalformedAsString: {
    recipe: {
      bread: "Hello!",
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
  oneServingExceptInventoryBreadMalformedAsNegativeOne: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: -1,
      peanutButter: 10,
      jam: 5
    }
  },
  oneServingExceptInventoryBreadMalformedAsString: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: "Hello!",
      peanutButter: 10,
      jam: 5
    }
  },
  oneServingExceptInventoryBreadMissing: {
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
  zeroServings: {
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
  }
}
