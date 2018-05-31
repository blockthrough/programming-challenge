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
    
  noServing: {
    recipe: {
      bread: 100,
      peanutButter: 5,
      jam: 5
    },
    inventory: {
      bread: 20,
      peanutButter: 10,
      jam: 5
    }
  },
    
  thousandServing: {
    recipe: {
      bread: 200,
      peanutButter: 50,
      jam: 5
    },
    inventory: {
      bread: 200112,
      peanutButter: 50000000,
      jam: 5002
    }
  },
    
  missingInventoryIngredient: {
    recipe: {
      bread: 200,
      peanutButter: 50,
      jam: 5 
    },
    inventory: {
      bread: 2000,
    }
  },
    
  missingRecipeIngredient: {
    recipe: {
      bread: 200,
    },
    inventory: {
      bread: 2000,
      peanutButter: 50,
      jam: 5 
    }
  }
}