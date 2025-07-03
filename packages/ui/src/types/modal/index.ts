import { ReactNode } from "react";

export interface BasicModalStore {
  modalOpen: boolean;
  targetModalName: string;
  modalIsReloadData: boolean;
}

export interface BasicModalProps {
  dataSource: BasicModalDataSource;
  options: BasicModalOptions;
}

export interface BasicModalOptions {
  isUseHeader: boolean;
  isUseButton: boolean;
  isBackgroundHandle: boolean;
  contentWidth: string | number;
  customizeStyles: object;
  isUseCloseConfirm?: boolean;
  closeConfirmMessage?: string;
}

export interface BasicModalDataSource {
  name: string;
  title: string;
  content: ReactNode;
}
