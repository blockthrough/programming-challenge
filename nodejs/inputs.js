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
      bread: 3,
      peanutButter: 10,
      jam: 5
    }
  },

  thirtyServings: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 300,
      peanutButter: 150,
      jam: 150
    }
  },

  missingIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 30,
      peanutButter: 10
    }
  },

  extraIngredient: {
    recipe: {
      bread: 10,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 10,
      peanutButter: 5,
      jam: 5,
      caviar: 5
    }
  },

  invalidVal: {
    recipe: {
      bread: 'cat photos',
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },

  invalidParams: 5,

}
