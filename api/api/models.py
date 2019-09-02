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
    name = models.CharField(max_length=255, db_index=True)
    unit_price = models.DecimalField(max_digits=8, decimal_places=2)
    created_ts = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_ts = models.DateTimeField(auto_now=True, db_index=True)
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'food'
        verbose_name_plural = 'food'

class Ingredient(models.Model):
    food = models.ForeignKey('Food', null=True, on_delete=models.SET_NULL, db_index=True)
    quantity = models.DecimalField(max_digits=8, decimal_places=2)
    unit_type = models.CharField(max_length=255)
    created_ts = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_ts = models.DateTimeField(auto_now=True, db_index=True)

    def __str__(self):
        return self.food.name

    class Meta:
        db_table = 'ingredients'

class RestrictionTag(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    created_ts = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_ts = models.DateTimeField(auto_now=True, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'restriction_tags'

class Recipe(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    ingredients = models.ManyToManyField('Ingredient')
    restrictions = models.ManyToManyField('RestrictionTag')
    created_ts = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_ts = models.DateTimeField(auto_now=True, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'recipes'
