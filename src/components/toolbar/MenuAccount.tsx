import { apolloMutation } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItemIcon,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";

function MenuAccount() {
  const dispatch = useAppDispatch();
  const onClick = (page: number) => {
    dispatch({ type: "dialog/toggle", payload: true });
    dispatch({ type: "dialog/changePage", payload: page });
  };
  const [loading, setLoading] = useState<boolean>(false);

  const logout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await apolloMutation(`mutation{
        logout{
          token
          error
          status
        }
      }`);
    } catch (error) {
    } finally {
      setLoading(false);
      Cookies.remove("token");
      window.location.reload();
    }
  };

  return (
    <Box>
      <MenuItem onClick={() => onClick(1)}>
        <Avatar /> My account
      </MenuItem>
      <Divider />

      <MenuItem onClick={() => onClick(2)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Categories
      </MenuItem>

      <MenuItem onClick={() => onClick(3)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Sources
      </MenuItem>

      <MenuItem onClick={() => onClick(4)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Authors
      </MenuItem>

      <Divider />

      <MenuItem onClick={() => onClick(5)}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>

      <MenuItem onClick={() => logout()}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout {loading && <CircularProgress size={20} />}
      </MenuItem>
    </Box>
  );
}

export default MenuAccount;
