import React from 'react';
import BudgetForm from '../../components/BudgetForm';
import { AppContainer } from '../../styled/containers';
import { LogoText } from '../../styled/text';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      budget: 0,
      restrictions: [],
      recipes: null
    }
  }

  render () {
    return (
      <AppContainer>
        <LogoText>MyMealPlan</LogoText>
        <BudgetForm />
      </AppContainer>
    );
  }
}

export default App;
