import { Icon } from "@iconify/react";
import React, { useState } from "react";
import OverviewModal from "./OverviewModal";
import hifz from "../../Assets/image/overview/Heff Rutin (1).jpg";
import najera from "../../Assets/image/overview/Heff Rutin (1).jpg";
import ampara from "../../Assets/image/overview/ampara.jpg";
import sishu from "../../Assets/image/overview/shishu class.jpg";
import khabar from "../../Assets/image/overview/khabar ruitn.jpg";

const Overview = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(hifz);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-11/12 mx-auto md:-mt-24">
        <div
          onClick={async () => {
            await setModalImg(hifz);
            openModal();
          }}
          className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
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
        <div
          onClick={() => {
            setModalImg(ampara);
            openModal();
          }}
          className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          <Icon
            className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
            icon="uil:book-reader"
          />
          <p className="text-center font-semibold group-hover:text-white">
            আমপারা রুটিন
          </p>
        </div>
        <div
          onClick={() => {
            setModalImg(sishu);
            openModal();
          }}
          className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          <Icon
            className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
            icon="ph:book-bookmark-fill"
          />
          <p className="text-center font-semibold group-hover:text-white">
            শিশু শ্রেণি রুটিন
          </p>
        </div>
        <div
          onClick={() => {
            setModalImg(khabar);
            openModal();
          }}
          className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          <Icon
            className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
            icon="ph:bowl-food-fill"
          />
          <p className="text-center font-semibold group-hover:text-white">
            খাবার রুটিন
          </p>
        </div>
        <a
          className=" py-10 group text-secondary bg-[#f7f5ed] border-x border-[#F7DC79] hover:bg-primary transition-colors duration-500 cursor-pointer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJCK5AI8IupDqubM88pvs4Yy0GdYkA7fiA7Lu5kuaQp7_CMQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Icon
              className="text-5xl mb-7 text-center w-fit mx-auto group-hover:text-white"
              icon="fluent:form-multiple-48-filled"
            />
            <p className="text-center font-semibold group-hover:text-white">
              ভর্তি ফরম
            </p>
          </div>
        </a>
      </div>
      <OverviewModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalImg={modalImg}
      />
    </>
  );
};

export default Overview;
