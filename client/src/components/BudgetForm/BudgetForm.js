import React from 'react';
import { BudgetContainer } from '../../styled/containers';
import { PaycheckInput, RestrictionListItem } from '../../styled/forms';

class BudgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      paycheckValue: '',
      biweeklyToggle: false,
      restrictions: []
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

  handleBiweekly = (event) => {
    if (event.target.checked) {
      this.setState({
        biweeklyToggle: true
      })
    } else {
      this.setState({
        biweeklyToggle: false
      })
    }
    
  }

  changeRestriction = (event) => {
    let currentRestrictionsList = this.state.restrictions;
    const checkBoxItem = event.target.value;
    const isChecked = event.target.checked;
    if (currentRestrictionsList.includes(checkBoxItem) === true) {
      if (isChecked === false) {
        currentRestrictionsList.splice(currentRestrictionsList.indexOf(checkBoxItem), 1 )
      }
    } else {
      if (isChecked === true) {
        currentRestrictionsList.push(checkBoxItem)
      }
    }
    this.setState({
      restrictions: currentRestrictionsList
    })
  }

  renderRestrictions = () => {
    let restrictions = ['peanut', 'dairy', 'egg']
    let renderRestrictionList = []

    restrictions.forEach((key) => {
      renderRestrictionList.push(
        <RestrictionListItem key={ key }>
          <input
            type="checkbox"
            name={ key }
            value={ key }
            onChange={ this.changeRestriction }
           />{ key }<br/>
        </RestrictionListItem>
      )
    })

    return renderRestrictionList;
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

        <input
          type="checkbox"
          name="biweekly-toggle"
          value={ this.state.biweeklyToggle }
          onChange={ this.handleBiweekly }
        />Biweekly paycheck<br/>

        Restrictions:
        <ul>
          { this.renderRestrictions() }
        </ul>

        <p>
          Debug:<br/>
          Paycheck Value:<br/>
          { this.state.paycheckValue }<br/>
          Biweekly Toggle:<br/>
          { this.state.biweeklyToggle.toString() }<br/>
          Restrictions:<br/>
          { this.state.restrictions.toString() }
        </p>
      </BudgetContainer>
    )
  }
}

export default BudgetForm;
