import React, { useMemo, useState } from 'react';
import './HomeScreen.scss';
import { cn } from '@bem-react/classname';
import { SigningInputSection, SigningOutputSection } from '@components/home';
import { isEmpty } from '@utils/isEmpty';
import { ReactComponent as Logo } from '@assets/img/logo.svg';
import Web3 from 'web3';
import HDWallet from 'ethereum-hdwallet';
import { useMediaQuery } from 'react-responsive';
import { notification } from 'antd';

const Context = React.createContext({ name: 'Default' });
const CnHomeScreen = cn('home-screen');

const HomeScreen: React.FC = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [address, setAddress] = useState('');

  const isOutputVisible = !isEmpty(address) && !isEmpty(signature);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'TOAST' }), []);

  const openNotification = () => {
    api.open({
      icon: undefined,
      message: 'Скопировано',
    });
  };

  const signCopy = () => {
    navigator.clipboard.writeText(signature).then(() => openNotification());
  };

  const onSign = async () => {
    const eth = HDWallet;
    const wallet = eth.fromMnemonic(mnemonic);
    const web3 = new Web3();
    const privateKey = `0x${wallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')}`;
    const { address, sign } = web3.eth.accounts.privateKeyToAccount(privateKey);
    const { signature } = await sign(message);
    setAddress(address);
    setSignature(signature);
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className={CnHomeScreen()}>
        <div className={CnHomeScreen('logo')}>
          <Logo />
        </div>
        <div className={CnHomeScreen('card', { isMobile })}>
          <SigningInputSection
            isMobile={isMobile}
            mnemonic={mnemonic}
            message={message}
            setMnemonic={setMnemonic}
            setMessage={setMessage}
            onSign={onSign}
          />
          {isOutputVisible && (
            <SigningOutputSection
              address={address}
              signature={signature}
              isMobile={isMobile}
              onCopyPress={signCopy}
            />
          )}
        </div>
      </div>
    </Context.Provider>
  );
};

export default HomeScreen;
