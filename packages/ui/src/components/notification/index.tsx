import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { get } from "lodash-es";
import { isEmpty, isEqualWith } from "lodash-es";
import { styled } from "@mui/system";
import { Alert, Snackbar } from "@mui/material";
import { useSnackbarNotificationStore } from "../../store";
import {
  useGlobalNotificationFunctions,
  useSnackbarNotificationFunctions,
} from "../../hooks";
import { useGlobalNotificationStore } from "../../store/global";
import type {
  SnackbarNotificationDataSource,
  SnackbarNotificationOptions,
  SnackbarNotificationProps,
} from "../../types";

const AlertWrapper = styled(Alert)(() => ({
  width: "100%",
}));

export function SnackbarNotification({
  dataSource,
  options,
}: SnackbarNotificationProps) {
  const [stateIsOpen, setStateIsOpen] = useState<boolean>(false);
  const [stateIsGlobalOpen, setStateIsGlobalOpen] = useState<boolean>(false);
  const [stateNotificationList, setStateNotificationList] = useState<object[]>(
    []
  );
  const { name, requestType, message }: SnackbarNotificationDataSource =
    dataSource;
  const { isUseAutoHide, autoHideDuration }: SnackbarNotificationOptions =
    options;
  const storeSnackbarNotificationOpen = useSnackbarNotificationStore(
    (state) => state.snackbarNotificationOpen
  );
  const storeTargetSnackbarNotificationName = useSnackbarNotificationStore(
    (state) => state.targetSnackbarNotificationName
  );
  const storeGlobalNotificationOpen =
    useGlobalNotificationStore.getState().globalNotificationOpen;
  const storeIsUseGlobalNotification =
    useGlobalNotificationStore.getState().isUseGlobalNotification;
  const clearStoreGlobalNotificationList =
    useGlobalNotificationFunctions.getState().clearGlobalNotificationList;
  const setStoreIsUseGlobalNotification =
    useGlobalNotificationFunctions.getState().setIsUseGlobalNotification;
  const setStoreGlobalNotificationOpen =
    useGlobalNotificationFunctions.getState().setGlobalNotificationOpen;
  const { setSnackbarNotificationOpen } = useSnackbarNotificationFunctions();

  useEffect(() => {
    useGlobalNotificationStore.subscribe(
      (state) => state.isUseGlobalNotification
    );
    useGlobalNotificationStore.subscribe((state) => {
      setStateIsGlobalOpen((prevState) => {
        if (prevState !== state.globalNotificationOpen) {
          return state.globalNotificationOpen;
        }
        return prevState;
      });
    });
    useGlobalNotificationStore.subscribe((state) => {
      setStateNotificationList((prevState) => {
        if (!isEqualWith(prevState, state.notificationList)) {
          return state.notificationList;
        }
        return prevState;
      });
    });
  }, []);

  useEffect(() => {
    setStateNotificationList((prevState) => {
      if (isEmpty(prevState)) {
        return [
          {
            name: "global",
            requestType,
            message,
          },
        ];
      }
      return prevState;
    });
    if (
      !isEmpty(name) &&
      !storeIsUseGlobalNotification &&
      !isEmpty(storeTargetSnackbarNotificationName) &&
      name === storeTargetSnackbarNotificationName
    ) {
      setStateIsOpen(storeSnackbarNotificationOpen);
    }
    if (!isEmpty(name) && storeIsUseGlobalNotification && name === "global") {
      setStateIsOpen(storeGlobalNotificationOpen);
    }
  }, [
    storeIsUseGlobalNotification,
    storeSnackbarNotificationOpen,
    stateIsGlobalOpen,
    storeTargetSnackbarNotificationName,
    stateNotificationList,
  ]);

  const handleCloseNotification = () => {
    if (storeIsUseGlobalNotification) {
      setStoreIsUseGlobalNotification(false);
      setStoreGlobalNotificationOpen(false);
      setStateNotificationList([]);
      clearStoreGlobalNotificationList();
    } else {
      setSnackbarNotificationOpen(false);
    }
  };

  return (
    <div>
      {stateNotificationList.map((item, index) => {
        const styleBottom = index === 0 ? 24 : 24 + 48.02 * index + 10 * index;
        return (
          <Snackbar
            autoHideDuration={isUseAutoHide ? autoHideDuration || 5000 : null}
            key={uuidv4()}
            onClose={handleCloseNotification}
            open={stateIsOpen}
            style={{ bottom: styleBottom }}
          >
            <AlertWrapper
              onClose={handleCloseNotification}
              severity={get(item, "requestType") || "info"}
              variant="filled"
            >
              {get(item, "message") ||
                "It's default message. Please enter message."}
            </AlertWrapper>
          </Snackbar>
        );
      })}
    </div>
  );
}

export default SnackbarNotification;
