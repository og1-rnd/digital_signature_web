import React from 'react';
import { cn } from '@bem-react/classname';
import { ConfigProvider, Input } from 'antd';

import { TextAreaProps, PasswordProps, InputProps } from 'antd/lib/input';
import { IAppInput } from './AppInput.types';

import './style.scss';

const CnAppInput = cn('app-input');

const inputTheme = {
  token: {
    colorPrimary: '#0088E9',
    colorError: '#ea5959',
    colorBorder: '#EDEEF2',
  },
};

const AppInput: React.FC<IAppInput> = (props: IAppInput) => {
  const { type, isSmall } = props;

  const getInput = () => {
    switch (type) {
      case 'textArea':
        return <Input.TextArea {...(props as TextAreaProps)} />;
      case 'password':
        return <Input.Password {...(props as PasswordProps)} />;
      default:
        return <Input {...(props as InputProps)} />;
    }
  };

  return (
    <div className={CnAppInput({ isSmall, isTextArea: type === 'textArea' })}>
      <ConfigProvider theme={inputTheme}>{getInput()}</ConfigProvider>
    </div>
  );
};

export default AppInput;
