import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SimpleBottomNavigation from "@/components/SimpleBottomNavigation";
import SimpleDrawer from "@/components/SimpleDrawer";
import { Divider, Typography } from "@mui/material";
import HomeToolBar from "@/components/toolbar/HomeToolBar";
import SimpleAppBar from "@/components/SimpleAppBar";

interface IProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function MainLayout(props: IProps) {
  const theme = useTheme();

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
