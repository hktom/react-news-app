import SimpleLoading from "@/components/SimpleLoading";
import MainLayout from "@/layout/mainLayout";

function Index() {
  return (
    <MainLayout title="Feeds by authors">
      <SimpleLoading />
    </MainLayout>
  );
}

export default Index;
