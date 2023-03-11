import { Icon } from "@iconify/react";
import React from "react";
import logo from "../../Assets/image/logo.png";

const Hero = () => {
  return (
    <div className="background-image-hero border-b-8 border-[#F7DC79] md:pb-40 pb-10">
      <div className="flex justify-center items-center w-full md:gap-5 gap-3 mx-auto py-2">
        <div className="h-2 bg-secondary lg:w-[40%] md:w-[35%] w-[14%]"></div>
        <p className="text-dark w-fit font-semibold text-sm">
          একটি দ্বিনি শিক্ষা প্রতিষ্ঠান
        </p>
        <div className="h-2 bg-secondary lg:w-[40%] md:w-[35%] w-[14%]"></div>
      </div>
      <img
        className="w-[30%] mx-auto my-5"
        src={logo}
        alt="this is iqra model logo"
      />
      <h1 className="lg:text-[5.3rem] md:text-[4rem] text-4xl font-semibold text-center text-primary lg:mt-10 md:mt-5">
        ইক্বরা মডেল একাডেমিতে
      </h1>
      <h2 className="lg:text-[3.7rem] md:text-[3rem] text-2xl font-semibold text-center text-dark lg:mt-16 md:mt-10 md:mb-7 lg:mb-10">
        আপনাকে স্বাগতম
      </h2>

      <a
        className="w-fit py-3 px-5 bg-primary rounded-md my-3 text-white text-sm mx-auto block hover:scale-110 duration-300"
        target={"_blank"}
        href="https://drive.google.com/file/d/1OK7HZxbK62qcsmg89FSge1Mk9d97zCHA/view"
      >
        ইক্বরা মডেল একাডেমী সম্পর্কে জানুন
      </a>

      <button className="w-fit py-3 px-5 bg-[#FF0000] rounded-md my-3 text-white text-sm mx-auto hover:scale-110 duration-300 flex gap-2">
        <Icon className="text-lg" icon="mdi:bell-notification" /> নোটিশ
      </button>
    </div>
  );
};

export default Hero;
