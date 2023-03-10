import React from "react";
import Hero from "../../Components/Hero/Hero";
import OurAim from "../../Components/OurAim/OurAim";
import Overview from "../../Components/Overview/Overview";

const Home = () => {
  return (
    <div className="mb-20">
      <Hero />
      <Overview />
      <OurAim />
    </div>
  );
};

export default Home;
