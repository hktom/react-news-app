import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SimpleBottomNavigation from "@/components/SimpleBottomNavigation";
import SimpleDrawer from "@/components/SimpleDrawer";

interface IProps {
  children: React.ReactNode;
}

export default function MainLayout(props: IProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <SimpleDrawer />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ maxWidth: "60rem", mx: "auto" }}>{props.children}</Box>

        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}
