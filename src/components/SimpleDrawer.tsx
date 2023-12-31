import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MainMenu, TaxonomiesMenu } from "@/helpers/leftMenu";
import MenuListItem from "./MenuListItem";
import { useAppSelector, useAppDispatch } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import MenuList from "./MenuList";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SimpleDrawer() {
  const state = useAppSelector((state: IReducer) => state.menu);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch({ type: "menu/openDrawer", payload: !state.is_drawer_open });
  };
  return (
    <Box sx={{ display: { md: "block", xs: "none" } }}>
      <CssBaseline />

      <Drawer variant="permanent" open={state.is_drawer_open}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            {!state.is_drawer_open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <MenuList open={state.is_drawer_open} />
        {/* <List>
          {MainMenu.map((item, index) => (
            <MenuListItem key={index} {...item} open={state.is_drawer_open} />
          ))}
        </List>

        <List>
          <Box sx={{ opacity: state.is_drawer_open ? 1 : 0 }}>
            <Typography
              variant="body1"
              component="div"
              sx={{ px: 2.5, mt: 2, mb: 1 }}
            >
              Feeds by
            </Typography>
          </Box>
          {TaxonomiesMenu.map((item, index) => (
            <MenuListItem key={index} {...item} open={state.is_drawer_open} />
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}

export default SimpleDrawer;
