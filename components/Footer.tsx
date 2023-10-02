import { Facebook, Linkedin, Twitch, Twitter, Youtube } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-red-800 text-white mt-5 h-10 ">
      <div className="max-w-[1380px] mx-auto ">
        <div className="flex justify-between items-center px-4 py-2">
          <p className="text-center text-sm">
            © 2017 USNEWS. All Rights Reserved.
          </p>
          <div className="flex gap-x-2 items-center text-center cursor-pointer">
            <Twitter size={20} />
            <Facebook size={20} />
            <Linkedin size={20} />
            <Twitch size={20} />
            <Youtube size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
