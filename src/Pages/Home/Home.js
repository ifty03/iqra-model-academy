import React from "react";
import AllTeachers from "../../Components/AllTeachers/AllTeachers";
import Contact from "../../Components/Contact/Contact";
import FAQ from "../../Components/FAQ/FAQ";
import Hero from "../../Components/Hero/Hero";
import OurAim from "../../Components/OurAim/OurAim";
import Overview from "../../Components/Overview/Overview";
import SlideImage from "../../Components/SlideImage/SlideImage";

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <Overview />
      <OurAim />
      {/* <AllTeachers /> */}
      <FAQ />
      <SlideImage />
      <Contact />
    </div>
  );
};

export default Home;
