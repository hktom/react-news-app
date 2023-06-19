import HomeTab from "@/components/HomeTab";
import SimpleLoading from "@/components/SimpleLoading";
import PageFeed from "@/components/homeTabPage/pageFeed";
import MainLayout from "@/layout/mainLayout";
import { useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Index() {
  const state = useAppSelector((state: IReducer) => state.feed);
  return (
    <MainLayout title="Today" description="The insights you need to keep ahead">
      {/* <SimpleLoading /> */}
      <HomeTab
        page1={<PageFeed feeds={state.myFeed} />}
        page2={<PageFeed feeds={state.exploreFeed} />}
      />
    </MainLayout>
  );
}

export default Index;
