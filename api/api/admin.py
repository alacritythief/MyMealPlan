from django.contrib import admin
from .models import Food, Ingredient, RestrictionTag, Recipe

# Register your models here.
admin.site.register(Food)
admin.site.register(Ingredient)
admin.site.register(RestrictionTag)
admin.site.register(Recipe)