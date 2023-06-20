import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ToolBarButton, { IButtonProps } from "./ToolBarButton";
import CheckIcon from "@mui/icons-material/Check";
import ListIcon from "@mui/icons-material/List";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import MenuDisposition from "./MenuDisposition";
import { useRouter } from "next/router";
import { fetchData } from "@/helpers/fetchData";

function HomeToolBar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state);
  const router = useRouter();

  const buttons: IButtonProps[] = [
    {
      title: "Disposition",
      children: <ListIcon />,
      onClick: () => {
        console.log("show MenuDisposition");
      },
      menu: <MenuDisposition />,
    },
    {
      title: "Search Articles",
      children: <SearchIcon />,
      onClick: () => router.push("/me/search"),
    },
    {
      title: "Refresh",
      children: <RefreshIcon />,
      onClick: () => fetchData(dispatch),
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      {buttons.map((item, index) => (
        <ToolBarButton
          key={index}
          title={item.title}
          onClick={item.onClick}
          menu={item.menu}
        >
          {item.children}
        </ToolBarButton>
      ))}
    </Box>
  );
}

export default HomeToolBar;
