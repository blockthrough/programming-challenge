def how_many_servings(recipe, inventory):
	max_servings = None
	check_overall_types(recipe,inventory)
	for item in recipe.keys():
		check_item_recipe(recipe,item)
		if recipe[item] == 0:
			continue
		if item not in inventory.keys():
			return 0
		check_item_inventory(inventory, item)
		item_servings = int(inventory[item])//int(recipe[item])
		if item_servings == 0:
			return 0
		elif max_servings == None or item_servings < max_servings:
			max_servings = item_servings
	return max_servings

# checks if the type of recipe and inventory is dictionary
def check_overall_types(recipe, inventory):
	if type(recipe) != dict:
		raise TypeError('Recipe has to be a dictionary')
	if type(inventory) != dict:
		raise TypeError('Inventory has to be a dictionary')

# checks if the item is a string and quantity is an integer in the recipe
def check_item_recipe(recipe, item):
	if type(item) != str:
		raise TypeError('Item in recipe and inventory should be a string')
	if type(recipe[item]) != int:
		raise TypeError('Quantities in recipe should be a positive integer')
	if recipe[item] < 0:
		raise ValueError('Quantities in recipe should be a positive integer')

# checks if the quantity is an integer in the inventory
def check_item_inventory(inventory, item):
	if type(inventory[item]) != int:
		raise TypeError('Quantities in inventory should be a positive integer')
	if inventory[item] < 0:
		raise ValueError('Quantities in inventory should be a positive integer')
