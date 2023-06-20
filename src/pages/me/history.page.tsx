import FeedEmpty from "@/components/FeedEmpty";
import HomeTab from "@/components/HomeTab";
import SimpleLoading from "@/components/SimpleLoading";
import PageFeed from "@/components/homeTabPage/pageFeed";
import MainLayout from "@/layout/mainLayout";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Index() {
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();

  

  return (
    <MainLayout title="History" description="Find all articles you have read">
      <PageFeed feeds={state.feed.exploreFeed} loading={state.feed.loading} />
    </MainLayout>
  );
}

export default Index;
