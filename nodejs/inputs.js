module.exports = {
  //Enough for one serving
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

  multipleServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 3875,
      peanutButter: 1284,
      jam: 980
    }
  },

  //Missing one of the ingredients
  missingKey: {
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

  zeroQuantity: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 0,
      jam: 5
    }
  },

  //Invalid parameters
  missingRecipe: {
    inventory: {
      bread: 20,
      peanutButter: 0,
      jam: 5
    }
  },

  missingInventory: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    }
  },

  missingBoth: {},

  invalidType: 'This is not an object'

}
