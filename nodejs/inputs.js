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
  fiveServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 55,
      peanutButter: 80,
      jam: 200
    }
  },
  extraInventory: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 55,
      peanutButter: 80,
      jam: 200,
      pickles: 53
    }
  },
  negativeValue: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 55,
      peanutButter: 80,
      jam: -200
    }
  },
  stringTest: "String Test",
  inventoryMissingIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10
    }
  },
}