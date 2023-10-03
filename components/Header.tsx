import { headerLinks } from "@/utils/Links";
import Link from "next/link";
import { Search, UserCircle, Zap } from "lucide-react";
const Header = () => {
  return (
    <div className="bg-red-800 w-full text-white">
      <div className="max-w-[1380px] mx-auto flex items-center   gap-x-8  p-2 ">
        <h2 className="bg-yellow-500 px-2  text-slate-100 rounded-md">
          USNEWS
        </h2>
        {headerLinks.map((link, index) => (
          <Link
            key={index}
            href={`?category=${link.name}`}
            className="font-light text-sm hidden lg:block"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex item-center gap-x-2 border-1 flex-1 border-zinc-300 rounded-xl px-4 justify-end">
          <UserCircle size={20} />
          <Search size={20} />
          <Zap size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
