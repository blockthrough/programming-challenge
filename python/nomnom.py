# two inputs must be given to the 'how_many_servings' function:
# first is a recipe dictionary
# second arguments is the inventory dictionary
# they keys of both dictionaries are (type: string) and their values are (type: int)
# the function outputs an integer, which is the number of servings that can be made


def how_many_servings(recipe, inventory):

    # finding errors (if present) before doing any calculations

    # returs an error message if the recipe or the inventory are empty
    if (not recipe) or (not inventory):
        raise Exception(
            'Both the recipe and inventory dictionaries must have at least one element!')

    # finds errors in the recipe dictionary
    for key in recipe.keys():

        # 0 people can be served if inventory does not contain all types of ingredients required by the recipe
        # this, however, applies only if the amount of the ingredient required by the recipe is large than 0
        # if the recipe requires 0 amount (or a negative amount) of an ingredient, it does not have to be in the inventory
        if (recipe[key] > 0) and (key not in inventory.keys()):
            return 0

        # raises a "TypeError" if the keys used in the dictionary are not strings
        elif (type(key) != str):
            raise TypeError("The name of the ingredients in the recipe must be strings!")

        # raises a "TypeError" if the values used in the dictionary are not integers
        # based on requirements in the "README.md" file, the values must be integers; thus, even floating points will result in a "ValueError."
        elif (type(recipe[key]) != int):
            raise TypeError(
                "The units of each serving - the values - must be integers or decimals!")

        # raises a "ValueError" if the values in the ingredients are negative
        elif (recipe[key] < 0):
            raise ValueError("The values of the ingredients in the recipe can't be negative!")
    # finds the errors in the inventory dictionary
    for keys in inventory.keys():
        # checks to see if all the keys of the inventory dictionary are strings
        # according to the requirements given in the 'README.md' file, the keys must be strings
        if (type(keys) != str):
            # raises a TypeError if the keys of the inventory are not of type string
            raise TypeError("The name of the ingredients in the inventory must be strings!")
        # checks to see if all the values of the inventory dictionary are integers
        # according to the requirements given in the 'README.md' file, the values must be integers
        elif (type(inventory[keys]) != int):
            # raises a TypeError if the values of the inventory are not integers
            raise TypeError(
                "The units of each serving - the values - must be integers or decimals!")
        elif (inventory[keys] < 0):
            raise ValueError("The values of the ingredients in the inventory can't be negative!")

    # if there are no errors, continues with the calculations

    # initializes a list to add the of the inventory ingredients to the
    servings = []

    # iterate over the ingredients in the recipe
    for key in recipe.keys():
        # checks the values to avoid division by zero
        if (recipe[key] > 0):
            # using integer division, finds how many servings will the specific ingredients yield
            serves = inventory[key] // recipe[key]
            servings.append(serves)
    # finds and returns the minimum value in the servings list; this is equal to the maximum servings that can be prepared
    num = min(servings)
    return num
