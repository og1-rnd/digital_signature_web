export interface INumberInCircleProps {
  setMnemonic: (text: string) => void;
  setMessage: (text: string) => void;
  onSign: () => void;
  mnemonic: string;
  isMobile: boolean;
  message: string;
}
