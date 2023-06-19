import { apolloQuery } from "@/utils/apollo";
import { ArticleFields } from "./graphqlField";

export const searchData = async (value: string, dispatch: any) => {
  dispatch({ type: "search/toggleLoading", payload: true });
  const res = await apolloQuery(`{
        searchArticle(search:"${value}"){
            ${ArticleFields}
        }
    }`);
  if (res.data?.searchArticle) {
    dispatch({
      type: "search/setCategories",
      payload: res.data?.searchArticle,
    });
    dispatch({ type: "search/setSources", payload: res.data?.searchArticle });
    dispatch({ type: "search/saveKeywords", payload: value });
    dispatch({ type: "search/setFeeds", payload: res.data?.searchArticle });
  }
  dispatch({ type: "search/toggleLoading", payload: false });
};
