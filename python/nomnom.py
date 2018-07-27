def how_many_servings(recipe,inventory):
	"""
	Inputs:
            -recipe: A dictionary that indicates how many units of each ingredient is needed to make 1 serving of Nomnomthrough
            -inventory:A dictionary recording how many units of each ingredient is available
        
        Ouputs: The number of Nomnomthrough servings you can make based on the given inventory
	"""
	
	#make sure keys of recipe and inventory are the same
	if sorted(recipe.keys())!=sorted(inventory.keys()):
	    raise Exception('The keys of recipe and inventory do not match for input: ' + 'recipe=' + str(recipe) + ',' + 'inventory='+ str(inventory))
	    
	#if the recipe and inventory do not contain any ingredients, then we can not make any servings
	if not recipe.keys():
	    return 0
	
	#If the quantity required of an ingredient is 0, then it shouldn't be in recipe because it is not required to make the recipe (also help us avoid division by zero).  
	for key in recipe.keys():
	    if recipe[key]<=0:
	        raise Exception('The value of recipe[' + "'" + key  + "'"+ '] should be > 0 for input: ' + 'recipe=' + str(recipe) + ',' + 'inventory=' + str(inventory))
	        
	for key in inventory.keys():
	    if inventory[key]<0:
	       raise Exception('The value of inventory[' + "'" + key  + "'"+ '] should be >= 0 for input: ' + 'recipe=' + str(recipe) + ',' + 'inventory=' + str(inventory))
	       
	#For each ingredient used in the recipe, how many people could we serve if that ingredient was the only one in the recipe? We use this process find the "limiting" quantity(ies)
	servings = list(map(lambda ingredient: inventory[ingredient]//recipe[ingredient], recipe.keys())) #map each ingredient to its number of servings
	
	return min(servings)


