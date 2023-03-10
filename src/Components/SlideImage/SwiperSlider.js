import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

// img import
import img1 from "../../Assets/image/img1.jpg";
import img2 from "../../Assets/image/img2.jpg";
import img3 from "../../Assets/image/img3.jpg";
import img4 from "../../Assets/image/img4.jpg";

// import required modules
import { EffectFade, Autoplay } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
