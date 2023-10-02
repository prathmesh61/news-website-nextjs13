import Image from "next/image";
import Link from "next/link";
import { newsChannel } from "@/utils/NewsChannel";
async function getData(Uri: string) {
  const res = await fetch(Uri);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const NewsChannelsLayout = async () => {
  const data: ApiResponseSources = await getData(
    process.env.NEXT_PUBLIC_API_URL_SOURCE!
  );

  return (
    <div className=" mt-10 px-4 w-full">
      <h1 className="font-bold text-xl">
        <span className="bg-cyan-500 text-white mx-2 font-light text-sm px-2">
          Trending Channels!
        </span>
        All News Channels
      </h1>
      <div className="flex flex-wrap gap-10 mt-4 items-start  whitespace-nowrap">
        {newsChannel.map((item: ChannelSources) => (
          <Link
            href={item.id}
            className="w-[200px] p-4 h-[140px]  mb-2 relative rounded-md cursor-pointer  "
            key={item.id}
          >
            <Image
              src={item.pic}
              fill
              alt={item.name}
              className="object-cover"
            />
            {/* <p className="text-lg ">{item.name}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsChannelsLayout;
