import { create } from "zustand";
import { get, isEmpty, isEqualWith } from "lodash-es";
import { useBasicTableStore } from "../../store/table";
import { makeCheckedRowList } from "../common";
import {
  BasicTableIsResetPaginationInfo,
  BasicTableIsResetSubPaginationInfo,
  BasicTablePaginationInfo,
  BasicTableSortInfo,
  BasicTableSubPaginationInfo,
} from "../../types/table";

export const useBasicTableFunctions = create(() => ({
  setButtonModalCustomProps: (item: object) => {
    const { buttonModalCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(buttonModalCustomProps, item)) {
      useBasicTableStore.setState({ buttonModalCustomProps: item });
    }
  },
  setButtonPopperCustomProps: (item: object) => {
    const { buttonPopperCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(buttonPopperCustomProps, item)) {
      useBasicTableStore.setState({ buttonPopperCustomProps: item });
    }
  },
  setButtonDialogCustomProps: (item: object) => {
    const { buttonDialogCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(buttonDialogCustomProps, item)) {
      useBasicTableStore.setState({ buttonDialogCustomProps: item });
    }
  },
  setTextValuePopperCustomProps: (item: object) => {
    const { textValuePopperCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(textValuePopperCustomProps, item)) {
      useBasicTableStore.setState({ textValuePopperCustomProps: item });
    }
  },
  setTextValueModalCustomProps: (item: object) => {
    const { textValueModalCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(textValueModalCustomProps, item)) {
      useBasicTableStore.setState({ textValueModalCustomProps: item });
    }
  },
  setTextValueDialogCustomProps: (item: object) => {
    const { textValueDialogCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(textValueDialogCustomProps, item)) {
      useBasicTableStore.setState({ textValueDialogCustomProps: item });
    }
  },
  setColumnValueModalCustomProps: (item: object) => {
    const { columnValueModalCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(columnValueModalCustomProps, item)) {
      useBasicTableStore.setState({ columnValueModalCustomProps: item });
    }
  },
  setColumnValueDialogCustomProps: (item: object) => {
    const { columnValueDialogCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(columnValueDialogCustomProps, item)) {
      useBasicTableStore.setState({ columnValueDialogCustomProps: item });
    }
  },
  setImageModalCustomProps: (item: object) => {
    const { imageModalCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(imageModalCustomProps, item)) {
      useBasicTableStore.setState({ imageModalCustomProps: item });
    }
  },
  setDirectCustomProps: (item: object) => {
    const { directCustomProps } = useBasicTableStore.getState();
    if (!isEqualWith(directCustomProps, item)) {
      useBasicTableStore.setState({ directCustomProps: item });
    }
  },
  setIsResetPagination: (value: boolean) =>
    useBasicTableStore.setState({ isResetPagination: value }),
  setIsResetMultiPaginationList: (
    items: BasicTableIsResetPaginationInfo[],
    isAllClear?: boolean
  ) => {
    let resultItems: BasicTableIsResetPaginationInfo[] = [];
    if (isEmpty(items) && isAllClear) {
      const { paginationInfoList } = useBasicTableStore.getState();
      if (!isEmpty(paginationInfoList)) {
        paginationInfoList.forEach((item) => {
          const targetPaginationName = get(item, "paginationName") || "";
          if (!isEmpty(targetPaginationName)) {
            resultItems.push({
              paginationName: targetPaginationName,
              isReset: true,
            });
          }
        });
      }
    } else {
      const { isResetMultiPaginationList } = useBasicTableStore.getState();
      if (isEmpty(isResetMultiPaginationList)) {
        resultItems = resultItems.concat(items);
      } else {
        const filteredIsResetMultiPaginationList =
          isResetMultiPaginationList.filter(
            (item) => item.paginationName !== get(items, "[0].paginationName")
          );
        resultItems = filteredIsResetMultiPaginationList.concat(items);
      }
    }
    useBasicTableStore.setState({ isResetMultiPaginationList: resultItems });
  },
  setIsResetSubPagination: (value: boolean) =>
    useBasicTableStore.setState({ isResetSubPagination: value }),
  setIsResetMultiSubPaginationList: (
    items: BasicTableIsResetSubPaginationInfo[],
    isAllClear?: boolean
  ) => {
    let resultItems: BasicTableIsResetSubPaginationInfo[] = [];
    if (isEmpty(items) && isAllClear) {
      const { subPaginationInfoList } = useBasicTableStore.getState();
      if (!isEmpty(subPaginationInfoList)) {
        subPaginationInfoList.forEach((item) => {
          const targetPaginationName = get(item, "subPaginationName") || "";
          if (!isEmpty(targetPaginationName)) {
            resultItems.push({
              subPaginationName: targetPaginationName,
              isReset: true,
            });
          }
        });
      }
    } else {
      const { isResetMultiSubPaginationList } = useBasicTableStore.getState();
      if (isEmpty(isResetMultiSubPaginationList)) {
        resultItems = resultItems.concat(items);
      } else {
        const filteredIsResetMultiSubPaginationList =
          isResetMultiSubPaginationList.filter(
            (item) =>
              item.subPaginationName !== get(items, "[0].subPaginationName")
          );
        resultItems = filteredIsResetMultiSubPaginationList.concat(items);
      }
    }
    useBasicTableStore.setState({ isResetMultiSubPaginationList: resultItems });
  },
  setPaginationInfo: (item: BasicTablePaginationInfo) => {
    const { paginationInfo } = useBasicTableStore.getState();
    if (!isEqualWith(paginationInfo, item)) {
      useBasicTableStore.setState({ paginationInfo: item });
    }
  },
  setSubPaginationInfo: (item: BasicTableSubPaginationInfo) => {
    const { subPaginationInfo } = useBasicTableStore.getState();
    if (!isEqualWith(subPaginationInfo, item)) {
      useBasicTableStore.setState({ subPaginationInfo: item });
    }
  },
  setPaginationInfoList: (items: BasicTablePaginationInfo[]) => {
    let resultItems: BasicTablePaginationInfo[] = [];
    const { paginationInfoList } = useBasicTableStore.getState();
    if (isEmpty(paginationInfoList)) {
      resultItems = resultItems.concat(items);
    } else {
      const filteredPaginationInfoList = paginationInfoList.filter(
        (item) => item.paginationName !== get(items, "[0].paginationName")
      );
      resultItems = filteredPaginationInfoList.concat(items);
    }
    useBasicTableStore.setState({ paginationInfoList: resultItems });
  },
  setSubPaginationInfoList: (items: BasicTableSubPaginationInfo[]) => {
    let resultItems: BasicTableSubPaginationInfo[] = [];
    const { subPaginationInfoList } = useBasicTableStore.getState();
    if (isEmpty(subPaginationInfoList)) {
      resultItems = resultItems.concat(items);
    } else {
      const filteredSubPaginationInfoList = subPaginationInfoList.filter(
        (item) => item.subPaginationName !== get(items, "[0].subPaginationName")
      );
      resultItems = filteredSubPaginationInfoList.concat(items);
    }
    useBasicTableStore.setState({ subPaginationInfoList: resultItems });
  },
  setSortInfo: (item: BasicTableSortInfo) => {
    const { sortInfo } = useBasicTableStore.getState();
    if (!isEqualWith(sortInfo, item)) {
      useBasicTableStore.setState({ sortInfo: item });
    }
  },
  setSortInfoList: (items: BasicTableSortInfo[]) => {
    let resultItems: BasicTableSortInfo[] = [];
    const { sortInfoList } = useBasicTableStore.getState();
    if (isEmpty(sortInfoList)) {
      resultItems = resultItems.concat(items);
    } else {
      const filteredSortInfoList = sortInfoList.filter(
        (item) => item.sortName !== get(items, "[0].sortName")
      );
      resultItems = filteredSortInfoList.concat(items);
    }
    useBasicTableStore.setState({ sortInfoList: resultItems });
  },
  setSelectBoxChangeValues: (item: object, rowIdName: string) => {
    const resultItems: object[] = [];
    const finalRowIdName = isEmpty(rowIdName) ? "id" : rowIdName;
    const { selectBoxChangeValues } = useBasicTableStore.getState();
    selectBoxChangeValues.forEach((originItem) => {
      if (
        get(originItem, finalRowIdName) !== get(item, finalRowIdName) ||
        get(originItem, "propertyName") !== get(item, "propertyName")
      ) {
        resultItems.push(originItem);
      }
    });
    resultItems.push(item);
    useBasicTableStore.setState({ selectBoxChangeValues: resultItems });
    return resultItems;
  },
  setRadioButtonChangeValues: (item: object, rowIdName: string) => {
    const resultItems: object[] = [];
    const finalRowIdName = isEmpty(rowIdName) ? "id" : rowIdName;
    const { radioButtonChangeValues } = useBasicTableStore.getState();
    radioButtonChangeValues.forEach((originItem) => {
      if (
        get(originItem, finalRowIdName) !== get(item, finalRowIdName) ||
        get(originItem, "propertyName") !== get(item, "propertyName")
      ) {
        resultItems.push(originItem);
      }
    });
    resultItems.push(item);
    useBasicTableStore.setState({ radioButtonChangeValues: resultItems });
    return resultItems;
  },
  setCheckedRowList: (items: object[], rowIdName: string) => {
    const resultItems = makeCheckedRowList("single", items, rowIdName);
    useBasicTableStore.setState({ checkedRowList: resultItems });
    return resultItems;
  },
  setSubCheckedRowList: (items: object[], rowIdName: string) => {
    const resultItems = makeCheckedRowList("sub", items, rowIdName);
    useBasicTableStore.setState({ subCheckedRowList: resultItems });
    return resultItems;
  },
  setMultiCheckedRowListInfo: (
    items: object[],
    rowIdName: string,
    keyName: string
  ) => {
    const resultItems = makeCheckedRowList(
      "multiSingle",
      items,
      rowIdName,
      keyName
    );
    const { multiCheckedRowListInfo } = useBasicTableStore.getState();
    const resultItem = {
      ...multiCheckedRowListInfo,
      [keyName]: resultItems,
    };
    useBasicTableStore.setState({ multiCheckedRowListInfo: resultItem });
    return resultItem;
  },
  setMultiSubCheckedRowListInfo: (
    items: object[],
    rowIdName: string,
    keyName: string
  ) => {
    const resultItems = makeCheckedRowList(
      "multiSub",
      items,
      rowIdName,
      keyName
    );
    const { multiSubCheckedRowListInfo } = useBasicTableStore.getState();
    const resultItem = {
      ...multiSubCheckedRowListInfo,
      [keyName]: resultItems,
    };
    useBasicTableStore.setState({ multiSubCheckedRowListInfo: resultItem });
    return resultItem;
  },
  setCheckedRowInfo: (item: object) => {
    const { checkedRowInfo } = useBasicTableStore.getState();
    if (!isEqualWith(checkedRowInfo, item)) {
      useBasicTableStore.setState({ checkedRowInfo: item });
    }
  },
  clearSelectBoxChangeValues: () =>
    useBasicTableStore.setState({ selectBoxChangeValues: [] }),
  clearCheckedRowList: () =>
    useBasicTableStore.setState({ checkedRowList: [] }),
  clearMultiCheckedRowListInfo: () =>
    useBasicTableStore.setState({ multiCheckedRowListInfo: {} }),
  clearSubCheckedRowList: () =>
    useBasicTableStore.setState({ subCheckedRowList: [] }),
  clearMultiSubCheckedRowListInfo: () =>
    useBasicTableStore.setState({ multiSubCheckedRowListInfo: {} }),
  resetSortInfo: () =>
    useBasicTableStore.setState({
      sortInfo: { sortOrder: "desc", sortType: 0 },
    }),
  clearCheckedRowInfo: () =>
    useBasicTableStore.setState({ checkedRowInfo: {} }),
}));
