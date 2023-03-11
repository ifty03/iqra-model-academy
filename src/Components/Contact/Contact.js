import { Icon } from "@iconify/react";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto  my-20">
      <h1 className="md:text-5xl text-3xl font-semibold tracking-wide text-lightGray text-center mb-10">
        আমাদের সাথে থাকুন
      </h1>
      <p className="text-lightGary md:text-lg text-lightGray  font-medium text-center mb-16">
        ইক্বরা মডেল একাডেমী - একটি দ্বীনি শিক্ষা প্রতিষ্ঠান
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1367369899344!2d91.00306091428523!3d23.16520901679661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37549168f4a452f5%3A0xe5349cf413261802!2sIqra%20Model%20Academy%20Chitoshi!5e0!3m2!1sen!2sbd!4v1678506116902!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="space-y-4 text-sm mt-5">
            <p>যোগাযোগ:</p>
            <div className="flex items-center gap-5">
              <Icon
                className="text-2xl text-secondary"
                icon="material-symbols:location-on"
              />
              <p className="text-lightGray">
                চিতোষী বাজার ( কেন্দ্রীয় জামে মসজিদ), শাহরাস্তি, চাঁদপুর।
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Icon
                className="text-2xl text-secondary"
                icon="material-symbols:add-call"
              />
              <p className="text-lightGray">01993655081, 01993655082</p>
            </div>
            <div className="md:flex items-center gap-5 hidden">
              <Icon className="text-2xl text-secondary" icon="ic:round-email" />

              <p className="text-lightGray">
                iqramodelacademychitoshi@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
