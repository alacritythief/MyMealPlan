# MyMealPlan App
**Code Challenge by Andy Wong**

## Answers to Challenge Questions:

1. **Why did you select the chosen frontend and backend tech?**
  * React w/ Styled Components and Django w/ Django Rest Framework are the tools I'm most familiar with.
  * Both allow me to set up projects quickly and create a structure that has enough room for complexity.
  * Django allows me to do more complex data filtering and querying with it's ORM and the Admin interface allows me 
  to easily create initial recipes without having to type them in painfully by hand.
  * Serialization, Viewsets, and pagination are made a lot easier by DRF. If I used Flask I'd have to make everything
  from near scratch and they wouldn't work as well together.
2. **What are some limitations of the technology you’ve chosen?**
  * With Django/DRF there can be possible slowness, due to Python's speed as a language or framework bloat.
  * This can be mitigated somewhat with refactoring and if you use Gunicorn and create several service workers
  to handle many requests.
  * Aside from Django, most API bottlenecks can be due to the database and if there is a lack of indexing.
  * I've used Sqlite3 as the database for easy demoing, but for a live environment I'd use Postgres or MySQL.
3. **How would you change the user stories or proposed functionality to better align with the product goal?**
  * Allow the user to define budget percentages. I used 10% of their weekly paycheck to determine what recipes would show, 
  but it would be better if the user could adjust that percent with a slider or input.
  * Allow monthly planning for better planning in advance, this also might be better or more lucrative
  for an Instacart-like service.
  * Allow the user to define family members. Right now this app is geared towards an individual due to the current spec 
  and does not account for family members.
  * If recipe directions were added, I would certainly add measurement conversion methods to help the user choose 
  whether they wanted to use standard or metric amounts. For the sake of time, I did not include them.

## Additional Afterthoughts:
* My main focus overall was to build a basic functioning MVP in a short time frame, I had about a day of time
  slotted to work on this.
* I would liked to add more tests in the frontend, but that would take up more time. The majority of tests are in the 
  backend since that's where a lot of the logic is.
* I created a pretty basic solution for suggesting recipes, I decided not to focus too much on this because this could be    refined over time in an actual project. It's easy to get absorbed in that process and waste time when your goal is making
  a presentable proof-of-concept.

## RUNNING FRONTEND AND BACKEND WITH DOCKER-COMPOSE

* Make sure you have docker installed: https://hub.docker.com/editions/community/docker-ce-desktop-mac
* In the root folder of the project, run: `docker-compose -f docker-compose.dev.yml up`
* if you are running this for the first time, it will take several minutes for the docker images to be built and run.
* Once you see that both frontend and backend are running, you can access them:
  * Open [http://localhost:3000](http://localhost:3000) to view the frontend in the browser.
  * Open [http://localhost:8000/v1/](http://localhost:8000/v1/) to view the backend API in the browser.
* Both images are running in development mode for demonstration purposes.
* Both the frontend and backend need to be running to be functioning properly.
* CTRL-C to stop docker-compose, make sure to shut down the images with `docker-compose -f docker-compose.dev.yml down`.

## FRONTEND: 

### Installing/Running the frontend locally

* The frontend uses NodeJS v10.16.1
* Make sure you have NodeJS installed, we suggest using [NVM](https://github.com/nvm-sh/nvm)
* Clone this repo via git: `git clone https://github.com/alacritythief/MyMealPlan.git`
* Enter the repo's client folder `cd MyMealPlan/client` and `npm install` to install dependencies 
* `npm start` to run the app in dev mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## BACKEND: 

### Django Admin:
* Superuser: HeadChef
* Password: SousVideEverything

### Endpoints:
* "food": "http://localhost:8000/v1/food/",
* "ingredients": "http://localhost:8000/v1/ingredients/",
* "restriction_tags": "http://localhost:8000/v1/restriction_tags/",
* "recipes": "http://localhost:8000/v1/recipes/"

### Recipe query via Budget and Dietary restrictions
* `http://localhost:8000/v1/recipes/?budget=360&allergies=peanut`
* The above lists recipes that apply to the person's weekly paycheck amount of $360 and excluding recipes that have peanuts. 
* `http://localhost:8000/v1/recipes/?allergies=peanut,dairy`
* The above filters out recipes that contain dairy and peanuts.

### RUNNING TESTS:
* You can run tests for the backend in the `/api/` folder via `./manage.py test`

### Installing/Running the backend locally

**Make sure python, pip, setuptools, virtualenv, and virtualenvwrapper are up-to-date:**

**Installing Python 3.7:**
* `brew install python`

**Updating pip and setuptools:**
* `pip3 install -U pip`
* `pip3 install -U setuptools`

**Installing Virtualenv and Virtualenvwrapper:**
* `pip3 install -U virtualenv`
* `pip3 install -U virtualenvwrapper`

### Installation Instructions:

* Make sure Python, pip, setuptools, Virtualenv, and Virtualenvwrapper, are installed and up-to-date. Please see the **Before Setup** section above.
* `mkvirtualenv MyMealPlan` to create your initial Python environment.
* In the future, you can set your virtualenv by using `workon MyMealPlan` now that it has been created.
* Clone this repo into the directory of your choice `git clone https://github.com/alacritythief/MyMealPlan.git`.
* Enter the main directory of the API with `cd MyMealPlan/api` and run: `pip3 install -r requirements.txt`
* Launch the backend server with `./manage.py runserver`.
* You can launch into debug mode with `DEBUG=True ./manage.py runserver`
* You can access the root API at [http://localhost:8000/v1/](http://localhost:8000/v1/)
* You can access the Django-Admin at [http://localhost:8000/admin/](http://localhost:8000/admin/)
