import React from 'react';
import BudgetForm from '../../components/BudgetForm';
import { AppContainer } from '../../styled/containers';
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

  render () {
    return (
      <AppContainer>
        <LogoText>MyMealPlan</LogoText>
        <BudgetForm 
          paycheckAmtCallback={ this.paycheckAmtCallback }
          restrictionsCallback={ this.restrictionsCallback }
        />
      </AppContainer>
    );
  }
}

export default App;
