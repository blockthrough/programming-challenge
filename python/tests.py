# Write unit tests here
import unittest
from nomnom import how_many_servings

class TestNomnom(unittest.TestCase):

    def setUp(self):
        self.recipe={'bread': 10, 'peanutButter': 5, 'jam': 5}
        self.inventory={'bread': 20, 'peanutButter': 10, 'jam': 5}
        self.inventoryTwenty={'bread': 200, 'peanutButter': 110, 'jam': 150}

    def test_recipe(self):
        testRecipe=[[10, '-1'], ['peanutButter', 5], ['jam', 5]]

        # checks if TypeError is raised when recipe is not a dictionary
        with self.assertRaises(TypeError) as error:
            how_many_servings(testRecipe, self.inventory)
        self.assertEqual('Recipe has to be a dictionary', str(error.exception))

        # checks if TypeError is raised when item in recipe is not a string
        testRecipe = dict(testRecipe)
        with self.assertRaises(TypeError) as error:
            how_many_servings(testRecipe, self.inventory)
        self.assertEqual('Item in recipe and inventory should be a string', str(error.exception))

        # checks if TypeError is raised when the quantity of an item in the recipe is not an integer
        testRecipe['bread'] = testRecipe.pop(10)
        with self.assertRaises(TypeError) as error:
            how_many_servings(testRecipe, self.inventory)
        self.assertEqual('Quantities in recipe should be a positive integer', str(error.exception))

        # checks if ValueError is raised when the quantity of an item in the recipe is a negative number
        testRecipe['bread'] = int(testRecipe['bread'])
        with self.assertRaises(ValueError) as error:
            how_many_servings(testRecipe, self.inventory)
        self.assertEqual('Quantities in recipe should be a positive integer', str(error.exception))

    def test_inventory(self):
        testInventory=[['bread', None], ['peanutButter', 5], ['jam', 5]]

        # checks if TypeError is raised when inventory is not a dictionary
        with self.assertRaises(TypeError) as error:
            how_many_servings(self.recipe, testInventory)
        self.assertEqual('Inventory has to be a dictionary', str(error.exception))

        # checks if TypeError is raised when the quantity of an item in the inventory is not a integer
        testInventory = dict(testInventory)
        with self.assertRaises(TypeError) as error:
            how_many_servings(self.recipe, testInventory)
        self.assertEqual('Quantities in inventory should be a positive integer', str(error.exception))

        # checks if ValueError is raised when the quantity of an item in the inventory is a negative number
        testInventory['bread'] = -10
        with self.assertRaises(ValueError) as error:
            how_many_servings(self.recipe, testInventory)
        self.assertEqual('Quantities in inventory should be a positive integer', str(error.exception))

    def test_together(self):
        # standrard test given in example
        self.assertEqual(how_many_servings(self.recipe,self.inventory), 1)

        # checks when item in recipe not found in inventory
        del(self.inventory['bread'])
        self.assertEqual(how_many_servings(self.recipe,self.inventory), 0)

        # checks when inventory has more items than recipe
        self.inventory['egg'] = 10
        self.inventory['bread'] = 20
        self.assertEqual(how_many_servings(self.recipe,self.inventory), 1)

        # checks if the output decreases when not even one serving can be made
        self.inventory['jam'] = 0
        self.assertEqual(how_many_servings(self.recipe,self.inventory), 0)

        # checks if the output increases when more than one servings can be made
        self.assertEqual(how_many_servings(self.recipe,self.inventoryTwenty), 20)

        # checks the output when recipe item has a quantity of 0
        self.recipe['jam'] = 0
        self.assertEqual(how_many_servings(self.recipe,self.inventoryTwenty), 20)



if __name__ == '__main__':
    unittest.main()
