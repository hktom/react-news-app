import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, IconButton, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import ArticleSingle from "../ArticleSingle";

function SimpleDialog() {
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    dispatch({ type: "dialog/toggle", payload: false });
  };

  const getPage = (): React.ReactNode => {
    switch (state.dialog.page) {
      case 0:
        return <ArticleSingle />;
        break;

      default:
        return <></>;
        break;
    }
  };

  return (
    <Dialog
      maxWidth={"md"}
      fullWidth
      fullScreen={fullScreen}
      onClose={handleClose}
      open={state.dialog.open}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>

        {getPage()}
      </Box>
    </Dialog>
  );
}

export default SimpleDialog;
