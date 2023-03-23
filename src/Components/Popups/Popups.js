import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";

const Popups = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-full backdrop-blur flex justify-center items-center h-screen">
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden text-left align-middle transition-all rounded-2xl  bg-white px-5 pb-5 pt-3 shadow-lg ">
                    <Icon
                      onClick={closeModal}
                      className="text-3xl text-[#FF0000]/70 hover:text-[#FF0000]/80 cursor-pointer ml-auto"
                      icon="gridicons:cross-circle"
                    />
                    <div className="mt-1">
                      <div class="flex items-center gap-4">
                        <span class="shrink-0 rounded-full bg-blue-400 p-2 text-[#FF0000]/80">
                          <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </span>

                        <p class="font-medium sm:text-lg text-[#FF0000]/80">
                          New message!
                        </p>
                      </div>

                      <p class="mt-4 text-gray-500">
                        ইক্বরা মডেল একাডেমীতে আরবীর সাথে স্কুলে পরীক্ষা দেয়ার
                        উপযোগী করে তোলা হয়। হাতের সুন্দর লেখার পাশাপাশি ইংরেজি
                        স্পোকেন এর উপর ও থাকছে গুরুত্বারোপ। থাকছে কম্পিউটার
                        প্রশিক্ষণও।
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-primary/70 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 outline-none"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popups;
