# Using the 'unittest' framework to run unit tests on the 'how_many_servings' function included in the 'nomnom.py' file
# All the unit tests are written according to the requirements given in the 'README.md' file; that is : 'recipe' and 'inventory' are dictionaries with strings as their keys and integers as their values
# If the inputs are of any other type (e.g. floating points), the program returns a 'TypeError' along with a message indicating what the specific error was
# One may argue that, for example, if the amount of the ingredients are larger that of the recipe but the values are floating points, the number of servings can still be calculated
# Though in real life this argument is valid, we will not follow that case. The requirements tell us to accept integers (not floating points). Thus, the program has been intentionally designed to return 'TypeError' in such cases


# unittest is a standard library – no need to install any third-party libraries.
import unittest
# importing the 'how_many_servings' function that is in the nomnom.py file, which is placed in the same directory as this file
from nomnom import how_many_servings


class testHowManyServings(unittest.TestCase):

    # each method has a id number, starting from 1
    # each case under the methods also have a id number
    # n.k represents the kth input series of the nth method

    # method id: 1
    # tests normal cases where the values are integers and are divisible by each other
    def test_exact_values(self):

        # case 1.1
        # tests when the amount of inventory is the same as required by the recipe
        one_times_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        one_times_inventory = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        # checks to see if the output is 1
        self.assertEqual(how_many_servings(one_times_recipe, one_times_inventory), 1)

        # case 1.2
        # tests when the inventory is double the recipe
        two_times_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        two_times_inventory = {
            'bread': 20,
            'peanutButter': 10,
            'jam': 2
        }
        # checks to see if it returs 2
        self.assertEqual(how_many_servings(two_times_recipe, two_times_inventory), 2)

        # case 1.3
        # tests when inventory is 10 times the recipe
        ten_times_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        ten_times_inventory = {
            'bread': 100,
            'peanutButter': 50,
            'jam': 10
        }
        # checks to see if it returs 10
        self.assertEqual(how_many_servings(ten_times_recipe, ten_times_inventory), 10)

    # method id: 2
    # tests when values are not devisible
    def test_not_exact_values(self):
        # case 2.1
        # tests when the values are integers, but are not multiples of each other
        not_exact_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        not_exact_inventory = {
            'bread': 99,
            'peanutButter': 6,
            'jam': 9
        }

        # even though there is an excess of 'jam' and 'bread,' there is only enough 'peanutButter' for 1 person; thus, it should return 1.
        # checks to see if it returns 1
        self.assertEqual(how_many_servings(not_exact_recipe, not_exact_inventory), 1)

    # method id: 3
    # tests when the values in recipe, inventory, or both are floating points
    # according to the requirements in the "README.md" file, only integers must be accepted as input
    # therefore, a 'TypeError' must be raised when the input is made of floating points
    def test_floating_values(self):
        # case 3.1
        # tests when only the inventory contains floating points
        first_floating_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        first_floating_inventory = {
            'bread': 22.2,
            'peanutButter': 11.02,
            'jam': 3.9
        }

        # checks to see if a 'TypeError' is being raised
        self.assertRaises(TypeError, how_many_servings,
                          first_floating_recipe, first_floating_inventory)

        # case 3.2
        # tests when only the recipe contains floating points
        second_floating_recipe = {
            'bread': 9.4,
            'peanutButter': 2.4,
            'jam': 0.87
        }
        second_floating_inventory = {
            'bread': 30,
            'peanutButter': 7,
            'jam': 11
        }

        # checks to see if a 'TypeError' is being raised
        self.assertRaises(TypeError, how_many_servings,
                          second_floating_recipe, second_floating_inventory)
        # case 3.3
        # tests when only both the recipe and inventory contain floating points
        third_floating_recipe = {
            'bread': 9.4,
            'peanutButter': 2.4,
            'jam': 0.87
        }
        third_floating_inventory = {
            'bread': 30.3,
            'peanutButter': 7,
            'jam': 11.3
        }

        # checks to see if a 'TypeError' is being raised
        self.assertRaises(TypeError, how_many_servings,
                          third_floating_recipe, third_floating_inventory)

        # case 3.4
        # test when both the recipe and inventory are made of floating points, but the numbers are devisible.
        # this input intedns to trick the program, because the inventory is an integer multiple of the reciple
        fourth_floating_recipe = {
            'bread': 1.1,
            'peanutButter': 2.5,
            'jam': 0.1
        }
        fourth_floating_inventory = {
            'bread': 5.5,
            'peanutButter': 25,
            'jam': 1.1
        }

        # checks to see if a "ValueError" is raised
        self.assertRaises(TypeError, how_many_servings,
                          fourth_floating_recipe, fourth_floating_inventory)

    # method id: 4
    # tests when the  included in the inventory is insufficient
    def test_insufficient_ingredients(self):

        # case 4.1
        # tests when the amount of inventory is less than that of the recipe
        not_enough_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        not_enough_inventory = {
            'bread': 1,
            'peanutButter': 5,
            'jam': 6
        }
        # since the inventory does not contain enough ingredients to even make one serving, it should return zero; the following checks to see if it does just that:
        self.assertEqual(how_many_servings(not_enough_recipe, not_enough_inventory), 0)

        # case 4.2
        # tests when the inventory does not contain all the ingredients required by the recipe
        not_all_ingredients_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        not_all_ingredients_inventory = {
            'bread': 20,
            'peanutButter': 30
            # note that 'jam' is missing
        }

        # can't make even one serving in this case; thus, it should return 0.
        self.assertEqual(how_many_servings(
            not_all_ingredients_recipe, not_all_ingredients_inventory), 0)

        # case 4.3
        # just like case 4.2, but the recipe requires 0 amount of the ingredient missing in the inventory
        # since the amount needed is 0, the fact that the ingredient is not present in the inventory can be ignored
        zero_not_all_ingredients_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 0
        }
        zero_not_all_ingredients_inventory = {
            'bread': 30,
            'peanutButter': 30
            # note that 'jam' is missing; however, the amount of 'jam' required by the recipe is 0
            # thus, the fact that 'jam' is not in the inventory can be ignored
        }

        # we don't return 0; instead, we do the calculations, like in a normal case
        self.assertEqual(how_many_servings(
            zero_not_all_ingredients_recipe, zero_not_all_ingredients_inventory), 3)

    # method id: 5
    # tests when the inventory contains extra ingredients
    def test_more_ingredients(self):
        # case 5.1
        # tests when the inventory contains unnecessory ingredients in addition to the required ones
        # additional ingredients – 'USB cable' in this case – can just be ignored; they are not required by the recipe. Its value, therefore, should not be used in the calculations
        more_ingredients_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 1
        }
        more_ingredients_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 3,
            'USB cable': 12
        }
        # checks to see if it ignore the unnecessory ingredient and returns the expected output
        self.assertEqual(how_many_servings(more_ingredients_recipe,
                                           more_ingredients_inventory), 2)

    # method id: 6
    # tests when negative values are given as input
    def test_negative_values(self):
        # case 6.1
        # tests when both recipe and inventory contain negative numbers

        negative_recipe = {
            'bread': -10,
            'peanutButter': 5,
            'jam': -1
        }
        negative_inventory = {
            'bread': -20,
            'peanutButter': 30,
            'jam': -2
        }
        # checks to see that a 'ValueError' is being raised; negative ingredients do not exist.
        self.assertRaises(ValueError, how_many_servings, negative_recipe, negative_inventory)

    # method id: 7
    # tests when the types of inputs are not as expected
    # (note: for more 'TypeError' cases, see method id 3)
    def test_type(self):
        # case 7.1
        # tests when value(s) of the recipe or inventory is made of strings – it must raise a 'TypeError'
        string_recipe = {
            'bread': 10,
            'peanutButter': 'a lot',
            'jam': 1
        }
        string_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 'a little'
        }
        # checks to see if it raises a 'TypeError'
        self.assertRaises(TypeError, how_many_servings, string_recipe, string_inventory)

        # case 7.2
        # tests when the ingredients are integers – it must raise a 'TypeError'
        int_recipe = {
            2: 10,
            'peanutButter': 5,
            88: 1
        }
        int_inventory = {
            2: 20,
            'peanutButter': 30,
            88: 5
        }
        # checks to see if it returns 'TypeError'
        self.assertRaises(TypeError, how_many_servings, int_recipe, int_inventory)

    # method id: 8
    # tests when the recipe, inventory, or both are missing
    def test_missing(self):
        # case 8.1
        # tests when the recipe is empty
        first_missing_recipe = {

        }

        first_missing_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 2
        }
        # returns an error, telling the user to include elements in the dictionary
        self.assertRaises(Exception, how_many_servings,
                          first_missing_recipe, first_missing_inventory)

        # case 8.2
        # tests when the inventory is empty
        second_missing_recipe = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 2
        }

        second_missing_inventory = {

        }
        # returns an error, telling the user to include elements in the dictionary
        self.assertRaises(Exception, how_many_servings,
                          second_missing_recipe, second_missing_inventory)

        # case 8.3
        # tests when the recipe and inventory are both empty
        second_missing_recipe = {

        }

        second_missing_inventory = {

        }
        # returns an error, telling the user to include elements in the dictionary
        self.assertRaises(Exception, how_many_servings,
                          second_missing_recipe, second_missing_inventory)

    # method id: 9
    # tests when values of 0 are present in the recipe, inventory, or both dictionaries
    def test_zeros(self):
        # case 9.1
        # tests when a ingredient required by the recipe has a value of 0 in the inventory dictionary
        first_zero_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 2
        }

        first_zero_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 0
        }
        # returns zero since, in the inventory, there is 0 'jam' while the recipe requires 2
        self.assertEqual(how_many_servings(first_zero_recipe, first_zero_inventory), 0)

        # case 9.2
        # tests when a value in recipe is 0
        second_zero_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 0
        }

        second_zero_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 1
        }
        # In this case, it is as though that ingredient is not unnecessory; the 0 in the recipe can therefore be ignored – normal calculations are executed (ignoring the 0)
        self.assertEqual(how_many_servings(second_zero_recipe, second_zero_inventory), 2)

        # case 9.3
        # tests when a the value of a key is 0 in both the recipe and inventory
        third_zero_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 0
        }

        third_zero_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 0
        }
        # like the 9.2 case, we do not require
        self.assertEqual(how_many_servings(third_zero_recipe, third_zero_inventory), 2)

    # method id: 10
    # tests TypeErrors when some keys are only present in the inventory dictionary
    def test_key_only_in_inventory(self):
        # case 10.1
        # tests when a value in the inventory dictionary is a string
        first_key_not_in_inv_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 2
        }

        first_key_not_in_inv_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 0,
            'Cheese': 'a few slices'
        }
        # according to the requirements the values must be integers, so it returs 'TypeError'
        self.assertRaises(TypeError, how_many_servings,
                          first_key_not_in_inv_recipe, first_key_not_in_inv_inventory)

        # case 10.2
        # tests when a key in the inventory dictionary, which is not present in the recipe dictionary, is an integer
        second_key_not_in_inv_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 2
        }

        second_key_not_in_inv_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 0,
            8: 9
        }
        # according to the requirements the keys must be strings, so it returs 'TypeError'
        self.assertRaises(TypeError, how_many_servings,
                          second_key_not_in_inv_recipe, second_key_not_in_inv_inventory)

        # case 10.3
        # tests when a value in the inventory dictionary, whose corresponding key is not present in the recipe dictionary, is a floating point
        third_key_not_in_inv_recipe = {
            'bread': 10,
            'peanutButter': 5,
            'jam': 2
        }

        third_key_not_in_inv_inventory = {
            'bread': 20,
            'peanutButter': 30,
            'jam': 0,
            'milk': 1.5
        }
        # according to the requirements the values must be integers, so it returs 'TypeError'
        self.assertRaises(TypeError, how_many_servings,
                          third_key_not_in_inv_recipe, third_key_not_in_inv_inventory)
        
