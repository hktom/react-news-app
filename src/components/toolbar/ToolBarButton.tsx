import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  Tooltip,
  IconButton,
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { useState } from "react";

export interface IButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  menu?: React.ReactNode;
  sx?: any;
  type?: any;
}

export const ToolBarButton = (props: IButtonProps) => {
  const { title, children, onClick } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleClick");
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          sx={props.sx ?? { mx: 0 }}
          onClick={props.menu ? handleClick : onClick}
        >
          {children}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ p: 3 }}>{props.menu && props.menu}</Box>
      </Menu>
    </>
  );
};

export default ToolBarButton;
