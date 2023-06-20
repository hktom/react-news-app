import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, IconButton, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import SourceIcon from "@mui/icons-material/Source";
import AppsIcon from "@mui/icons-material/Apps";
import React from "react";
import ToolBarButton, { IButtonProps } from "./ToolBarButton";

function SimpleToolBar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state);

  const buttons: IButtonProps[] = [
    {
      title: "Add to Favorites",
      children: <BookmarkBorderIcon />,
      onClick: () => {},
    },
    {
      title: "Add to Read Later",
      children: <AccessTimeIcon />,
      onClick: () => {},
    },
    {
      title: "Save Category",
      children: <AppsIcon />,
      onClick: () => {},
    },
    {
      title: "Save Source",
      children: <SourceIcon />,
      onClick: () => {},
    },
    {
      title: "Save Author",
      children: <PersonIcon />,
      onClick: () => {},
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 5 }}>
      {buttons.map((item, index) => (
        <ToolBarButton
          key={index}
          title={item.title}
          onClick={item.onClick}
          sx={{ mx: 1 }}
        >
          {item.children}
        </ToolBarButton>
      ))}
    </Box>
  );
}

export default SimpleToolBar;
