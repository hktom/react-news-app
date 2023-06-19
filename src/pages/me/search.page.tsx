import PageFeed from "@/components/homeTabPage/pageFeed";
import SearchBar from "@/components/searchBar";
import MainLayout from "@/layout/mainLayout";
import { useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

function Index() {
  const state = useAppSelector((state: IReducer) => state.search);

  return (
    <MainLayout title="Search" description="Find your article">
      <SearchBar />
      <PageFeed feeds={state.feeds} loading={state.loading} />
    </MainLayout>
  );
}

export default Index;
