import React from 'react';
import { BudgetContainer } from '../../styled/containers';
import { PaycheckInput, RestrictionListItem } from '../../styled/forms';
import { RestrictionsText } from '../../styled/text';

class BudgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      paycheckValue: '',
      realPaycheckValue: '',
      biweeklyToggle: false,
      restrictions: []
    }
  }

  changePaycheck = (event) => {
    let paycheckAmt = event.target.value;
    this.setState({
      paycheckValue: paycheckAmt,
      realPaycheckValue: paycheckAmt
    })
    this.props.paycheckAmtCallback(paycheckAmt)
  }

  handlePaycheck = (event) => {
    if (event.key === 'Enter' && this.state.paycheckValue !== "") {
      event.currentTarget.blur();
    }
  }

  handleBiweekly = (event) => {
    if (event.target.checked) {
      this.setState({
        biweeklyToggle: true,
        realPaycheckValue: this.state.paycheckValue / 2
      })
      this.props.paycheckAmtCallback(this.state.paycheckValue / 2)
    } else {
      this.setState({
        biweeklyToggle: false,
        realPaycheckValue: this.state.paycheckValue
      })
      this.props.paycheckAmtCallback(this.state.paycheckValue)
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
    });
    this.props.restrictionsCallback(currentRestrictionsList);
  }

  renderRestrictions = () => {
    let restrictions = ['peanut', 'dairy', 'egg', 'meat']
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
          placeholder="Enter weekly or biweekly paycheck amount"
          value={ this.state.payCheckValue }
          onChange={ this.changePaycheck }
          onKeyUp={ this.handlePaycheck }
        />

        <input
          type="checkbox"
          name="biweekly-toggle"
          value={ this.state.biweeklyToggle }
          onChange={ this.handleBiweekly }
        />Biweekly Paycheck<br/><br/>

        <RestrictionsText>Restrictions:</RestrictionsText>
        <ul>
          { this.renderRestrictions() }
        </ul>
      </BudgetContainer>
    )
  }
}

export default BudgetForm;
