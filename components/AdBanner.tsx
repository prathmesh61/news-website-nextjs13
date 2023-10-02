import Image from "next/image";
async function getData(Uri: string) {
  const res = await fetch(Uri);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
type Props = {
  className?: string;
  title?: string;
  content?: boolean;
};
const AdBanner = async ({ className, title, content = true }: Props) => {
  const data: ApiResponse = await getData(
    process.env.NEXT_PUBLIC_API_URL_TECH!
  );
  const sliceData = data.articles.slice(5, 6);

  return (
    <div className={`flex items-start gap-x-4 mt-10 px-4 ${className}`}>
      {content && (
        <div className="flex-1 lg:basis-1/3">
          <h1 className="text-3xl font-extrabold uppercase">{title}</h1>
          <button className="rounded-md px-6 font-light my-2 bg-zinc-600 text-white w-fit cursor-pointer hover:bg-zinc-500">
            Read More
          </button>
        </div>
      )}
      {sliceData.map((item: Article) => (
        <div
          className={`${
            content ? "lg:basis-2/3" : "w-full"
          } h-24 flex-1  relative shadow-xl`}
        >
          <Image
            src={item.urlToImage}
            alt="News"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AdBanner;
