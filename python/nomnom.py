def how_many_servings(recipe, inventory):
	count = 0
	if set(recipe).issubset(set(inventory)):
		while True:
			ran = 0
			for key in recipe:
				if recipe[key] <= inventory[key]:
					ran+=1
					inventory[key]-=recipe[key]
				else:
					break
			if ran == len(recipe):
				count+=1
				ran=0
			else:
				break
	return count
