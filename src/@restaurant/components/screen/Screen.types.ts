export type ScreenTypes = {
  children: any;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  withScroll?: boolean;
  withKeyboard?: boolean;
  withSafeArea?: boolean;
  noPadding?: boolean;
};
