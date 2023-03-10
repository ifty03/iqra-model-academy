import React from "react";
import image from "../../Assets/image/demoTeacher.png";

const SingleTeacher = () => {
  return (
    <div className="group md:max-w-[250px] max-w-[300px]">
      <div className="w-full relative">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover sm:opacity-100 lg:w-[160px] md:w-[140px] sm:w-[220px] w-[180px] mx-auto lg:-mt-[77px] md:-mt-[56px] sm:-mt-[137px] -mt-[97px]"
          src={image}
          alt="round bg img"
        />
        <div className="w-[100%] mb-3 h-5 rounded-b-xl  bg-gradient-to-r from-primary/50 to-[#F7DC79]"></div>
        <div className="w-[90%] mx-auto mb-3 h-5 rounded-b-xl  bg-gradient-to-r from-primary/50 to-[#F7DC79]"></div>
        <div className="w-[80%] mx-auto mb-3 h-5 rounded-b-xl  bg-gradient-to-r from-primary/50 to-[#F7DC79]"></div>
      </div>

      <div className="img-bottom  bg-gradient-to-r from-[#0f3837] to-[#1f5260] ">
        <div className="max-w-[150px] mx-auto py-3">
          <h4 className="text-center text-white">Eyakub Habib</h4>
          <p className="text-xs text-[#F7DC79] text-center">Principal</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
