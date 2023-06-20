import { apolloMutation } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItemIcon,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function MenuAccount() {
  //   const state = useAppSelector((state: IReducer) => state.setting);
  //   const dispositions = ["Title-Only View", "Cards View", "Magazine View"];
  const dispatch = useAppDispatch();
  const onClick = (page: number) => {
    dispatch({ type: "dialog/toggle", payload: true });
    dispatch({ type: "dialog/changePage", payload: page });
  };

  return (
    <Box>
      <MenuItem onClick={()=>onClick(1)}>
        <Avatar /> My account
      </MenuItem>
      <Divider />

      <MenuItem onClick={()=>onClick(2)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Categories
      </MenuItem>

      <MenuItem onClick={()=>onClick(3)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Sources
      </MenuItem>

      <MenuItem onClick={()=>onClick(4)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Authors
      </MenuItem>

      <Divider />

      <MenuItem onClick={()=>onClick(5)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Box>
  );
}

export default MenuAccount;
