export type FlexDirectionProps = 'row' | 'column';

export type AlignItemsProps =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline';

export type JustifyContentProps =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'baseline';

export type FlexContainerProps = {
  alignItems?: AlignItemsProps;
  justifyContent?: JustifyContentProps;
  flexDirection?: FlexDirectionProps;
  wrap?: 'wrap' | 'no-wrap';
  columnGap?: string;
  rowGap?: string;
  flex?: string;
};
