export interface IDownloadButton extends IDownloadModalContentButton {
  items?: Array<IDownloadModalContentButton>;
  isMultiDownLoad?: boolean;
}

export interface IDownloadModalContentButton {
  title: string;
  link?: string;
}
