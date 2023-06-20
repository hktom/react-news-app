import PageFeed from "@/components/homeTabPage/pageFeed";
import { ArticleFields } from "@/helpers/graphqlField";
import MainLayout from "@/layout/mainLayout";
import { apolloQuery } from "@/utils/apollo";
// import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IArticle } from "@/utils/interface";
// import { IReducer } from "@/utils/rootReducer";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
  id?: string;
  taxonomies?: "category" | "source" | "author" | undefined | null;
  value?: string;
  description?: string;
}

function ArticleByStatus(props: IProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IArticle[]>([]);

  const getHistories = async () => {
    setLoading(true);
    try {
      let query = "{";

      if (props.taxonomies) {
        query += `
        articlesBy:GetArticleByTaxonomies(key:"${props.taxonomies!}"){ 
          ${ArticleFields} 
        } 
        `;
      } else {
        query += `articlesBy:getArticleBy(key:"${props.id}", value:"${props.value}"){ 
          ${ArticleFields} 
         } `;
      }

      query += "}";

      const res = await apolloQuery(query);

      if (res?.data?.articlesBy) {
        setData(res?.data?.articlesBy);
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
