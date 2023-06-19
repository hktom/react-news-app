import PageFeed from "@/components/homeTabPage/pageFeed";
import Filters from "@/components/search/FIlters";
import SearchBar from "@/components/search/searchBar";
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
      <Filters />
      <PageFeed feeds={state.feeds} loading={state.loading} />
    </MainLayout>
  );
}

export default Index;
