import type { Meta, StoryObj } from "@storybook/react";
import {
  BasicButton,
  SnackbarNotification,
  SnackbarNotificationProps,
  useGlobalNotificationFunctions,
  useSnackbarNotificationFunctions,
} from "@ui";

const meta = {
  component: SnackbarNotification,
  argTypes: {
    dataSource: {
      name: "Snackbar Notification Storybook",
      requestType: "success",
      message: "Congratulations! It was successful!",
    },
    options: {
      isUseAutoHide: false,
      autoHideDuration: 5000,
    },
  },
} satisfies Meta<typeof SnackbarNotification>;

export default meta;

type Story = StoryObj<SnackbarNotificationProps>;

export const Primary: Story = {
  render: (props: SnackbarNotificationProps) => {
    const { setSnackbarNotificationOpen, setTargetSnackbarNotificationName } =
      useSnackbarNotificationFunctions();
    const setStoreIsUseGlobalNotification =
      useGlobalNotificationFunctions.getState().setIsUseGlobalNotification;
    const handleOpenSnackbarNotification = () => {
      setStoreIsUseGlobalNotification(false);
      setSnackbarNotificationOpen(true);
    };
    setTargetSnackbarNotificationName("Snackbar Notification Storybook");

    return (
      <>
        <BasicButton onClick={handleOpenSnackbarNotification}>
          알림 버튼
        </BasicButton>
        <SnackbarNotification {...props} />
      </>
    );
  },
  name: "Notification",
  args: {
    dataSource: {
      name: "Snackbar Notification Storybook",
      requestType: "success",
      message: "Congratulations! It was successful!",
    },
    options: {
      isUseAutoHide: false,
      autoHideDuration: 5000,
    },
  },
};
