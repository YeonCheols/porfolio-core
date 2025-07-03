import { createStore } from "zustand/vanilla";
import { get } from "lodash-es";
import { useGlobalNotificationStore } from "../../store/global";

export const useGlobalNotificationFunctions = createStore(() => ({
  setIsUseGlobalNotification: (value: boolean) => {
    useGlobalNotificationStore.setState({ isUseGlobalNotification: value });
  },
  setGlobalNotificationOpen: (value: boolean) => {
    useGlobalNotificationStore.setState({ globalNotificationOpen: value });
  },
  setGlobalNotificationDataSource: (item: object) =>
    useGlobalNotificationStore.setState({
      dataSource: {
        name: get(item, "name", ""),
        requestType: get(item, "requestType", ""),
        message: get(item, "message", ""),
      },
    }),
  setGlobalNotificationOptions: (item: object) =>
    useGlobalNotificationStore.setState({
      options: {
        isUseAutoHide: get(item, "isUseAutoHide", false),
        autoHideDuration: get(item, "autoHideDuration", 3000),
      },
    }),
  showGlobalNotification: (
    type: "success" | "error" | "warning" | "info",
    resMessage: string
  ) => {
    const { notificationList } = useGlobalNotificationStore.getState();
    const resultNotificationItems: object[] = notificationList;
    const resultDataSource = {
      name: "global",
      requestType: type,
      message: resMessage,
    };
    resultNotificationItems.push(resultDataSource);
    useGlobalNotificationStore.setState({
      isUseGlobalNotification: true,
      globalNotificationOpen: true,
      dataSource: resultDataSource,
      notificationList: resultNotificationItems,
    });
  },
  clearGlobalNotificationList: () => {
    useGlobalNotificationStore.setState({ notificationList: [] });
  },
}));
