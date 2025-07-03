import { createStore } from "zustand/vanilla";
import type { GlobalNotificationStore } from "../../types";

export const initialGlobalNotificationStore: GlobalNotificationStore = {
  isUseGlobalNotification: false,
  globalNotificationOpen: false,
  dataSource: {
    name: "global",
    requestType: "info",
    message: "It's global snackbar notification message.",
  },
  options: {
    isUseAutoHide: true,
    autoHideDuration: 5000,
  },
  notificationList: [],
};
export const useGlobalNotificationStore = createStore(() => ({
  ...initialGlobalNotificationStore,
}));
