import Link from "next/link";
import React from "react";

type Props = {
  item: Article;
  className?: string;
};

const OverlayContent = ({ item, className }: Props) => {
  return (
    <Link
      href={item.url}
      className="absolute px-4 bottom-0 z-10 cursor-pointer"
      key={item.title}
    >
      <p className="font-light line-clamp-1 text-white text-sm">{item.title}</p>
      <button
        className={`${className} rounded-md px-4 font-light my-2 text-sm  text-white w-fit cursor-pointer hover:opacity-90`}
      >
        Read More
      </button>
    </Link>
  );
};

export default OverlayContent;
