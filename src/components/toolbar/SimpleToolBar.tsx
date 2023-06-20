import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import SourceIcon from "@mui/icons-material/Source";
import AppsIcon from "@mui/icons-material/Apps";
import React from "react";
import ToolBarButton, { IButtonProps } from "./ToolBarButton";
import { saveArticle } from "@/helpers/saveArticle";
import { saveTaxonomy } from "@/helpers/saveTaxonomy";

function SimpleToolBar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state);
  const [loading, setLoading] = React.useState(false);

  const buttons: IButtonProps[] = [
    {
      title: "Add to Favorites",
      children: <BookmarkBorderIcon />,
      onClick: () => {
        if (!state.feed.article) return;
        setLoading(true);
        const exceptFields = ["id", "read_later", "favorites", "already_read"];
        saveArticle(state.feed.article!, exceptFields, "favorites:1", () =>
          setLoading(false)
        );
      },
    },
    {
      title: "Add to Read Later",
      children: <AccessTimeIcon />,
      onClick: () => {
        if (!state.feed.article) return;
        setLoading(true);
        const exceptFields = ["id", "read_later", "favorites", "already_read"];
        saveArticle(state.feed.article!, exceptFields, "read_later:1", () =>
          setLoading(false)
        );
      },
    },
    {
      title: "Save Category",
      children: <AppsIcon />,
      onClick: () => {
        setLoading(true);
        saveTaxonomy(state.feed?.article!, "category", () => setLoading(false));
      },
      type: "category",
    },
    {
      title: "Save Source",
      children: <SourceIcon />,
      onClick: () => {
        setLoading(true);
        saveTaxonomy(state.feed?.article!, "source", () => setLoading(false));
      },
      type: "source",
    },
    {
      title: "Save Author",
      children: <PersonIcon />,
      onClick: () => {
        setLoading(true);
        saveTaxonomy(state.feed?.article!, "author", () => setLoading(false));
      },
      type: "author",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 5 }}>
      {loading && <CircularProgress size={25} sx={{ mx: 1 }} />}
      {!loading &&
        buttons.map((item, index) => {
          if (item?.type == "category" && !state.feed?.article?.category_name)
            return null;

          if (item?.type == "source" && !state.feed?.article?.source_name)
            return null;
          if (item?.type == "author" && !state.feed?.article?.author_name)
            return null;

          return (
            <ToolBarButton
              key={index}
              title={item.title}
              onClick={item.onClick}
              sx={{ mx: 1 }}
            >
              {item.children}
            </ToolBarButton>
          );
        })}
    </Box>
  );
}

export default SimpleToolBar;
