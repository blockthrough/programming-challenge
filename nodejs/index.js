function howManyServings (params) {
    const {recipe, inventory} = params
    // constant for recipe
    var recipeBread = recipe["bread"]
    var recipePeanut = recipe["peanutButter"]
    var recipeJam = recipe["jam"]
    // constant for inventory
    var inventBread = inventory["bread"]
    var inventPeanut = inventory["peanutButter"]
    var inventJam = inventory["jam"]
    // body
    var availableBread = Math.floor(inventBread/recipeBread)
    var availablePeanut = Math.floor(inventPeanut/recipePeanut)
    var availableJam = Math.floor(inventJam/recipeJam)
    var availableServings = Math.min(availableBread, availablePeanut, availableJam)
    // return the result
    return availableServings
}

module.exports = {howManyServings}