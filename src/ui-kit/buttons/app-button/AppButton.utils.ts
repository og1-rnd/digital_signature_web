import { ThemeConfig } from 'antd/lib/config-provider/context';

import { appButtonColorType, appButtonType } from './AppButton.types';
const getButtonColor = (color: appButtonColorType): string => {
  switch (color) {
    case 'red':
      return '#EA5959';
    case 'grey':
      return '#C0C2C9';
    default:
      return '#0088E9';
  }
};

export const getButtonLoaderColor = (color: appButtonColorType, type: appButtonType): string => {
  return type === 'primary' ? 'white' : color;
};
export const getAppButtonTheme = (
  type: appButtonType,
  mainColor: appButtonColorType,
  disabled?: boolean,
): ThemeConfig => {
  const color = getButtonColor(disabled ? 'grey' : mainColor);
  const colorPrimary = color;
  const colorBorder = type === 'dashed' ? undefined : color;
  const colorText = type === 'primary' ? '#FFFFFF' : color;
  const colorBgContainerDisabled = type === 'primary' ? color : 'transparent';
  return {
    token: {
      colorPrimary: colorPrimary,
      colorBorder: colorBorder,
      colorBgContainerDisabled: colorBgContainerDisabled,
      colorText: colorText,
    },
  };
};
