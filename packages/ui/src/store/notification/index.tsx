import { create } from "zustand";
import type { SnackbarNotificationStore } from "../../types";

export const initialSnackbarNotificationStore: SnackbarNotificationStore = {
  snackbarNotificationOpen: false,
  targetSnackbarNotificationName: "",
};

export const useSnackbarNotificationStore = create(() => ({
  ...initialSnackbarNotificationStore,
}));
