import React from 'react';
import { BudgetContainer } from '../../styled/containers';
import { PaycheckInput } from '../../styled/forms';

class BudgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      paycheckValue: ''
    }
  }

  changePaycheck = (event) => {
    let paycheckAmt = event.target.value;
    this.setState({
      paycheckValue: paycheckAmt
    })
  }

  handlePaycheck = (event) => {
    if (event.key === 'Enter' && this.state.paycheckValue !== "") {
      event.currentTarget.blur();
    }
  }

  render () {
    return (
      <BudgetContainer>
        Weekly Paycheck amount:<br/>
        <PaycheckInput 
          type="text"
          placeholder="Enter weekly or bi-weekly paycheck amount"
          value={ this.state.payCheckValue }
          onChange={ this.changePaycheck }
          onKeyUp={ this.handlePaycheck }
        />
        { this.state.paycheckValue }
      </BudgetContainer>
    )
  }
}

export default BudgetForm;
