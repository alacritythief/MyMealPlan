from django.urls import re_path, include
from rest_framework import routers
from .viewsets import (
    FoodViewSet,
    IngredientViewSet,
    RestrictionTagViewSet,
    RecipeViewSet
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'food', FoodViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'restriction_tags', RestrictionTagViewSet)
router.register(r'recipes', RecipeViewSet)

# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
