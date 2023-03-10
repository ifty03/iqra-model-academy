import React from "react";
import SingleTeacher from "./SingleTeacher";

const AllTeachers = () => {
  return (
    <div className="background-image-allTeachers text-white mt-10">
      <div className="py-20">
        <p className="text-center mb-8 tracking-widest text-[1.1rem] font-medium">
          ইক্বরা মডেল একাডেমীতে যারা আছেন
        </p>
        <h1 className="md:text-[60px] text-5xl font-semibold tracking-widest text-center">
          শিক্ষকবৃন্দ
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-24 lg:max-w-5xl md:max-w-xl max-w-[300px] mx-auto mt-28">
          <SingleTeacher />
          <SingleTeacher />
          <SingleTeacher />
          <SingleTeacher />
          <SingleTeacher />
          <SingleTeacher />
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
