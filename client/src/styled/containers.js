import styled from 'styled-components';
import * as c from './colors';
import * as d from './devices';

export const AppContainer = styled.div`
  margin: 1rem auto;
  width: 80%;
  max-width: ${d.MAX_PAGE_WIDTH};
`

export const BudgetContainer = styled.div`
`

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const RecipeItemContainer = styled.div`
  border: 1px solid ${c.BLACK};
  border-radius: 0.2rem;
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  margin: 1rem 1rem;
`

export const RecipeUl = styled.ul`
  margin: 1rem 0;
`
