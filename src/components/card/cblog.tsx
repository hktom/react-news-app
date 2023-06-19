import { IArticle } from "@/utils/interface";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface IProps {
  article: IArticle;
  ago?: string;
  onBookmark?: () => void;
  onHover?: () => void;
  onClick?: () => void;
}

function CBlog(props: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        mb: 4,
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick!()}
    >
      <CardMedia
        component="img"
        sx={{
          width: 200,
          minWidth: 200,
          height: 120,
          borderRadius: "10px",
          mr: 2,
          objectFit: "cover",
        }}
        image={props.article?.image}
        alt={props.article?.title}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
        >
          {props.article?.title}
        </Typography>

        <Typography variant="body1" component="p" sx={{ fontSize: "0.80rem" }}>
          {props.article?.source_name ?? props.article?.category_name}
          {props.ago && ` / ${props.ago} ago`}
        </Typography>

        <Typography variant="body1" component="p" sx={{ fontSize: "0.85rem" }}>
          {props.article?.description ?? "..."}
        </Typography>
      </Box>
    </Box>
  );
}

export default CBlog;
