import { Icon } from "@iconify/react";
import React from "react";
import logo from "../../Assets/image/iqra.png";

const Footer = () => {
  return (
    <div className="h-[270px] w-full bg-dark">
      <div className="max-w-sm mx-auto my-auto pt-16">
        <img className="w-24 mx-auto mb-5" src={logo} alt="" />
        <div className="flex justify-center gap-3 items-center text-white text-2xl">
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="mingcute:facebook-fill"
          />
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="ri:whatsapp-fill"
          />
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="mdi:twitter"
          />
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="uil:instagram-alt"
          />
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="ic:baseline-wordpress"
          />
          <Icon
            className="hover:text-secondary cursor-pointer"
            icon="mdi:linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
