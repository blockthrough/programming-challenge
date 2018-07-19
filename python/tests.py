# Write unit tests here

import unittest
from nomnom import how_many_servings

class test_how_many_servings(unittest.TestCase):

	def test_no_recepie(self):
		recipe={}
		inventory={'bread': 20,'peanutButter': 10,'jam': 5}
		self.assertEqual(how_many_servings(recipe,inventory), "something is missing")

	def test_no_inventory(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 5}
		inventory={}
		self.assertEqual(how_many_servings(recipe,inventory), "something is missing")


	def test_0_in_recipie(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 0}
		inventory={'bread': 20,'peanutButter': 10,'jam': 5}
		self.assertEqual(how_many_servings(recipe,inventory), 2)

	def test_0_in_inventory(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 5}
		inventory={'bread': 20,'peanutButter': 10,'jam': 0}
		self.assertEqual(how_many_servings(recipe,inventory), 0)

	def test_missing_items_in_recipie(self):
		recipe={'bread': 10,'peanutButter': 5}
		inventory={'bread': 20,'peanutButter': 10,'jam': 5}
		self.assertEqual(how_many_servings(recipe,inventory), 2)

	def test_missing_items_in_inventory(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 5}
		inventory={'bread': 20,'peanutButter': 10}
		self.assertEqual(how_many_servings(recipe,inventory), "something is missing")

	def test_not_enough_for_1(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 5}
		inventory={'bread': 20,'peanutButter': 10,'jam': 4}
		self.assertEqual(how_many_servings(recipe,inventory), 0)

	def test_1(self):
		recipe={'bread': 10,'peanutButter': 5,'jam': 5}
		inventory={'bread': 200,'peanutButter': 100,'jam': 50}
		self.assertEqual(how_many_servings(recipe,inventory), 10)

if __name__ == '__main__':
	unittest.main()
