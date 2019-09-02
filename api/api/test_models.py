from django.test import TestCase
from decimal import Decimal
from .models import Food, Ingredient, RestrictionTag, Recipe

# Create your tests here.

### MODEL TESTS ###
class FoodTestCase(TestCase):
    def setUp(self):
        Food.objects.create(
            name='Banana',
            unit_price=0.58
        )
        Food.objects.create(
            name='Red Delicious Apple',
            unit_price=1.32
        )

    def test_food_creation(self):
        banana = Food.objects.get(name='Banana')
        apple = Food.objects.get(name='Red Delicious Apple')
        self.assertEqual(banana.name, 'Banana')
        self.assertEqual(banana.unit_price, Decimal('0.58'))
        self.assertEqual(apple.name, 'Red Delicious Apple')
        self.assertEqual(apple.unit_price, Decimal('1.32'))

class IngredientTestCase(TestCase):
    def setUp(self):
        # We create a food to be linked to an ingredient
        sugar = Food.objects.create(
            name='Sugar',
            unit_price=64.19
        )
        # We create an ingredient
        Ingredient.objects.create(
            food=sugar,
            quantity=0.02,
            unit_type='pounds'
        )
    
    def test_ingredient_creation_and_inheritance(self):
        # Get objects
        sugar = Food.objects.get(name='Sugar')
        ingredient = Ingredient.objects.get(food=sugar)

        # Check if ingredient contains selected food via name and id
        self.assertEqual(ingredient.food.name, sugar.name)
        self.assertEqual(ingredient.food.id, sugar.id)

class RestrictionTestCase(TestCase):
    def setUp(self):
        RestrictionTag.objects.create(
            name='Peanuts'
        )
    
    def test_restriction_tag_creation(self):
        allergy = RestrictionTag.objects.get(name='Peanuts')
        self.assertEqual(allergy.name, 'Peanuts')

class RecipeTestCase(TestCase):
    def setUp(self):
        # Create foods
        pecan = Food.objects.create(
            name='Pecan',
            unit_price=1.96
        )

        sugar = Food.objects.create(
            name='Sugar',
            unit_price=64.19
        )

        flour = Food.objects.create(
            name='Flour',
            unit_price=0.33
        )

        # Create allergy via RestrictionTag
        allergy = RestrictionTag.objects.create(
            name='Peanuts'
        )

        # Create recipe ingredients
        pecan_ingredient = Ingredient.objects.create(
            food=pecan,
            quantity=0.5,
            unit_type='pounds'
        )

        sugar_ingredient = Ingredient.objects.create(
            food=sugar,
            quantity=0.5,
            unit_type='pounds'
        )

        flour_ingredient = Ingredient.objects.create(
            food=flour,
            quantity=1.5,
            unit_type='pounds'
        )

        # Create Recipe and include ingredients
        pecan_pie = Recipe()
        pecan_pie.name = 'Pecan Pie'
        pecan_pie.save() # Need to save here to generate a primary key
        pecan_pie.ingredients.add(pecan_ingredient)
        pecan_pie.ingredients.add(sugar_ingredient)
        pecan_pie.ingredients.add(flour_ingredient)
        pecan_pie.restrictions.add(allergy)
        pecan_pie.save()

    # Check if recipe contains Pecans and has a Peanut allergy restriction
    def test_recipe_values(self):
        allergy = RestrictionTag.objects.get(name='Peanuts')
        pecan_ingredient = Ingredient.objects.get(food__name='Pecan')
        recipe = Recipe.objects.get(name='Pecan Pie')
        self.assertEqual(recipe.name, 'Pecan Pie')
        self.assertIn(pecan_ingredient, recipe.ingredients.all())
        self.assertIn(allergy, recipe.restrictions.all())
