import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SimpleBottomNavigation from "@/components/SimpleBottomNavigation";
import SimpleDrawer from "@/components/SimpleDrawer";
import { CircularProgress, Divider, Typography } from "@mui/material";
import HomeToolBar from "@/components/toolbar/HomeToolBar";
import SimpleAppBar from "@/components/SimpleAppBar";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { useEffect } from "react";
import { apolloQuery } from "@/utils/apollo";
import { ArticleFields } from "@/helpers/graphqlField";
import { useRouter } from "next/router";
import { fetchData } from "@/helpers/fetchData";
import SimpleDialog from "@/components/dialog/MainDialog";

interface IProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function MainLayout(props: IProps) {
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (!state.user?.user?.id && !state.feed.loading) {
      fetchData(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.user?.user?.id]);

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

              {!state.setting?.loading && <HomeToolBar />}
            </Box>
            {props.children}
          </Box>

          <SimpleBottomNavigation />
        </Box>
      </Box>
      <SimpleDialog />
    </Box>
  );
}
