import { Box, Grid } from "@mui/material";
import SimpleSelect from "./SimpleSelect";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Filters() {
  const state = useAppSelector((state: IReducer) => state.search);
  const dispatch = useAppDispatch();

  const filter = (type: string, value: string) => {
    dispatch({
      type: "search/filter",
      payload: {
        type: type,
        name: value,
      },
    });
  };

  if (state.categories.length === 0 && state.sources.length === 0) return <></>;

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Grid container spacing={2}>
        {state.categories.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Categories"
              options={state.categories}
              onChange={(value) => filter("category", value)}
            />
          </Grid>
        )}
        {state.sources.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Sources"
              options={state.sources}
              onChange={(value) => filter("source", value)}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4}>
          <SimpleSelect
            title="Order By"
            options={[
              {
                id: "0",
                name: "Newest",
              },
              {
                id: "1",
                name: "Oldest",
              },
            ]}
            onChange={() => {}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filters;
