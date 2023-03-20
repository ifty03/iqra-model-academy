import React from "react";
import modalImg from "../../Assets/image/overview/Heff Rutin.webp";

const OverviewModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur z-50">
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-2xl pt-[80vh]">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex  justify-end p-5 border-b border-solid border-lightGray/30 rounded-t">
                    <button
                      className="px-2  ml-auto bg-[#FF0000] rounded-full border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-white text-2xl outline-none focus:outline-none -mt-1">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img className="w-full h-full" src={modalImg} alt="" />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-lightGray/30 rounded-b">
                    <button
                      className="text-white bg-[#FF0000] font-bold uppercase px-6 py-3 text-xs rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close!
                    </button>
                    <button
                      className="bg-primary text-white  font-bold uppercase text-xs px-6 py-3 rounded-md mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        </div>
      ) : null}
    </>
  );
};

export default OverviewModal;
