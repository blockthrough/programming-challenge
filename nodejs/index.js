function howManyServings (params) {
    const {recipe, inventory} = params
    var maxServing = 1000000000; // represents infinity
    // Write code to solve the problem here.
    Object.keys(recipe).forEach(function(key, index) {
        if (inventory[key]) {
            servingsForIngredient = Math.floor(inventory[key]/recipe[key])
            maxServing = (servingsForIngredient < maxServing) ? servingsForIngredient : maxServing
        } else {
            maxServing = 0     
        }
    });
    
    return (maxServing === 1000000000 || maxServing < 0) ? 0 : maxServing;
}

module.exports = {howManyServings}