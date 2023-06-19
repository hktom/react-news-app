import HomeTab from "@/components/HomeTab";
import SimpleLoading from "@/components/SimpleLoading";
import MainLayout from "@/layout/mainLayout";

function Index() {
  return (
    <MainLayout title="Today" description="The insights you need to keep ahead">
      {/* <SimpleLoading /> */}
      <HomeTab page1={<div>1</div>} page2={<div>2</div>} />
    </MainLayout>
  );
}

export default Index;
