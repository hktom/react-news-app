import { useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
import { IReducer } from "@/utils/rootReducer";
import { Box, Grid } from "@mui/material";
import SimpleCard from "../SimpleCard";
import SimpleLoading from "../SimpleLoading";

interface IProps {
  feeds: IArticle[];
  loading?: boolean;
}

function PageFeed(props: IProps) {
  const state = useAppSelector((state: IReducer) => state);

  if (props.loading) return <SimpleLoading />;

  if (state.setting?.disposition === 1) {
    return (
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={4}>
          {props.feeds.map((feed, index) => (
            <Grid item md={4} xs={12} key={index}>
              <SimpleCard article={feed} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 2,
        maxWidth: state.setting?.disposition !== 0 ? "45rem" : "auto",
      }}
    >
      {props.feeds.map((feed, index) => (
        <SimpleCard key={index} article={feed} />
      ))}
    </Box>
  );
}

export default PageFeed;
