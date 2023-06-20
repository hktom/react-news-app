import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, IconButton, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import ArticleSingle from "../ArticleSingle";
import SettingUser from "../toolbar/SettingUser";
import SettingTaxonomy from "../toolbar/SettingTaxonomy";
import SettingFeed from "../toolbar/SettingFeed";
import MobileMenu from "../MobileMenu";

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

      case 1:
        return <SettingUser />;

      case 2:
        return <SettingTaxonomy id="category" title="Catégories" />;

      case 3:
        return <SettingTaxonomy id="source" title="Sources" />;

      case 4:
        return <SettingTaxonomy id="author" title="Authors" />;

      case 5:
        return <SettingFeed />;

      case 6:
        return <MobileMenu />;

      default:
        return <></>;
        break;
    }
  };

  return (
    <Dialog
      maxWidth={!state.dialog.page ? "md" : "xs"}
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
