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
        alignItems: "flex-start",
        justifyContent: "space-between",
        cursor: "pointer",
        borderBottom: "1px solid #F6F7F8",
        mb: 1,
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick!()}
    >
      <Typography
        variant="body1"
        component="h2"
        sx={{ maxWidth: "80%", fontWeight: "bold", pr: 2 }}
      >
        {props.article?.title}
      </Typography>

      <Typography variant="body2" component="span" sx={{ fontSize: "0.8rem" }}>
        {props.article?.source_name ?? props.article?.category_name}
        {props.ago}
      </Typography>
    </Box>
  );
}

export default CTitle;
