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

function CCard(props: IProps) {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick!()}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%", height: 200, borderRadius: 2 }}
        image={props.article?.image}
        alt={props.article?.title}
      />

      <Box>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "1.1rem", my: 2 }}
        >
          {props.article?.title}
        </Typography>

        <Typography variant="body2" component="span">
          {props.article?.source_name ?? props.article?.category_name}
          {props.ago && ` / ${props.ago}`}
        </Typography>

        <Typography variant="body1" component="p">
          {props.article?.description ?? "..."}
        </Typography>
      </Box>
    </Box>
  );
}

export default CCard;
