import React from 'react';
import './DownloadModalContent.scss';
import { cn } from '@bem-react/classname';
import GooglePlayPng from '@assets/img/play.png';
import AppStorePng from '@assets/img/apple.png';
import AppGalleryPng from '@assets/img/gallery.png';
import AppText from '@ui-kit/typography';
import { DownloadButton } from '@components/home';
import { IDownloadButton } from '@components/home/DownloadButton/DownloadButton.types';
import { IStoreDownloadModalContentButton } from './DownloadModalContent.types';

const CnDownloadModalContent = cn('download-modal-content');

/**
 * @description модалка для скачки установщиков приложения
 */
const DownloadModalContent: React.FC = () => {
  const storeDownloadButtonItems: Array<IStoreDownloadModalContentButton> = [
    {
      src: AppStorePng,
      link: 'https://apps.apple.com/ru/app/%D1%8D%D1%86%D0%BF-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D1%8F-1/id6749936481',
    },
    { src: GooglePlayPng, link: 'https://play.google.com/store/apps/details?id=sign.og1.ru' },
    { src: AppGalleryPng, link: 'https://appgallery.huawei.com/#/app/C115031305' },
  ];

  const downloadButtonItems: Array<IDownloadButton> = [
    {
      title: 'Скачать APK',
      link: 'https://storage.yandexcloud.net/sign.og1.ru/applications/android/%D0%AD%D0%A6%D0%9F-1.0.0.apk',
    },
    {
      title: 'Скачать для Windows',
      items: [
        {
          title: 'x32',
          link: 'https://storage.yandexcloud.net/sign.og1.ru/applications/windows/%D0%AD%D0%A6%D0%9F-win-ia32.exe',
        },
        {
          title: 'x64',
          link: 'https://storage.yandexcloud.net/sign.og1.ru/applications/windows/%D0%AD%D0%A6%D0%9F-win-x64.exe',
        },
      ],
    },
    {
      title: 'Скачать для Linux',
      link: 'https://storage.yandexcloud.net/sign.og1.ru/applications/linux/%D0%AD%D0%A6%D0%9F-1.0.0-amd64.deb',
    },
  ];

  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <div className={CnDownloadModalContent()}>
      <div className={CnDownloadModalContent('mobile-store-container')}>
        {storeDownloadButtonItems.map(({ src, link }) => (
          <img
            onClick={() => openLink(link)}
            className={CnDownloadModalContent('mobile-store-image')}
            src={src}
            alt={''}
          />
        ))}
      </div>
      <AppText text={'или'} fontStyle={'fontBody'} />
      <div className={CnDownloadModalContent('buttons-container')}>
        {downloadButtonItems.map((item) => (
          <DownloadButton key={item.title} isMultiDownLoad={!!item.items} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DownloadModalContent;
