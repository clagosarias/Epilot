import styled from 'styled-components';
import { GridContainerProps } from './model';

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.columnGap && `column-gap: ${props.columnGap}rem;`}
  ${(props) => props.rowGap && `row-gap: ${props.rowGap}rem;`}
  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) =>
    props.gridTemplateColumns &&
    `grid-template-columns: ${props.gridTemplateColumns};`}
  ${(props) =>
    props.gridTemplateRows && `grid-template-rows: ${props.gridTemplateRows};`}
`;
