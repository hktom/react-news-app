import { IArticle } from "@/utils/interface";
import { Box, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

dayjs.extend(relativeTime);

function CTitle(props: IArticle) {
  const time = dayjs(props.publishedAt).fromNow();
  const router = useRouter();
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  const onClick = () => {
    // router.push(`/me/article/${props.title}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
    >
      <IconButton aria-label="bookmark">
        <BookmarkBorderIcon />
      </IconButton>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {props.source_name ?? props.category_name}
      </Typography>

      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        {time}
      </Typography>
    </Box>
  );
}

export default CTitle;
