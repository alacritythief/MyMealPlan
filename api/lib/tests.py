from django.test import TestCase
from .budget import determine_weekly_food_budget_plan

# Create your tests here.

class BudgetTestCase(TestCase):
    def test_food_plans(self):
        plan_a = determine_weekly_food_budget_plan(360)
        plan_b = determine_weekly_food_budget_plan(600)
        plan_c = determine_weekly_food_budget_plan(800)
        plan_d = determine_weekly_food_budget_plan(1000)

        self.assertEqual(plan_a, 'verylow')
        self.assertEqual(plan_b, 'low')
        self.assertEqual(plan_c, 'medium')
        self.assertEqual(plan_d, 'high')
