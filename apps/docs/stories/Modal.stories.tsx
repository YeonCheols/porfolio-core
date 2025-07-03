import type { Meta, StoryObj } from "@storybook/react";
import {
  BasicButton,
  BasicModal,
  BasicModalProps,
  useBasicModalFunctions,
} from "@ui";

const meta = {
  component: BasicModal,
  argTypes: {
    dataSource: {
      name: "Basic Modal Storybook",
      title: "Modal Test",
      content: <div></div>,
    },
    options: {
      isUseHeader: true,
      isUseButton: true,
      isBackgroundHandle: true,
      contentWidth: 800,
      customizeStyles: {},
    },
  },
} satisfies Meta<typeof BasicModal>;

export default meta;

type Story = StoryObj<BasicModalProps>;

export const Primary: Story = {
  render: (props: BasicModalProps) => {
    const { setModalOpen, setTargetModalName } = useBasicModalFunctions();
    const handleOpenModal = () => {
      setTargetModalName("Basic Modal Storybook");
      setModalOpen(true);
    };

    return (
      <>
        <BasicButton onClick={handleOpenModal}>모달 버튼</BasicButton>
        <BasicModal {...props} />
      </>
    );
  },
  name: "Modal",
  args: {
    dataSource: {
      name: "Basic Modal Storybook",
      title: "Modal Test",
      content: <div></div>,
    },
    options: {
      isUseHeader: true,
      isUseButton: true,
      isBackgroundHandle: true,
      contentWidth: 800,
      customizeStyles: {},
    },
  },
};
