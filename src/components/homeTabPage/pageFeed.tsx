import { useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
import { IReducer } from "@/utils/rootReducer";
import { Box, Grid } from "@mui/material";
import SimpleCard from "../SimpleCard";
import SimpleLoading from "../SimpleLoading";

interface IProps {
  feeds: IArticle[];
}

function PageFeed(props: IProps) {
  const state = useAppSelector((state: IReducer) => state);

  if (state.feed?.loading) return <SimpleLoading />;

  if (state.setting?.settings?.disposition === 2) {
    return (
      <Box>
        <Grid container>
          {props.feeds.map((feed, index) => (
            <SimpleCard key={index} article={feed} />
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: state.setting?.settings?.disposition !== 1 ? "50rem" : "auto",
      }}
    >
      {props.feeds.map((feed, index) => (
        <SimpleCard key={index} article={feed} />
      ))}
    </Box>
  );
}

export default PageFeed;
