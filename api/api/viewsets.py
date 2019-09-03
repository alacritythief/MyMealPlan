from rest_framework import viewsets
from .models import Food, Ingredient, RestrictionTag, Recipe
from django.db.models import Q
from .serializers import (
    FoodSerializer, 
    IngredientSerializer, 
    RestrictionTagSerializer,
    RecipeSerializer
)
from django_filters.rest_framework import DjangoFilterBackend
from lib.budget import determine_weekly_food_budget_plan, USDA_FOOD_PLANS

# ViewSets define the view behavior.
class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all().order_by('id')
    serializer_class = FoodSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('__all__')

    # Search by name
    def get_queryset(self):
        search = self.request.query_params.get('search', None)
        if search is not None:
            self.queryset = self.queryset.filter(name__icontains=search)
        return self.queryset

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all().order_by('id')
    serializer_class = IngredientSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('__all__')

class RestrictionTagViewSet(viewsets.ModelViewSet):
    queryset = RestrictionTag.objects.all().order_by('id')
    serializer_class = RestrictionTagSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('__all__')

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('__all__')

    # Results based on budget
    def get_queryset(self):
        budget = self.request.query_params.get('budget', None)
        if budget is not None:
            query = Q()
            selected_budget_type = determine_weekly_food_budget_plan(float(budget))
            for budget_type in USDA_FOOD_PLANS.keys():
                query = query | Q(budget_type=budget_type)
                if budget_type == selected_budget_type:
                    break
            self.queryset = self.queryset.filter(query)
        return self.queryset
            
            

