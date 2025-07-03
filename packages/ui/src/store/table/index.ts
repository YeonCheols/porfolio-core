import { create } from "zustand";
import { BasicTableStore } from "../../types/table";

const initialBasicTableStore: BasicTableStore = {
  buttonModalCustomProps: {},
  buttonPopperCustomProps: {},
  buttonDialogCustomProps: {},
  textValuePopperCustomProps: {},
  textValueModalCustomProps: {},
  textValueDialogCustomProps: {},
  columnValueModalCustomProps: {},
  columnValueDialogCustomProps: {},
  imageModalCustomProps: {},
  directCustomProps: {},
  selectBoxChangeValues: [],
  radioButtonChangeValues: [],
  checkedRowList: [],
  multiCheckedRowListInfo: {},
  subCheckedRowList: [],
  multiSubCheckedRowListInfo: {},
  checkedRowInfo: {},
  isResetPagination: false,
  isResetSubPagination: false,
  isResetMultiPaginationList: [],
  isResetMultiSubPaginationList: [],
  paginationInfo: {},
  subPaginationInfo: {
    subPageIndex: 1,
    subPageRowSize: 30,
  },
  paginationInfoList: [],
  subPaginationInfoList: [],
  sortInfo: {
    sortType: 0,
    sortOrder: "desc",
  },
  sortInfoList: [],
};
export const useBasicTableStore = create(() => ({
  ...initialBasicTableStore,
}));
