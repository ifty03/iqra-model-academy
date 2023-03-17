import { Icon } from "@iconify/react";
import React from "react";

const Overview = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-11/12 mx-auto md:-mt-24">
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="fluent:hat-graduation-12-filled"
        />
        <p className="text-center font-semibold group-hover:text-white">
          হিফজ রুটিন
        </p>
      </div>
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="material-symbols:menu-book-rounded"
        />
        <p className="text-center font-semibold group-hover:text-white">
          নাজেরা রুটিন
        </p>
      </div>
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="uil:book-reader"
        />
        <p className="text-center font-semibold group-hover:text-white">
          আমপারা রুটিন
        </p>
      </div>
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="ph:book-bookmark-fill"
        />
        <p className="text-center font-semibold group-hover:text-white">
          শিশু শ্রেণি রুটিন
        </p>
      </div>
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="ph:bowl-food-fill"
        />
        <p className="text-center font-semibold group-hover:text-white">
          খাবার রুটিন
        </p>
      </div>
      <div className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
          icon="fluent:form-multiple-48-filled"
        />
        <p className="text-center font-semibold group-hover:text-white">
          ভর্তি ফরম
        </p>
      </div>
    </div>
  );
};

export default Overview;
