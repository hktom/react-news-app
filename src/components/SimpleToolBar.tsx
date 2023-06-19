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

interface IButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

const ToolBarButton = (props: IButtonProps) => {
  const { title, children, onClick } = props;
  return (
    <Tooltip title={title}>
      <IconButton sx={{ mx: 2 }} onClick={() => onClick()}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

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
      children: <BookmarkBorderIcon />,
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
    <Box sx={{ display: "flex" }}>
      {buttons.map((item, index) => (
        <ToolBarButton key={index} title={item.title} onClick={item.onClick}>
          {item.children}
        </ToolBarButton>
      ))}
    </Box>
  );
}

export default SimpleToolBar;
