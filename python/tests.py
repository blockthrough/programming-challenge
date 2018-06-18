import unittest
import nomnom



class TestNomNom(unittest.TestCase):
	def test_how_many_servings(self):
		self.assertEqual(how_many_servings({"bread": 10, "peanutButter": 5, "jam": 5}, {"bread": 20, "peanutButter": 10, "jam": 5}), 1)
		self.assertEqual(how_many_servings({"bread": 15, "peanutButter": 25, "jam": 25}, {"bread": 45, "peanutButter": 100, "jam": 100}), 3)
		self.assertEqual(how_many_servings({"apple": 5, "orange": 15, "strawberry": 10}, {"apple": 20, "orange": 30, "strawberry": 50}), 2)


if __name__ == '__main__':
	unittest.main()