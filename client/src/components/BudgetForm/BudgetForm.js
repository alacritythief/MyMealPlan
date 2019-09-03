import React from 'react';
import { BudgetContainer } from '../../styled/containers';
import { PaycheckInput } from '../../styled/forms';

class BudgetForm extends React.Component {
  render () {
    return (
      <BudgetContainer>
        Weekly Paycheck amount:<br/>
        <PaycheckInput />
      </BudgetContainer>
    )
  }
}

export default BudgetForm;
