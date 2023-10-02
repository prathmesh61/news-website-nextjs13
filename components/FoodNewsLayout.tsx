import Image from "next/image";
import { OverlayShadow } from "./common/OverlayShadow";
import OverlayContent from "./common/OverlayContent";

async function getData(Uri: string) {
  const res = await fetch(Uri);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const FoodNewsLayout = async () => {
  const data: ApiResponse = await getData(
    process.env.NEXT_PUBLIC_API_URL_HEALTH!
  );
  return (
    <div className="mt-10 px-4">
      <h1 className="font-bold text-xl">
        <span className="bg-violet-500 text-white mx-2 font-light text-sm px-2">
          Fresh
        </span>
        Food NEWS
      </h1>
      <div className="flex mt-4 items-start gap-5 flex-wrap">
        <div className="lg:w-[300px] relative w-screen h-[200px] bg-zinc-500">
          {data.articles.slice(0, 1).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-purple-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="lg:w-[300px] relative w-screen h-[200px] bg-zinc-500">
          {data.articles.slice(2, 3).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-purple-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="lg:w-[300px] relative  w-screen h-[200px] bg-zinc-500">
          {data.articles.slice(3, 4).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-purple-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodNewsLayout;
