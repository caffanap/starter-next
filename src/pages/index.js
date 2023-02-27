import FeatureProfile from "@/features/FeatureProfile";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {

  return (
    <MainLayout title="Home Page" description="Home Page Description">
      <div className="flex flex-col space-y-2 justify-center items-center w-full h-screen">
        <div className="text-primary font-bold text-3xl">
          Next Js Starter
        </div>
        <FeatureProfile />
      </div>
    </MainLayout>
  )
}