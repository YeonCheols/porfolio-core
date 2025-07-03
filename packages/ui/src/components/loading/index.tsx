import { get } from "lodash-es";
import { Box, CircularProgress, styled } from "@mui/material";
import type { LoadingProps } from "../../types/loading";

const LoadingBoxWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "styleOptions",
})<{
  styleOptions?: object;
}>(({ styleOptions }) => ({
  position: "relative",
  left: get(styleOptions, "isUseMenu", false)
    ? "40.5vw"
    : get(styleOptions, "isAbsoluteCenter")
      ? "50vw"
      : "41.5vw",
  height: get(styleOptions, "isUseMenu", false)
    ? "68vh"
    : get(styleOptions, "isAbsoluteCenter")
      ? "50vh"
      : "63vh",
  zIndex: 5000,
}));

export function Loading({ options }: LoadingProps) {
  const {
    dimmed = false,
    fullScreen = false,
    isUseMenu,
    isAbsoluteCenter = false,
  } = options;
  if (fullScreen || dimmed) {
    return (
      <LoadingBoxWrapper
        styleOptions={{
          isFullScreen: fullScreen,
          isDimmed: dimmed,
          isUseMenu,
          isAbsoluteCenter,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "30vh",
            backgroundColor: "transparent",
            padding: "15px 15px",
            borderRadius: "5px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress color="warning" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "auto",
            top: "37vh",
          }}
        >
          <Box
            sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              transform: "translate(-50%, -50%)",
              color: "#000000",
            }}
          >
            화면을 불러오는 중 입니다...
          </Box>
        </Box>
      </LoadingBoxWrapper>
    );
  }

  return <CircularProgress color="primary" />;
}

export default Loading;
