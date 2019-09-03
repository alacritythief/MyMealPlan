from api.models import Recipe

'''
Methods for calculating costs, budget, etc. to be utilized by the API.

THOUGHTS:
For the sake of this MVP and time, we want to get the basic functionality to work based
on user stories. We can adjust refine accuracy and the computation methods later.

We're going to use an average reccomended value, 10% of your paycheck going to groceries.
In a production app, we'd add features like fine tuning a user's budget preference.

I'm using a really rounded version of USDA_FOOD_PLANS to make a determination on
how cheap we'd want to be for food.

We put this code in the backend because we don't want this logic to be revealed
via the client side.
'''

USDA_FOOD_PLANS = {
    'verylow': 44.00,
    'low': 56.00,
    'medium': 70.00,
    'high': 86.00
}

def determine_weekly_food_budget_plan(amount):
    # We'll determine this by what is 10% of your weekly check.
    budget = (0.1 * amount)
    plan = 'verylow'
    for k, v in USDA_FOOD_PLANS.items():
        if v < budget:
            plan = k
    return plan
