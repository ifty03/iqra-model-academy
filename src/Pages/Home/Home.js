import React from "react";
import AllTeachers from "../../Components/AllTeachers/AllTeachers";
import FAQ from "../../Components/FAQ/FAQ";
import Hero from "../../Components/Hero/Hero";
import OurAim from "../../Components/OurAim/OurAim";
import Overview from "../../Components/Overview/Overview";
import SlideImage from "../../Components/SlideImage/SlideImage";

const Home = () => {
  return (
    <div className="mb-20">
      <Hero />
      <Overview />
      <OurAim />
      <AllTeachers />
      <FAQ />
      <SlideImage />
    </div>
  );
};

export default Home;
