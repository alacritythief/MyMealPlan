import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './RecipeCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RecipeCard 
      name="Omelet"
      mealType="breakfast"
      ingredients={[{food: {id: 1, name: 'egg'}, quantity: '1', unit_type: 'cup'}]}
      cost="$19.99"
    />, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
