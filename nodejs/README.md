# Potluck

Blockthrough is throwing a potluck party and you're invited. Luckily, you're pretty good at making a dish called Nomnomthrough. You've also taken inventory of the items in your fridge and pantry. Now you need to figure out, based on the inventory, how many people can be served if you made Nomnomthrough. The challenge is to write a nodejs program to do the calculations. You must not use any third party libraries.

# Setup

All the required files are udner the `nodejs` folder of this repo.

We already did the initial steps for you. You'll find a method `howManyServings` in the `index.js` file. This method should accept a plain javascript object containing keys `recipe` and `inventory`. After performing the calculations, the method should return an integer indicating the number of Nomnomthrough servings you can make based on the given inventory.

The `recipe` is an object that indicates how many units of each ingredient is needed to make 1 serving of Nomnomthrough. Ingredient names are strings and quantities are integers.

The `inventory` is an object recording how many units of each ingredient you have. Again, ingredient names are strings while quantities are integers. See example below for clarity.

```
howManyServings({
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
});    // returns  1

```

You'll also find the `tests.js` in the same directory. We've added one unit test to warm up the pot for you. Please ad more tests as you see fit.

# Deliverables
- Source code for solving the problem
- Unit tests

# Instructions
- Clone this repo
- Solve the problem and write some unit tests
- Send a pull request
- Have fun through and through
