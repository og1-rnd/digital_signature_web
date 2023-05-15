import React from 'react';

import { cn } from '@bem-react/classname';
import { IAppCardWrapperProps } from './AppCardWrapper.types';

import './style.scss';

const CnAppCardWrapper = cn('app-card-wrapper');

/**
 * @description обертка карточки
 * @param props
 */
const AppCardWrapper: React.FC<IAppCardWrapperProps> = (props) => {
  const { children } = props;
  return <div className={CnAppCardWrapper()}>{children}</div>;
};

export default AppCardWrapper;
