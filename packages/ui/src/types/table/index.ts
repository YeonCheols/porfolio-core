export interface BasicTableIsResetPaginationInfo {
  paginationName: string;
  isReset: boolean;
}

export interface BasicTableIsResetSubPaginationInfo {
  subPaginationName: string;
  isReset: boolean;
}

export interface BasicTablePaginationInfo {
  paginationName?: string;
  pageIndex?: number;
  pageRowSize?: number;
}

export interface BasicTableSortInfo {
  sortName?: string;
  sortType: number | string;
  sortOrder: "asc" | "desc" | string;
}

export interface BasicTableSubPaginationInfo {
  subPaginationName?: string;
  subPageIndex?: number;
  subPageRowSize?: number;
}

export interface BasicTableStore {
  buttonModalCustomProps: object;
  buttonPopperCustomProps: object;
  buttonDialogCustomProps: object;
  textValuePopperCustomProps: object;
  textValueModalCustomProps: object;
  textValueDialogCustomProps: object;
  columnValueModalCustomProps: object;
  columnValueDialogCustomProps: object;
  imageModalCustomProps: object;
  directCustomProps: object;
  selectBoxChangeValues: object[];
  radioButtonChangeValues: object[];
  checkedRowList: object[];
  multiCheckedRowListInfo: object;
  subCheckedRowList: object[];
  multiSubCheckedRowListInfo: object;
  checkedRowInfo: object;
  isResetPagination: boolean;
  isResetSubPagination: boolean;
  isResetMultiPaginationList: BasicTableIsResetPaginationInfo[];
  isResetMultiSubPaginationList: BasicTableIsResetSubPaginationInfo[];
  paginationInfo?: BasicTablePaginationInfo;
  paginationInfoList: BasicTablePaginationInfo[];
  subPaginationInfo: BasicTableSubPaginationInfo;
  subPaginationInfoList: BasicTableSubPaginationInfo[];
  sortInfo: BasicTableSortInfo;
  sortInfoList: BasicTableSortInfo[];
}
