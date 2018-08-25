// Parameter validation:
//  - recipe and inventory exist in params
//  - check that both recipe and inventory are objects
//  - check that both recipe and inventory entries have positive numeric values
function validParams (params) {
    if (!( typeof params === 'object'
        && 'recipe' in params 
        && 'inventory' in params)) {
        return false
    }

    const {recipe, inventory} = params
    if (! typeof recipe === 'object'                                          
	|| ! typeof inventory === 'object') {
        return false                                              
    }                                                                                        
                                                                                                          
    const validRecipe = Object.values(recipe)
        .map(val => typeof val === 'number' && val >= 0)
        .reduce((acc, valid) => acc && valid, true)
    const validInventory = Object.values(inventory)
        .map(val => typeof val === 'number' && val >= 0)
        .reduce((acc, valid) => acc && valid, true)

    return validRecipe && validInventory
}

// Note: returns -1 by default if invalid params are given
function howManyServings (params, errVal = -1) {
    if (! validParams(params)) {
        return errVal
    }

    const {recipe, inventory} = params
    const servings = Object.entries(recipe)
        .map(([ingredient, needed]) => ingredient in inventory ?
            Math.floor(inventory[ingredient] / needed) : 0 )
        .reduce((minimum, amount) => Math.min(minimum, amount), Number.POSITIVE_INFINITY)

    return servings
}

module.exports = {howManyServings}
