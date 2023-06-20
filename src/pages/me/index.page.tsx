import FeedEmpty from "@/components/FeedEmpty";
import HomeTab from "@/components/HomeTab";
import SimpleLoading from "@/components/SimpleLoading";
import PageFeed from "@/components/homeTabPage/pageFeed";
import MainLayout from "@/layout/mainLayout";
import { useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function Index() {
  const state = useAppSelector((state: IReducer) => state);
  return (
    <MainLayout title="Today" description="The insights you need to keep ahead">
      {/* <SimpleLoading /> */}
      <HomeTab
        page1={
          <>
            <PageFeed feeds={state.feed.myFeed} loading={state.feed.loading} />
            {state.user.user?.id &&
              state.feed.myFeed.length == 0 &&
              !state.feed.loading && <FeedEmpty />}
          </>
        }
        page2={
          <PageFeed
            feeds={state.feed.exploreFeed}
            loading={state.feed.loading}
          />
        }
      />
    </MainLayout>
  );
}

export default Index;
