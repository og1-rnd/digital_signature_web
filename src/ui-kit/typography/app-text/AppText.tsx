import React from 'react';
import { Typography } from 'antd';

import { TAppText } from './AppTextTypes';

import { cn } from '@bem-react/classname';
import './style.scss';

const { Text } = Typography;
const CnAppText = cn('app-text');

const AppText: React.FC<TAppText> = (props: TAppText) => {
  const {
    textStyle = 'default',
    fontStyle = 'default',
    text,
    isBold,
    isSecondary,
    isAdaptive,
  } = props;
  const classNameString = `${textStyle.toString()} ${fontStyle.toString()} ${
    isAdaptive ? `${fontStyle}_isAdaptive` : ''
  }`;

  return (
    <Text prefixCls={CnAppText({ isBold, isSecondary })} className={classNameString} {...props}>
      {text}
    </Text>
  );
};

export default AppText;
