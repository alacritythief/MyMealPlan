# Product Development Challenge

### Product goal and MVP spec

XYZ Corp wants to build a meal-planning app that helps users find recipes that are both healthy and affordable
for their users. (The company’s end goal is to integrate with a Instacart-like service to provide meal kit deliveries.) The app incorporates allergies or other dietary restrictions / preferences, and aims to surface to the user their expected costs per meal and per delivery so that the user can financially plan for their weekly
groceries.

They have captured the MVP spec in a series of user stories that are enumerated below.

* As a user, I can enter my weekly or semi-weekly paycheck amount.
* As a user, I can can select from a list of dietary restrictions that I have.
* As a user, I can see a set of recipes that are both within my budget and conform to my dietary
restrictions.

### Implementation

Your task is to build a web app that captures the above user stories and demonstrates prowess on frontend
and backend tech.

At a high level, the data model could be comprised of the following types:

*  A user​ is an anonymous site visitor that can enter info about themselves and see recipes that are
tailored to them.
*  A recipe​ is composed of ingredients​, each with a quantity in some unit.
*  Each ingredient has a price ​per unit.
*  Each ingredient has tags​ for which dietary restrictions the ingredient is incompatible with.

You’ll need to make and state (or hard-code) some assumptions like: how many meals will the user cook per week (versus buying pre-made)? How much of take-home pay should be spent on groceries per week?

### You can intentionally omit the following details:

*  Users do not need to create recipes - they are only searching / filtering through them based on their
own data.
*  Recipes do not need instructions: you can simply list a flat set of ingredients and their quantities / units
per recipe.
*  Recipes can be kept really basic for demonstration purposes.
*  Recipes do not need to be sorted or filtered in any way.
*  Users do not need login functionality: they can be treated anonymously.
*  The UI can be very straightforward and undesigned. We are not testing for UI / UX design skill in this
interview.

### Written section

**Provide a few sentences for the following questions:**

1. Why did you select the chosen frontend and backend tech?
2. What are some limitations of the technology you’ve chosen?
3. How would you change the user stories or proposed functionality to better align with the product goal?
