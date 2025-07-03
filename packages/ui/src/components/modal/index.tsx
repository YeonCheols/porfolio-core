import {
  Box,
  Button,
  CardHeader,
  Divider,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import { CloseRounded as CloseRoundedIcon } from "@mui/icons-material";
import isEmpty from "lodash-es/isEmpty";
import { useBasicModalStore } from "../../store/modal";
import { useBasicModalFunctions } from "../../hooks/modal";
import { useBasicTableFunctions } from "../../hooks/table";
import {
  BasicModalDataSource,
  BasicModalOptions,
  BasicModalProps,
} from "../../types/modal";

const ModalWrapper = styled(Modal)(() => ({
  overflow: "auto",
}));

const ContentWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  paddingTop: 20,
  overflow: "auto",
}));

const TitleWrapper = styled(Typography)(() => ({
  fontWeight: "bolder",
}));

const BoxWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFFFFF",
  borderRadius: 10,
  padding: 20,
  maxHeight: "90%",
}));

const DividerWrapper = styled(Divider)(() => ({
  borderColor: "#000000",
  borderBottomWidth: 2,
}));

const ButtonWrapper = styled("div")(() => ({
  textAlign: "center",
  paddingTop: 20,
}));

export function BasicModal({ dataSource, options }: BasicModalProps) {
  const { name, title, content }: BasicModalDataSource = dataSource;
  const {
    isUseHeader,
    isUseButton,
    isBackgroundHandle,
    contentWidth,
    customizeStyles,
    isUseCloseConfirm,
    closeConfirmMessage,
  }: BasicModalOptions = options;
  const storeModalOpen = useBasicModalStore((state) => state.modalOpen);
  const storeTargetModalName = useBasicModalStore(
    (state) => state.targetModalName
  );
  const { setModalOpen } = useBasicModalFunctions();
  const { setButtonModalCustomProps, setTextValueModalCustomProps } =
    useBasicTableFunctions();

  const isOpen =
    !isEmpty(storeTargetModalName) &&
    storeModalOpen &&
    name === storeTargetModalName;

  const customizeStyle = {
    width: contentWidth || 750,
    boxShadow: 24,
  };

  if (!isEmpty(customizeStyles)) Object.assign(customizeStyle, customizeStyles);

  const handleModalClose = () => {
    if (isUseCloseConfirm) {
      const isYes = confirm(closeConfirmMessage);
      if (isYes) {
        setButtonModalCustomProps({});
        setTextValueModalCustomProps({});
        setModalOpen(false);
      }
    } else {
      setButtonModalCustomProps({});
      setTextValueModalCustomProps({});
      setModalOpen(false);
    }
  };

  return (
    <ModalWrapper
      open={isOpen}
      onClose={isBackgroundHandle ? handleModalClose : () => null}
      aria-labelledby="basic-modal-title"
      aria-describedby="basic-modal-description"
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <BoxWrapper sx={customizeStyle}>
        {isUseHeader ? (
          <>
            <CardHeader
              action={
                <CloseRoundedIcon
                  fontSize="medium"
                  onClick={handleModalClose}
                  sx={{ cursor: "pointer" }}
                />
              }
              title={<TitleWrapper variant="h6">{title}</TitleWrapper>}
            />
            <DividerWrapper />
          </>
        ) : null}

        <ContentWrapper>{content}</ContentWrapper>
        {isUseButton ? (
          <ButtonWrapper>
            <Button
              variant="contained"
              sx={{ width: "15%" }}
              onClick={handleModalClose}
            >
              확인
            </Button>
          </ButtonWrapper>
        ) : null}
      </BoxWrapper>
    </ModalWrapper>
  );
}

export default BasicModal;
