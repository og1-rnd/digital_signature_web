import React, { useMemo, useState } from 'react';
import './HomeScreen.scss';
import { cn } from '@bem-react/classname';
import { SigningInputSection, SigningOutputSection, DownloadModalContent } from '@components/home';
import { isEmpty } from '@utils/isEmpty';
import { ReactComponent as Logo } from '@assets/img/logo.svg';
import Web3 from 'web3';
import HDWallet from 'ethereum-hdwallet';
import { useMediaQuery } from 'react-responsive';
import { notification } from 'antd';
import AppModal from '@ui-kit/modal/app-modal';
import AppCardWrapper from '@ui-kit/wrapper/app-wrapper/AppCardWrapper';
import AppText from '@ui-kit/typography';
import AppButton from '@ui-kit/buttons';

const Context = React.createContext({ name: 'Default' });
const CnHomeScreen = cn('home-screen');

/**
 * @description HomeScreen
 */
const HomeScreen: React.FC = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [address, setAddress] = useState('');
  const [isShowDownloadModal, setIsShowDownloadModal] = useState(false);

  const isOutputVisible = !isEmpty(address) && !isEmpty(signature);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'TOAST' }), []);

  const openDownloadModal = () => {
    setIsShowDownloadModal(true);
  };

  const openNotification = () => {
    api.open({ icon: undefined, message: 'Скопировано' });
  };

  const signCopy = () => {
    navigator.clipboard.writeText(signature).then(() => openNotification());
  };

  /**
   * @description формируем адрес и подпись сообщения
   */
  const onSign = async () => {
    const eth = HDWallet;
    const wallet = eth.fromMnemonic(mnemonic);
    const web3 = new Web3();
    const privateKey = `0x${wallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')}`;
    const { address: accountAddress, sign } = web3.eth.accounts.privateKeyToAccount(privateKey);
    const { signature: signedSignature } = await sign(message);
    setAddress(accountAddress);
    setSignature(signedSignature);
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className={CnHomeScreen()}>
        <div className={CnHomeScreen('logo')}>
          <Logo />
        </div>
        <div className={CnHomeScreen('content', { isMobile })}>
          <AppCardWrapper>
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
          </AppCardWrapper>
          <AppCardWrapper>
            <div className={CnHomeScreen('card', { isMobile })}>
              <div className={CnHomeScreen('download-container')}>
                <AppText text={'Или выполнить в приложении'} fontStyle={'H3'} />
                <AppButton
                  className={'open-modal-button'}
                  onButtonClick={openDownloadModal}
                  type={'default'}
                  text={'Открыть'}
                />
              </div>
            </div>
          </AppCardWrapper>
        </div>
      </div>
      <AppModal
        isShow={isShowDownloadModal}
        setShow={setIsShowDownloadModal}
        title={'Скачайте приложение, в котором хотите подписать документ'}
        width={isMobile ? 333 : 420}
      >
        <DownloadModalContent />
      </AppModal>
    </Context.Provider>
  );
};

export default HomeScreen;
