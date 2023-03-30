import React from 'react';
import { cn } from '@bem-react/classname';
import { Popover } from 'antd';

import { IAppPopover } from './AppPopover.types';

import './style.scss';

const CnAppPopover = cn('app-popover');
const AppPopover: React.FC<IAppPopover> = (props: IAppPopover) => {
  return <Popover prefixCls={CnAppPopover()} {...props} />;
};

export default AppPopover;
