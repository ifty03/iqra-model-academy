import { Icon } from "@iconify/react";
import React from "react";

const TopBar = () => {
  return (
    <div className="lg:px-24 md:px-10 px-5 py-3 bg-primary text-white flex justify-between items-center">
      <div className="flex items-center gap-5 text-sm">
        <div className="flex items-center gap-2">
          <Icon className="text-lg" icon="material-symbols:add-call" />
          <p>+880 1993 655 082</p>
        </div>
        <div className="md:flex items-center gap-2 hidden">
          <Icon className="text-lg" icon="ic:round-email" />

          <p>iqramodelacademychitoshi@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-5 text-lg">
        <Icon
          className="hover:text-secondary cursor-pointer"
          icon="mingcute:facebook-fill"
        />
        <Icon
          className="hover:text-secondary cursor-pointer"
          icon="ri:whatsapp-fill"
        />
      </div>
    </div>
  );
};

export default TopBar;
