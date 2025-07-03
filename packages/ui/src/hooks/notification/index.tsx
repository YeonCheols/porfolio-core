import { create } from "zustand";
import { useSnackbarNotificationStore } from "../../store";

export const useSnackbarNotificationFunctions = create(() => ({
  setSnackbarNotificationOpen: (value: boolean) =>
    useSnackbarNotificationStore.setState({ snackbarNotificationOpen: value }),
  setTargetSnackbarNotificationName: (value: string) =>
    useSnackbarNotificationStore.setState({
      targetSnackbarNotificationName: value,
    }),
}));
