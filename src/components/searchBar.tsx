import { ArticleFields } from "@/helpers/graphqlField";
import { searchData } from "@/helpers/searchData";
import { apolloQuery } from "@/utils/apollo";
import { useAppDispatch } from "@/utils/hooks";
import { Box, TextField } from "@mui/material";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

function SearchBar() {
  const handleSubmit = (e: any) => e.preventDefault();
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((newValue) => {
      if (newValue.length < 3 || !newValue) return;
      searchData(newValue, dispatch);
    }, 3000),
    []
  );

  return (
    <Box
      component="form"
      sx={{ with: "100%", mt: 3, mb: 5 }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        placeholder="Your Search"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={(event) => {
          debouncedSave(event.target.value);
        }}
      />
    </Box>
  );
}

export default SearchBar;
