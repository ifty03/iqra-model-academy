import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

const OverviewModal = ({ closeModal, isOpen, modalImg }) => {
  return (
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
              <div className="w-full backdrop-blur py-20">
                <Dialog.Panel className="w-full max-w-3xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Icon
                    onClick={closeModal}
                    className="text-4xl text-[#FF0000]/70 hover:text-[#FF0000]/80 cursor-pointer ml-auto"
                    icon="gridicons:cross-circle"
                  />

                  {modalImg ? (
                    <img
                      className="w-full"
                      src={modalImg}
                      alt="this is modal img"
                    />
                  ) : (
                    "no image here"
                  )}
                  {/* action btn */}
                  <div className="mt-4 flex w-full justify-end gap-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-primary/70 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 outline-none"
                      onClick={closeModal}
                    >
                      Got it, thanks!!
                    </button>
                    <a href={modalImg} download>
                      <button
                        type="button"
                        className="bg-primary rounded-md py-2 px-5 text-white hover:bg-primary/80"
                      >
                        Download
                      </button>
                    </a>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OverviewModal;
