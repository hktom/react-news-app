import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SimpleBottomNavigation from "@/components/SimpleBottomNavigation";
import SimpleDrawer from "@/components/SimpleDrawer";
import { Divider, Typography } from "@mui/material";
import HomeToolBar from "@/components/toolbar/HomeToolBar";
import SimpleAppBar from "@/components/SimpleAppBar";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { useEffect } from "react";
import { apolloQuery } from "@/utils/apollo";
import { ArticleFields } from "@/helpers/graphqlField";

interface IProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function MainLayout(props: IProps) {
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const fetchData = async () => {
    dispatch({ type: "feed/toggleLoading" });
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
        }
      }
      myFeed{${ArticleFields}}
      exploreFeed{${ArticleFields}}
    }`);
    console.log(res?.data);
    dispatch({ type: "feed/toggleLoading" });
  };

  useEffect(() => {
    if (!state.user?.user?.id) {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <SimpleDrawer />

      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <SimpleAppBar />
        <Box sx={{ p: 3, mt: 10 }}>
          <Box sx={{ maxWidth: "60rem", mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" component="h1">
                {props.title}
              </Typography>

              <HomeToolBar />
            </Box>
            {props.children}
          </Box>

          <SimpleBottomNavigation />
        </Box>
      </Box>
    </Box>
  );
}
