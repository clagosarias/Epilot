import { AlignItemsProps, JustifyContentProps } from '../flexContainer/model';

export type GridContainerProps = {
  alignItems?: AlignItemsProps;
  justifyContent?: JustifyContentProps;
  columnGap?: string;
  rowGap?: string;
  gap?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
};
