import { IArticle } from "@/utils/interface";
import { Box, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface IProps {
  article: IArticle;
  ago?: string;
  onBookmark?: () => void;
  onHover?: () => void;
  onClick?: () => void;
}

function CTitle(props: IProps) {

  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick!()}
    >
      <IconButton aria-label="bookmark" onClick={() => props.onBookmark!()}>
        <BookmarkBorderIcon />
      </IconButton>

      <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
        {props.article?.source_name ?? props.article?.category_name}
      </Typography>

      {props.ago && (
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          {props.ago}
        </Typography>
      )}
    </Box>
  );
}

export default CTitle;
