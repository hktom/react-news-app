import ArticleByStatus from "@/components/ArticleBy";

function Index() {
  return (
    <ArticleByStatus title="Feeds by categories" taxonomies={"category"} />
  );
}

export default Index;
