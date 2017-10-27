function howManyServings (params) {
    const {recipe, inventory} = params

    if (!params || !recipe || !inventory){
        return 0;
    }
    
    var servingCount = Number.MAX_VALUE;

    for (ingredient in recipe){

        // if ingredient not in inventory
        if (!(ingredient in inventory)){
            servingCount = 0;
            break;
        }

        var inventoryRequired = recipe[ingredient];
        var inventoryRemaining = inventory[ingredient];

        //if negative inventory or zero required - not feasible
        if (inventoryRequired <= 0){
            servingCount = 0;
            break;
        }

        // Note: Divide by 0 results in infinity
        var servingsCreated = Math.floor(inventoryRemaining/inventoryRequired);

        //if negative servingsCreated - not feasible
        if (servingsCreated < 0){
            servingCount = 0;
            break;
        }
        //if you can create less servings that what you have counted, update the count
        if (servingsCreated < servingCount){
            servingCount = servingsCreated;
        }
    }

    return servingCount;  
}

module.exports = {howManyServings}