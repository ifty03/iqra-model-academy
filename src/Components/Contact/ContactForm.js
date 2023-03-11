import React from "react";

const ContactForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const message = e.target.message.value;
    const formData = { name, email, number, message };
    console.log(formData);
  };
  return (
    <div>
      <div className="w-fit mx-auto mt-10 md:mt-0">
        <h1 className="text-2xl font-semibold mb-2 text-lightGray">
          আমাদের সথে যোগাযোগ করুন
        </h1>
        <div className="w-[30%] h-[5px] bg-secondary"></div>
      </div>
      <form onSubmit={handelSubmit} className="mt-10 max-w-md mx-auto">
        <input
          className="w-full block p-3 outline-none bg-extraLightGray rounded-xl mb-6"
          placeholder="Your Name"
          name="name"
          type="text"
          required
        />
        <input
          className="w-full block p-3 outline-none bg-extraLightGray rounded-xl mb-6"
          placeholder="Your email"
          name="email"
          type="email"
          required
        />
        <input
          className="w-full block p-3 outline-none bg-extraLightGray rounded-xl mb-6"
          placeholder="Type your number"
          name="number"
          type="number"
          required
        />
        <textarea
          className="w-full block p-3 outline-none bg-extraLightGray rounded-xl mb-6"
          placeholder="Type your message"
          name="message"
          rows={5}
          autoComplete="off"
          type="text"
          required
        />
        <input
          className="cursor-pointer py-3 w-full bg-secondary rounded-xl font-semibold text-white border border-secondary hover:text-secondary hover:bg-white transition-colors duration-300"
          type="submit"
          value="বার্তা পাঠান"
        />
      </form>
    </div>
  );
};

export default ContactForm;
