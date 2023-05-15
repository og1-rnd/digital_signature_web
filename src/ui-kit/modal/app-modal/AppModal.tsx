import React from 'react';
import { cn } from '@bem-react/classname';
import { Modal } from 'antd';

import { ReactComponent as CloseIcon } from '@assets/img/close.svg';
import AppText from '@ui-kit/typography';
import { IAppModalProps } from './AppModal.types';

import './style.scss';

const CnAppModal = cn('app-modal');

/**
 * @description modal component
 * @param props
 */
const AppModal: React.FC<IAppModalProps> = (props: IAppModalProps) => {
  const { isShow, width = 420, setShow, title, children } = props;

  const onCancel = () => {
    setShow?.(false);
  };

  return (
    <Modal
      prefixCls={CnAppModal()}
      {...props}
      onCancel={onCancel}
      open={isShow}
      title={''}
      footer={null}
      closeIcon={<CloseIcon />}
      width={width}
    >
      {title && (
        <div className={CnAppModal('title')}>
          <AppText fontStyle={'Title'} text={title} />
        </div>
      )}
      {children}
    </Modal>
  );
};

export default AppModal;
