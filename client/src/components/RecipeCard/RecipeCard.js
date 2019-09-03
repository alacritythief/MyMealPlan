import React from 'react';
import { RecipeItemContainer, RecipeUl } from '../../styled/containers';
import { RecipeNameText } from '../../styled/text';

class RecipeCard extends React.Component {
  generateIngredientsArray = (list) => {
    let ingredientsArray = [];
    list.forEach((item) => {
      ingredientsArray.push(
        <li key={ item.food.id }>{ item.food.name + ' - ' + item.quantity + ' ' + item.unit_type }</li>
      )
    })
    return ingredientsArray;
  }

  render () {
    return (
      <RecipeItemContainer>
        <RecipeNameText>{ this.props.name }</RecipeNameText>
        <strong>Meal:</strong> { this.props.mealType }<br/>
        <strong>Ingredients:</strong><br/>
        <RecipeUl>
          { this.generateIngredientsArray(this.props.ingredients) }
        </RecipeUl>
        <strong>Total Cost:</strong> { this.props.cost }
      </RecipeItemContainer>
    )
  }
}

export default RecipeCard;
