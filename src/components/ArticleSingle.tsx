import { IArticle } from "@/utils/interface";
import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SimpleToolBar from "./toolbar/SimpleToolBar";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function ArticleSingle() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state.feed);

  return (
    <Box
      sx={{}}
      //   onClick={() => state?.onClick!()}
    >
      <SimpleToolBar />
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontWeight: "bold", fontSize: "1.8rem", mt: 2 }}
        >
          {state?.article?.title}
        </Typography>

        <Typography variant="body1" component="div" sx={{ my: 1 }}>
          {state?.article?.source_name ?? state?.article?.category_name}
          {/* {state?.ago && ` / ${state?.ago}`} */}
        </Typography>

        <CardMedia
          component="img"
          sx={{ width: "100%", height: 400, borderRadius: 2 }}
          image={state?.article?.image}
          alt={state?.article?.title}
        />

        <Typography
          variant="body1"
          component="div"
          sx={{
            my: 2,
            p: {
              fontSize: "1.1rem",
            },
            img: {
              width: "100%",
              objectFit: "cover",
              margin: 0,
            },
          }}
          dangerouslySetInnerHTML={{
            __html:
              state?.article?.content ?? state?.article?.description ?? "...",
          }}
        ></Typography>

        <Button
          variant="outlined"
          color="primary"
          sx={{ width: "100%", my: 2, p: 1 }}
          onClick={() => window.open(state?.article?.url, "_blank")}
        >
          VISIT WEBSITE
        </Button>
      </Box>
    </Box>
  );
}

export default ArticleSingle;
