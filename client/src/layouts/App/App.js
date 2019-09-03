import React from 'react';
import BudgetForm from '../../components/BudgetForm';
import RecipeCard from '../../components/RecipeCard';
import { AppContainer, RecipeContainer } from '../../styled/containers';
import { LogoText } from '../../styled/text';

const RECIPE_URL = 'http://localhost:8000/v1/recipes/';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      paycheckAmt: 0,
      restrictions: [],
      recipes: null
    }
  }

  paycheckAmtCallback = (amt) => {
    let paycheckAmt = amt;
    this.setState({
      paycheckAmt: paycheckAmt
    })
    this.fetchRecipes(amt, this.state.restrictions)
  }

  restrictionsCallback = (resList) => {
    let restrictions = resList;
    this.setState({
      restrictions: restrictions
    })
    this.fetchRecipes(this.state.paycheckAmt, restrictions)
  }

  fetchRecipes = (amt, restrictions) => {
    let url = RECIPE_URL;
    url = url + '?budget=' + amt;
    if (restrictions !== []) {
      url = url + '&allergies=' + restrictions.toString()
    }

    fetch(url).then(
      res => res.json()
    ).then(
      json => {
        this.setState({
          recipes: json
        })
      }
    )
  }

  renderRecipes = () => {
    let recipeCardList = []
    if (this.state.recipes !== null) {
      this.state.recipes.results.forEach((recipe) => {
        recipeCardList.push(
          <RecipeCard
            name={ recipe.name }
            mealType={ recipe.meal_type}
            ingredients={ recipe.ingredients }
            cost={ recipe.total_cost }
          />
        )
      })
      return recipeCardList;
    }
    return null;
  }

  render () {
    return (
      <AppContainer>
        <LogoText>MyMealPlan</LogoText> 
        <BudgetForm 
          paycheckAmtCallback={ this.paycheckAmtCallback }
          restrictionsCallback={ this.restrictionsCallback }
        />
        <RecipeContainer>
          { this.renderRecipes() }
        </RecipeContainer>
      </AppContainer>
    );
  }
}

export default App;
