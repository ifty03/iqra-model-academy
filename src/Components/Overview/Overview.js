import { Icon } from "@iconify/react";
import React from "react";

const Overview = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-11/12 mx-auto md:-mt-24">
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="fluent:hat-graduation-12-filled"
        />
        <p className="text-center font-semibold">হিফজ রুটিন</p>
      </div>
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="material-symbols:menu-book-rounded"
        />
        <p className="text-center font-semibold">নাজেরা রুটিন</p>
      </div>
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="uil:book-reader"
        />
        <p className="text-center font-semibold">আমপারা রুটিন</p>
      </div>
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="ph:book-bookmark-fill"
        />
        <p className="text-center font-semibold">শিশু শ্রেণি রুটিন</p>
      </div>
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="ph:bowl-food-fill"
        />
        <p className="text-center font-semibold">খাবার রুটিন</p>
      </div>
      <div className=" py-10 text-secondary bg-[#f7f5ed] border-x-2 border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer">
        <Icon
          className="text-5xl mb-7 text-center w-fit mx-auto hover:text-white"
          icon="fluent:form-multiple-48-filled"
        />
        <p className="text-center font-semibold">ভর্তি ফরম</p>
      </div>
    </div>
  );
};

export default Overview;
