import Image from "next/image";
import { OverlayShadow } from "@/components/common/OverlayShadow";
import OverlayContent from "./common/OverlayContent";
import { BASE_URL } from "@/utils/Api";
async function getData(Uri: string) {
  const res = await fetch(Uri);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomeMainlayout = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const category = searchParams.category || "business";
  const data: ApiResponse = await getData(
    `${BASE_URL}/top-headlines/category/${category}/us.json`
  );

  return (
    <div className="mt-10 px-4">
      <h1 className="font-bold text-xl">
        <span className="bg-yellow-500 text-white mx-2 font-light text-sm px-2">
          HOT
        </span>
        World NEWS
      </h1>
      <div className="grid mt-4 gap-5 grid-cols-1  lg:grid-cols-4 lg:grid-rows-2 lg:w-[1050px] lg:h-[600px] h-[700px] md:w-[750px] w-[400px]  px-3">
        <div className="lg:col-span-2 lg:row-span-2 relative w-auto  col-span-1 row-span-2 bg-zinc-500 ">
          {data.articles.slice(0, 1).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-yellow-500" />
              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="lg:col-span-1 lg:row-span-1 col-span-1 row-span-2 bg-zinc-500 relative w-auto">
          {data.articles.slice(1, 2).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-yellow-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="lg:col-span-1 lg:row-span-1 col-span-1 row-span-2 bg-zinc-500 relative w-auto">
          {data.articles.slice(3, 4).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-yellow-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="lg:col-span-2 lg:row-span-1 col-span-1 row-span-2 bg-zinc-500 relative w-auto">
          {data.articles.slice(2, 3).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-yellow-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMainlayout;

// const OverlayShadow = () => {
//   return (
//     <div className="absolute inset-0 opacity-30 z-10 bg-gradient-to-b from-gray-700 via-gray-900 to-black " />
//   );
// };
