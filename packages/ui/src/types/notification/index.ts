export interface SnackbarNotificationStore {
  snackbarNotificationOpen: boolean;
  targetSnackbarNotificationName: string;
}

export interface SnackbarNotificationProps {
  dataSource: SnackbarNotificationDataSource;
  options: SnackbarNotificationOptions;
}

export interface SnackbarNotificationDataSource {
  name: string;
  requestType: "success" | "info" | "warning" | "error";
  message: string;
}

export interface SnackbarNotificationOptions {
  isUseAutoHide: boolean;
  autoHideDuration: number;
}
