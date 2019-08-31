from django.db import models

# Create your models here.

'''
At a high level, the data model could be comprised of the following types:
A user​ is an anonymous site visitor that can enter info about themselves 
and see recipes that are tailored to them.
A recipe​ is composed of ingredients​, each with a quantity in some unit.
Each ingredient has a price ​per unit.
Each ingredient has tags​ for which dietary restrictions the 
ingredient is incompatible with.
You’ll need to make and state (or hard-code) some assumptions like: 
how many meals will the user cook per week (versus buying pre-made)? 
How much of take-home pay should be spent on groceries per week?
'''

class Food(models.Model):
    # name
    # price per unit
    pass

class Ingredient(models.Model):
    # food
    # quantity
    # unit
    pass

class RestrictionTag(models.Model):
    name = models.CharField(max_length=255)

class Recipe(models.Model):
    # name
    # ingredients
    pass
