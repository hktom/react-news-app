import { Box, Grid } from "@mui/material";
import SimpleSelect from "./SimpleSelect";
import { useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Filters() {
  const state = useAppSelector((state: IReducer) => state.search);

  if (state.categories.length === 0 && state.sources.length === 0) return <></>;

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Grid container spacing={2}>
        {state.categories.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Categories"
              options={state.categories}
              onChange={() => {}}
            />
          </Grid>
        )}
        {state.sources.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Sources"
              options={state.sources}
              onChange={() => {}}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4}>
          {/* <SimpleSelect
            title="Order By"
            options={state.filters}
            onChange={() => {}}
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filters;
