import { apolloQuery } from "@/utils/apollo";
import { ArticleFields } from "./graphqlField";

export const fetchData = async (dispatch: any) => {
  dispatch({ type: "feed/toggleLoading", payload: true });

  const res = await apolloQuery(`{
      me{
        id
        name
        email
        avatar
        articles{
          url
          already_read
          favorites
          read_later
        }
        taxonomies{
          id
          name
          type
          slug
          children{
            id
            name
            type
            slug
          }
        }
        settings{
          id
          dark_mode
          notification
          showByPage
          feed_by
          disposition
        }
      }
      myFeed{${ArticleFields}}
      exploreFeed{${ArticleFields}}
    }`);
  if (res?.data?.me?.id) {
    dispatch({
      type: "setting/setSetting",
      payload: res?.data.me?.settings[0] ?? {},
    });
    dispatch({ type: "user/setData", payload: res?.data.me });
    dispatch({
      type: "feed/getData",
      payload: {
        myFeed: res?.data.myFeed,
        exploreFeed: res?.data.exploreFeed,
      },
    });

    dispatch({ type: "feed/toggleLoading", payload: false });
  }
};
