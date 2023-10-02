import AdBanner from "@/components/AdBanner";
import FoodNewsLayout from "@/components/FoodNewsLayout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMainlayout from "@/components/HomeMainlayout";
import NatureNewsLayout from "@/components/NatureNewsLayout";
import NewsChannelsLayout from "@/components/NewsChannelsLayout";

export default function Home() {
  return (
    <main className="w-full  mx-auto">
      <Header />
      <div className="max-w-[1380px]  mx-auto">
        <AdBanner title="The Fresh Daily News" />
        <HomeMainlayout />
        <AdBanner className="flex-row-reverse" title="TECHNOLOGY Daily News" />
        <NatureNewsLayout />
        <NewsChannelsLayout />
        <FoodNewsLayout />
        <AdBanner title="FEATURED NEWS" />
      </div>
      <Footer />
    </main>
  );
}
