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

const NatureNewsLayout = async () => {
  const data: ApiResponse = await getData(
    process.env.NEXT_PUBLIC_API_URL_GENERAL!
  );
  return (
    <div className="flex flex-col items-start mt-10 px-4">
      <h1 className="font-bold text-xl">
        <span className="bg-emerald-500 text-white mx-2 font-light text-sm px-2">
          Right Now!
        </span>
        Nature NEWS
      </h1>
      <div className="mt-4 grid gap-5 grid-cols-1  lg:grid-cols-4 lg:grid-rows-4 lg:w-[1000px] lg:h-[600px] h-[700px] md:w-[750px] w-[400px] px-3">
        <div className="col-span-2 relative w-auto row-span-2 lg:col-span-4 lg:row-span-2">
          {data.articles.slice(0, 1).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-emerald-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="col-span-2 row-span-2 relative w-auto  lg:col-span-2 lg:row-span-1 bg-zinc-500">
          {data.articles.slice(1, 2).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-emerald-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="col-span-2 row-span-2 relative w-auto lg:col-span-2 lg:row-span-1 bg-zinc-500">
          {data.articles.slice(2, 3).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-emerald-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="col-span-2 row-span-2 relative w-auto lg:col-span-2 lg:row-span-1 bg-zinc-500">
          {data.articles.slice(3, 4).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-emerald-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
        <div className="col-span-2 row-span-2 relative w-auto lg:col-span-2 lg:row-span-1 bg-zinc-500">
          {data.articles.slice(5, 6).map((item: Article) => (
            <>
              <Image
                src={item.urlToImage}
                alt={item.title}
                className="object-cover"
                fill
              />
              <OverlayContent item={item} className="bg-emerald-500" />

              <OverlayShadow />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NatureNewsLayout;
