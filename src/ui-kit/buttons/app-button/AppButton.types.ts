import { ReactNode } from 'react';

export type appButtonType =
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | 'default';
export type appButtonSizeType = 'large' | 'middle' | 'small';
export type appButtonColorType = 'blue' | 'red' | 'grey';

export type TAppButtonProps = {
  type?: appButtonType;
  size?: appButtonSizeType;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  leftElem?: ReactNode;
  rightElem?: ReactNode;
  onButtonClick: () => void;
  mainColor?: appButtonColorType;
};
