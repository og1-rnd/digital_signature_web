import React from 'react';
import './InputContent.scss';
import { cn } from '@bem-react/classname';
import { IInputContentProps } from './InputContent.types';
import { ReactComponent as MarkIcon } from '@assets/img/mark.svg';
import { ReactComponent as WarningIcon } from '@assets/img/warning.svg';
import AppText from '@ui-kit/typography';
import AppPopover from '@ui-kit/popover';
import AppInput from '@ui-kit/inputs';

const CnInputSection = cn('signing-input-section');

/**
 * @description инпут с подсказкой
 * @param {IInputContentProps}props
 * @constructor
 */
const InputContent: React.FC<IInputContentProps> = (props: IInputContentProps) => {
  const { title, isShowIcon, inputPlaceHolder, isMobile, value, setValue, rules, rows, inputType } =
    props;

  /**
   * @description подсказка для инпутов
   * @param rules
   */
  const popOverContent = (rules: Array<string>) => {
    return (
      <div className={CnInputSection('popover', { isMobile })}>
        {!isMobile && (
          <div className={CnInputSection('popover-block')}>
            <WarningIcon />
          </div>
        )}
        {rules?.map((item) => (
          <div key={item} className={CnInputSection('popover-block')}>
            <div className={CnInputSection('popover-dot')} />
            <AppText isSecondary={isMobile} fontStyle="footnotes" text={item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={CnInputSection('content', { isMobile })}>
      <AppText fontStyle="fontBody" isBold text={title} />
      {isMobile && popOverContent(rules)}
      <div className={CnInputSection('input-container')}>
        <AppPopover
          content={popOverContent(rules)}
          placement={'right'}
          open={isMobile ? false : undefined}
        >
          <AppInput
            value={value}
            placeholder={inputPlaceHolder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
            rows={rows}
            type={inputType}
          />
        </AppPopover>
        {!isMobile && isShowIcon && (
          <div className={CnInputSection('input-container-icon')}>
            <MarkIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputContent;
