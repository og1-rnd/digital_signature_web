import React from 'react';
import './SigningInputSection.scss';
import { cn } from '@bem-react/classname';
import { isEmpty } from '@utils/isEmpty';
import AppText from '@ui-kit/typography';
import AppButton from '@ui-kit/buttons';
import { NumberInCircle } from '../NumberInCircle';
import { INumberInCircleProps } from './SigningInputSection.types';
import { InputContent } from './InputContent';

const CnInputSection = cn('signing-input-section');

const mnemonicRules = [
  'Фраза из нескольких (минимум 2) слов, позволяющая создать ключ и подписать информацию электронно-цифровой подписью. Указанную при генерации Заявления мнемонику необходимо сохранить, чтобы использовать в дальнейшем для подписания документов. При утрате мнемоники необходимо будет создать новое Заявление. Никому не сообщайте мнемонику, даже сотрудникам "Онлайн Гимназии №1"!',
];

/**
 * @description компонент с вводом мнемоники и сообщения
 * @param props
 */
const SigningInputSection: React.FC<INumberInCircleProps> = (props: INumberInCircleProps) => {
  const { isMobile, mnemonic, message, setMnemonic, setMessage, onSign } = props;

  /**
   * @description проверяем мнемонику на соответствия требованиям
   */
  const isValidMnemonic = () => {
    const trimMnemonic = mnemonic.trim();
    return trimMnemonic?.replace(' ', '')?.length >= 8 && trimMnemonic.split(' ').length > 1;
  };

  const isDisableSignButton = isEmpty(mnemonic) || isEmpty(message) || !isValidMnemonic();

  return (
    <>
      <div className={CnInputSection('header')}>
        <AppText fontStyle="H2" isAdaptive={isMobile} text="Подписание документа" />
      </div>
      <div className={CnInputSection({ isMobile })}>
        <div className={CnInputSection('block', { isMobile })}>
          <NumberInCircle number={1} isWithoutLine={isMobile} />
          <InputContent
            title={'Введите мнемонику'}
            inputPlaceHolder={'Мнемоника'}
            value={mnemonic}
            setValue={setMnemonic}
            isMobile={isMobile}
            rules={mnemonicRules}
            isShowIcon={isValidMnemonic()}
          />
        </div>
        <div className={CnInputSection('block', { isMobile })}>
          <NumberInCircle number={2} isWithoutLine={isMobile} />
          <InputContent
            title={
              'Скопируйте в Личном кабинете родителя и вставьте в поле ниже информацию для подписания.'
            }
            inputPlaceHolder={'Информация для подписания'}
            rows={3}
            inputType={'textArea'}
            value={message}
            setValue={setMessage}
            isMobile={isMobile}
            isShowIcon={!isEmpty(message)}
          />
        </div>
        <div className={CnInputSection('block', { isMobile })}>
          <NumberInCircle number={3} isWithoutLine={isMobile} />
          <AppButton
            type="default"
            disabled={isDisableSignButton}
            onButtonClick={onSign}
            text="Сформировать цифровую подпись"
          />
        </div>
      </div>
    </>
  );
};

export default SigningInputSection;
