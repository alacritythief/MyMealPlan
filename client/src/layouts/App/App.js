import React from 'react';
import BudgetForm from '../../components/BudgetForm';
import { AppContainer } from '../../styled/containers';
import { LogoText } from '../../styled/text';

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
  }

  restrictionsCallback = (resList) => {
    let restrictions = resList;
    this.setState({
      restrictions: restrictions
    })
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
