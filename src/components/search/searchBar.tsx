import { ArticleFields } from "@/helpers/graphqlField";
import { searchData } from "@/helpers/searchData";
import { apolloQuery } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, TextField } from "@mui/material";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

function SearchBar() {
  const [newValue, setNewValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newValue.length < 3 || !newValue) return;
    searchData(newValue, dispatch);
  };
  const state = useAppSelector((state: IReducer) => state.search);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  return (
    <Box
      component="form"
      sx={{ with: "100%", mt: 3, mb: 2 }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        placeholder="Your Search"
        variant="outlined"
        sx={{ width: "100%" }}
        defaultValue={state.keywords}
        onChange={(event) => {
          // debouncedSave(event.target.value);
          setNewValue(event.target.value);
        }}
      />
    </Box>
  );
}

export default SearchBar;
