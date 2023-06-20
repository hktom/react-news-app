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
  const dispatch = useAppDispatch();
  //   const dispositions = ["Title-Only View", "Cards View", "Magazine View"];

  return (
    <Box>
      <MenuItem>
        <Avatar /> My account
      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Categories
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Sources
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Authors
      </MenuItem>

      <Divider />

      <MenuItem>
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
