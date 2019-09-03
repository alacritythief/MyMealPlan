# MyMealPlan App
Code challenge by Andy Wong

## RUNNING WITH DOCKER COMPOSE

* TBD

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

### Installing/Running the backend locally

### Docker Compose:
* cd `MyMealPlan/api` and `docker-compose -f docker-compose.dev.yml up`

### Manual Process:

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
