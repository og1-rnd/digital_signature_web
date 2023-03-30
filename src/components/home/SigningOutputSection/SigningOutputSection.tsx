import React, { useState } from 'react';
import './SigningOutputSection.scss';
import { cn } from '@bem-react/classname';
import AppButton from '@ui-kit/buttons';
import AppText from '@ui-kit/typography';
import { ISigningOutputSectionProps } from './SigningOutputSection.types';
import { ReactComponent as SmallArrow } from '@assets/img/small-arrow-down.svg';
import { ReactComponent as CopyIcon } from '@assets/img/copy.svg';

const CnOutputSection = cn('signing-output-section');

/**
 * @description компонент для отображения результатов подписи
 * @param {ISigningOutputSectionProps} props
 * @constructor
 */
const SigningOutputSection: React.FC<ISigningOutputSectionProps> = (
  props: ISigningOutputSectionProps,
) => {
  const { address, signature, isMobile, onCopyPress } = props;
  const [isAddressVisible, setAddressVisible] = useState(true);

  const onChangeAddressVisible = () => {
    setAddressVisible(!isAddressVisible);
  };

  return (
    <>
      <div className={CnOutputSection('divider')} />
      <div className={CnOutputSection('title')}>
        <AppText
          fontStyle="H3"
          isAdaptive={isMobile}
          text={
            'ЭЦП успешно сформирована. Скопируйте её и вставьте в соответствующее поле в Личном кабинете родителя.'
          }
        />
      </div>
      <div className={CnOutputSection()}>
        <div className={CnOutputSection('block')}>
          <div className={CnOutputSection('address-title')} onClick={onChangeAddressVisible}>
            <AppText fontStyle="footnotes" isSecondary text="Публичная часть ключа" />
            <div className={CnOutputSection('icon', { isAddressVisible })}>
              <SmallArrow />
            </div>
          </div>
          {isAddressVisible && <AppText fontStyle="fontBody" text={address} />}
        </div>
        <div className={CnOutputSection('block')}>
          <AppText fontStyle="footnotes" isSecondary text="Электронная цифровая подпись" />
          <AppText fontStyle="fontBody" text={signature} />
        </div>
      </div>
      <AppButton text="Скопировать ЭЦП" leftElem={<CopyIcon />} onButtonClick={onCopyPress} />
    </>
  );
};

export default SigningOutputSection;
