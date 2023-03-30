import { InputProps, TextAreaProps, PasswordProps } from 'antd/lib/input';

export type IAppInputType = 'password' | 'textArea' | 'default';

export type IAppInput = {
  type?: IAppInputType;
  isSmall?: boolean;
} & (TextAreaProps | InputProps | PasswordProps);
