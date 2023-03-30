import React from 'react';
import './NumberInCircle.scss';
import { cn } from '@bem-react/classname';
import AppText from '@ui-kit/typography';
import { INumberInCircleProps } from './NumberInCircleProps';

const CnNumberInCircle = cn('number-in-circle');

/**
 * @description компоненты цифры в кружке
 * @param {INumberInCircleProps} props
 * @constructor
 */
const NumberInCircle: React.FC<INumberInCircleProps> = (props: INumberInCircleProps) => {
  const { number, withoutLine } = props;
  return (
    <div className={CnNumberInCircle('container')}>
      <div className={CnNumberInCircle()}>
        <AppText fontStyle="fontBody" text={number} />
      </div>
      {!withoutLine && <div className={CnNumberInCircle('line')} />}
    </div>
  );
};

export default NumberInCircle;
