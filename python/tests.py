# Write unit tests here
from nomnom import how_many_servings

#Example test case from the documentation, should return 1
test1 = how_many_servings(recipe={'bread': 10,'peanutButter': 5,'jam': 5}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test1==1)

#Simple test case where inventory ingredients are not enough for a single serving
test2 = how_many_servings(recipe={'bread': 100,'peanutButter': 50,'jam': 5}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test2==0)

#Simple test case where inventory ingredients are enough for a single serving
test3 = how_many_servings(recipe={'bread': 10,'peanutButter': 5,'jam': 5}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test3==1)

#Simple test case where inventory ingredients are enough for a double serving
test4 = how_many_servings(recipe={'bread': 10,'peanutButter': 5,'jam': 1}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test4==2)

#Making sure function fails when it receives invalid inputs
try:
    test5 = how_many_servings(recipe={'bread': 0,'peanutButter': 0,'jam': 0}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
except Exception as err:
    print('Error in test5: ' + err.args[0])
    
try:
    test6 = how_many_servings(recipe={'bread': -1,'peanutButter': 1,'jam': 1}, inventory={'bread': 100,'peanutButter': 100,'jam': 0})
except Exception as err:
    print('Error in test6: ' + err.args[0])
    
try:
    test7= how_many_servings(recipe={'bread': 1,'peanutButter': 1,'jam': 1}, inventory={'bread': 100,'peanutButter': 100,'jam': -1})
except Exception as err:
    print('Error in test7: ' + err.args[0])
    
#Additional tests with valid inputs to check that function returns correct result
test8 = how_many_servings(recipe={'bread': 100,'peanutButter': 100,'jam': 100}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test8==0)

test9 = how_many_servings(recipe={'bread': 1,'peanutButter': 1,'jam': 1}, inventory={'bread': 20,'peanutButter': 10,'jam': 5})
assert(test9==5)

test10 = how_many_servings(recipe={'bread': 1,'peanutButter': 1,'jam': 1}, inventory={'bread': 100,'peanutButter': 100,'jam': 100})
assert(test10==100)

test11 = how_many_servings(recipe={'bread': 1,'peanutButter': 1,'jam': 1}, inventory={'bread': 1,'peanutButter': 1,'jam': 5})
assert(test11==1)

test12 = how_many_servings(recipe={'bread': 1,'peanutButter': 1,'jam': 1}, inventory={'bread': 100,'peanutButter': 100,'jam': 0})
assert(test12==0)

test13 = how_many_servings(recipe={'bread': 30,'peanutButter': 40,'jam': 40}, inventory={'bread': 10,'peanutButter': 100,'jam': 20})
assert(test13==0)

test14 = how_many_servings(recipe={'bread': 30,'peanutButter': 40,'jam': 40}, inventory={'bread': 30,'peanutButter': 40,'jam': 50})
assert(test14==1)

test15 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'jam': 40}, inventory={'bread': 30,'peanutButter': 40,'jam': 50})
assert(test15 == 1)

test16 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'jam': 10}, inventory={'bread': 300,'peanutButter': 400,'jam': 500})
assert(test16==30)

#Make sure that test still pass even when keys order is not the same
test17 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'jam': 10}, inventory={'peanutButter': 400,'bread': 300,'jam': 500})
assert(test17==30)

#Make sure that test fail when set of keys of recipe and inventory are different
try:
    test18 = how_many_servings(recipe={'bread': 10,'peanutButter': 10}, inventory={'peanutButter': 400,'bread': 300,'jam': 500})
except Exception as err:
    print('Error in test18: ' + err.args[0])

#Make sure that test fail when set of keys of recipe and inventory are different
try:
    test19 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'jam': 10}, inventory={'peanutButter': 400,'bread': 300})
except Exception as err:
    print('Error in test19: ' + err.args[0])

#Make sure that test fail when set of keys of recipe and inventory are different
try:
    test20 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'eggs': 12}, inventory={'salad': 400,'butter': 300,'chicken': 500})
except Exception as err:
    print('Error in test20: ' + err.args[0])

#Make sure that test fail when set of keys of recipe and inventory are different
try:
    test21 = how_many_servings(recipe={}, inventory={'salad': 400,'butter': 300,'chicken': 500})
except Exception as err:
    print('Error in test20: ' + err.args[0])


#Make sure that test fail when set of keys of recipe and inventory are different
try:
    test22 = how_many_servings(recipe={'bread': 10,'peanutButter': 10,'eggs': 12}, inventory={})
except Exception as err:
    print('Error in test20: ' + err.args[0])
    
#Empty recipe test case should return 0   
test23 = how_many_servings(recipe={}, inventory={})
assert(test23==0)

#Recipe requires only one ingredient but inventory does not have enough of that ingredient
test24 = how_many_servings(recipe={'chicken':10}, inventory={'chicken':9})
assert(test24==0)

#Recipe requires only one ingredient and inventory has enough of that ingredient   
test25 = how_many_servings(recipe={'chicken':10}, inventory={'chicken':100})
assert(test25==10)

#Edge cases for when we are missing just a little bit of an ingredient
test26 = how_many_servings(recipe={'bread': 100,'peanutButter': 100,'jam': 10}, inventory={'bread': 99,'peanutButter': 99,'jam': 10})
assert(test26==0)

#Sanity check to make sure the function works for different kinds of recipes   
test27 = how_many_servings(recipe={'salad': 40,'butter': 3,'chicken': 1, 'fries':100,'ketchup':1,'water':1,'pickles':10}, inventory={'salad': 120,'butter': 300,'chicken': 10,'fries':300,'ketchup':10,'water':10,'pickles':100})
assert(test27==3)
