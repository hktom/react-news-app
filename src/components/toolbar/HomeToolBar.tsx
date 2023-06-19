import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ToolBarButton, { IButtonProps } from "./ToolBarButton";
import CheckIcon from "@mui/icons-material/Check";
import ListIcon from "@mui/icons-material/List";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";

function HomeToolBar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state);

  const buttons: IButtonProps[] = [
    {
      title: "Mark all as read",
      children: <CheckIcon />,
      onClick: () => {},
    },
    {
      title: "Disposition",
      children: <ListIcon />,
      onClick: () => {},
    },
    {
      title: "Search Articles",
      children: <SearchIcon />,
      onClick: () => {},
    },
    {
      title: "Refresh",
      children: <RefreshIcon />,
      onClick: () => {},
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      {buttons.map((item, index) => (
        <ToolBarButton key={index} title={item.title} onClick={item.onClick}>
          {item.children}
        </ToolBarButton>
      ))}
    </Box>
  );
}

export default HomeToolBar;
