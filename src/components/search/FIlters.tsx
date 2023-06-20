import { Box, Grid } from "@mui/material";
import SimpleSelect from "./SimpleSelect";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Filters() {
  const state = useAppSelector((state: IReducer) => state.search);
  const dispatch = useAppDispatch();

  // const filter = (type: string, value: string) => {
  //   dispatch({
  //     type: "search/filter",
  //     payload: {
  //       type: type,
  //       name: value,
  //     },
  //   });
  // };

  if (state.categories.length === 0 && state.sources.length === 0) return <></>;

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Grid container spacing={2}>
        {state.categories.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Categories"
              options={state.categories}
              defaultValue={state.category || ""}
              onChange={(value) =>
                // type: "search/filterByCategory",
                dispatch({
                  type: "search/filter",
                  payload: {
                    category: value,
                    source: state.source,
                    orderBy: state.orderBy,
                  },
                })
              }
            />
          </Grid>
        )}
        {state.sources.length > 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <SimpleSelect
              title="Sources"
              options={state.sources}
              defaultValue={state.source || ""}
              onChange={
                (value) =>
                  dispatch({
                    type: "search/filter",
                    payload: {
                      category: state.category,
                      source: value,
                      orderBy: state.orderBy,
                    },
                  })
                // dispatch({
                //   type: "search/filterBySource",
                //   payload: {
                //     type: value,
                //     data: [...state.feeds],
                //   },
                // })
              }
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4}>
          <SimpleSelect
            title="Order By"
            options={[
              {
                id: "newest",
                name: "Newest",
              },
              {
                id: "oldest",
                name: "Oldest",
              },
            ]}
            defaultValue={state.orderBy || ""}
            onChange={(value) => {
              dispatch({
                type: "search/filter",
                payload: {
                  category: state.category,
                  source: state.source,
                  orderBy: value,
                },
              });
              // console.log(value);
              // if (value === "newest") {
              //   dispatch({
              //     type: "search/orderByNewest",
              //     payload: [...state.feeds],
              //   });
              // } else {
              //   dispatch({
              //     type: "search/orderByOldest",
              //     payload: [...state.feeds],
              //   });
              // }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filters;
