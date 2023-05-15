import React from 'react';
import './DownloadButton.scss';
import { cn } from '@bem-react/classname';
import AppText from '@ui-kit/typography';
import { ReactComponent as DownloadIcon } from '@assets/img/download.svg';
import { ReactComponent as SmallArrowDownIcon } from '@assets/img/small-arrow-down.svg';
import { IDownloadButton, IDownloadModalContentButton } from './DownloadButton.types';

const CnDownloadButton = cn('download-button');

/**
 * @description кнопка download
 * @param props
 */
const DownloadButton: React.FC<IDownloadButton> = (props: IDownloadButton) => {
  const { title, link, items, isMultiDownLoad } = props;

  /**
   * @description открывает ссылку для скачивания
   * @param linkUrl
   */
  const openLink = (linkUrl?: string) => {
    if (linkUrl || link) window.open(linkUrl ?? link);
  };

  const onButtonPress = () => {
    if (!isMultiDownLoad) openLink();
  };

  /**
   * @description элемент выпадающего меню
   * @param dropdownItem
   */
  const dropDownElem = (dropdownItem: IDownloadModalContentButton) => {
    const { title: dropdownTitle, link: dropdownLink } = dropdownItem;
    return (
      <div className={CnDownloadButton('dropdown-item')} onClick={() => openLink(dropdownLink)}>
        <AppText text={dropdownTitle} fontStyle={'fontBody'} />
        <div className={CnDownloadButton('dropdown-item-icon')}>
          <DownloadIcon />
        </div>
      </div>
    );
  };

  return (
    <div className={CnDownloadButton('container', { isMultiDownLoad })}>
      <div className={CnDownloadButton()} onClick={onButtonPress}>
        <AppText text={title} fontStyle={'fontBody'} />
        <div className={CnDownloadButton('icon', { isMultiDownLoad })}>
          {isMultiDownLoad ? <SmallArrowDownIcon /> : <DownloadIcon />}
        </div>
      </div>
      <div className={CnDownloadButton('dropdown')}>
        {items?.map((dropdownItem) => dropDownElem(dropdownItem))}
      </div>
    </div>
  );
};

export default DownloadButton;
