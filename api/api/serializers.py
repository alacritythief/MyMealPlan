from rest_framework import serializers
from api.mixins import DynamicFieldsMixin
from .models import Food, Ingredient, RestrictionTag, Recipe

# Serializers define the API representation.
class FoodSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

class IngredientSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    food = FoodSerializer(many=False)

    class Meta:
        model = Ingredient
        fields = ('__all__')

class RestrictionTagSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = RestrictionTag
        fields = '__all__'

class RecipeSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    restrictions = RestrictionTagSerializer(many=True)

    class Meta:
        model = Recipe
        fields = '__all__'
