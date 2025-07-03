import { get, isEmpty } from "lodash-es";
import { useBasicTableStore } from "../store/table";
import { CheckedTableType } from "../types/common";

export const makeCheckedRowList = (
  type: CheckedTableType,
  items: object[],
  rowIdName: string,
  keyName?: string
) => {
  let resultItems: object[] = [];
  let finalCheckedRowList: object[] = [];
  const finalRowIdName = isEmpty(rowIdName) ? "id" : rowIdName;
  const { checkedRowList, subCheckedRowList } = useBasicTableStore.getState();
  const { multiCheckedRowListInfo, multiSubCheckedRowListInfo } =
    useBasicTableStore.getState();

  switch (type) {
    case "single":
      finalCheckedRowList = checkedRowList;
      break;
    case "sub":
      finalCheckedRowList = subCheckedRowList;
      break;
    case "multiSingle":
      finalCheckedRowList = get(multiCheckedRowListInfo, keyName || "") || [];
      break;
    case "multiSub":
      finalCheckedRowList =
        get(multiSubCheckedRowListInfo, keyName || "") || [];
      break;
    default:
      break;
  }

  if (isEmpty(finalCheckedRowList)) {
    resultItems = items;
  } else {
    const changeTargetRowIdList: Array<string | number> = [];

    items.forEach((item) => {
      changeTargetRowIdList.push(get(item, finalRowIdName) || "");
    });
    finalCheckedRowList.forEach((item) => {
      if (
        !changeTargetRowIdList.some((id) => id === get(item, finalRowIdName))
      ) {
        resultItems.push(item);
      }
    });

    items.forEach((item) => {
      resultItems.push(item);
    });
  }
  return resultItems;
};
