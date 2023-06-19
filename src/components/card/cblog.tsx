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
        "&:hover": {
          backgroundColor: "#F6F7F8",
        },
      }}
      onClick={() => props.onClick!()}
    >
      <CardMedia
        component="img"
        sx={{ width: 140, height: 140 }}
        height="140"
        image={props.article?.image}
        alt={props.article?.title}
      />

      <Box>
        <Typography variant="h4" component="h2" sx={{ flexGrow: 1 }}>
          {props.article?.title}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
            {props.article?.source_name ?? props.article?.category_name}
          </Typography>

          {props.ago && (
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              / {props.ago}
            </Typography>
          )}
        </Box>

        <Typography variant="h4" component="p" sx={{ flexGrow: 1 }}>
          {props.article?.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default CBlog;
