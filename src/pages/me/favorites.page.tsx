import FeedEmpty from "@/components/FeedEmpty";
import HomeTab from "@/components/HomeTab";
import SimpleLoading from "@/components/SimpleLoading";
import PageFeed from "@/components/homeTabPage/pageFeed";
import { ArticleFields } from "@/helpers/graphqlField";
import MainLayout from "@/layout/mainLayout";
import { apolloQuery } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
import { IReducer } from "@/utils/rootReducer";
import { useEffect, useState } from "react";

function Index() {
  const state = useAppSelector((state: IReducer) => state);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IArticle[]>([]);

  const getHistories = async () => {
    setLoading(true);
    const res = await apolloQuery(`{
        getArticleBy(key:"favorites", value:"1"){
            ${ArticleFields}
        }
    }`);

    if (res?.data?.getArticleBy) {
      setData(res?.data?.getArticleBy);
    }
    setLoading(false);
  };

  useEffect(() => {
    getHistories();
  }, []);

  return (
    <MainLayout title="Favorites" description="">
      <PageFeed feeds={data} loading={loading} />
    </MainLayout>
  );
}

export default Index;
