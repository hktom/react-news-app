import PageFeed from "@/components/homeTabPage/pageFeed";
import { ArticleFields } from "@/helpers/graphqlField";
import MainLayout from "@/layout/mainLayout";
import { apolloQuery } from "@/utils/apollo";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
// import { IReducer } from "@/utils/rootReducer";
import { useEffect, useState } from "react";

interface IProps {
  id: string;
  value: string;
  title: string;
  description?: string;
}

function ArticleByStatus(props: IProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IArticle[]>([]);

  const getHistories = async () => {
    setLoading(true);
    try {
      const res = await apolloQuery(`{
        getArticleBy(key:"${props.id}", value:"${props.value}"){
            ${ArticleFields}
        }
    }`);

      if (res?.data?.getArticleBy) {
        setData(res?.data?.getArticleBy);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout {...props}>
      <PageFeed feeds={data} loading={loading} />
    </MainLayout>
  );
}

export default ArticleByStatus;
