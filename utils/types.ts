import { ReactElement } from "react";

export interface ILayout {
  children: ReactElement;
}

export interface IAirdropDetails {
  airdropLabelBackgroundColor: string;
  airdropStatus: string;
  airdropSubTitle: string;
  airdropName: string;
  successCount: number;
  processingCount: number;
  failedCount: number;
  isCancel: boolean;
  isRecieveEmail: boolean;
  airdropImage: string;
  progressStatusIcon: string;
  progressPercentage: number;
}

export interface IListCard {
  listCardItems: Array<{
    key: string,
    name: string,
    value?: number | string
  }>;
  title?: string;
}