import React from "react";
import SwiperSlider from "./SwiperSlider";

const SlideImage = () => {
  return (
    <div className="bg-primary w-full mt-20 md:py-20 py-5">
      <div className="md:w-10/12 w-11/12 mx-auto lg:h-[500px] rounded-2xl overflow-hidden">
        <SwiperSlider />
      </div>
    </div>
  );
};

export default SlideImage;
