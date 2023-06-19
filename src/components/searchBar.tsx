import { ArticleFields } from "@/helpers/graphqlField";
import { apolloQuery } from "@/utils/apollo";
import { useAppDispatch } from "@/utils/hooks";
import { Box, TextField } from "@mui/material";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

function SearchBar() {
  const handleSubmit = (e: any) => e.preventDefault();
  const dispatch = useAppDispatch();

  const searchData = async (value: string) => {
    dispatch({ type: "search/toggleLoading", payload: true });
    const res = await apolloQuery(`{
        searchArticle(search:"${value}"){
            ${ArticleFields}
        }
    }`);
    if (res.data?.searchArticle) {
      dispatch({ type: "search/saveKeywords", payload: value });
      dispatch({ type: "search/setFeeds", payload: res.data?.searchArticle });
    }
    dispatch({ type: "search/toggleLoading", payload: false });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((newValue) => {
      if (newValue.length < 3) return;
      console.log("========>", newValue);
    }, 3000),
    []
  );

  return (
    <Box component="form" sx={{ with: "100%", mt: 3 }} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        placeholder="Your Search"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={(event) => debouncedSave(event.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
