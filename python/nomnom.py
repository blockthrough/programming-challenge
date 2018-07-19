import math


def how_many_servings(recipe, inventory):

	max = float("inf")
	for item in recipe:
		try:
			tmp = math.floor(inventory[item]/recipe[item]) 
		except BaseException as e:
			if e.args[0] != 'division by zero':
			#if an item has value of 0 in recipe, do nothing
				return "something is missing"
				#else, something is missing from the inventory and we can't make any
		if tmp<max:
			max = tmp
	if max == float("inf"):
			return "something is missing"
	return max
