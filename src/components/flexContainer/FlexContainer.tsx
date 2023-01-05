import styled from 'styled-components';
import { FlexContainerProps } from './model';

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
      ${(props) => props.wrap && `flex-wrap: ${props.wrap};`}
   ${(props) => props.columnGap && `column-gap: ${props.columnGap}rem;`}
   ${(props) => props.rowGap && `row-gap: ${props.rowGap}rem;`}
   ${(props) => props.flex && `flex: ${props.flex};`}
`;