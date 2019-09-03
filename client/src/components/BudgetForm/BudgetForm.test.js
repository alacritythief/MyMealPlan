import React from 'react';
import ReactDOM from 'react-dom';
import BudgetForm from './BudgetForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BudgetForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
