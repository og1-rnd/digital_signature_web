import { ModalProps } from 'antd';

export interface IAppModalProps extends ModalProps {
  title?: string;
  isShow: boolean;
  setShow: (e: boolean) => void;
}
