import React from "react";
import { useTranslation } from 'react-i18next'
import { Dialog, Transition } from "@headlessui/react";
import { CancelIcon } from "./shared/Icons";
import DemoForm from "./DemoForm";
import { useState } from "react";
import {
  Fragment,
} from "react";


const Free = () => {
  const { t } = useTranslation()

  const [openDemo, setOpenDemo] = useState(false);
  const getDemo = () => {
    setOpenDemo(true)
  }
  const closeModal = () => {
    setOpenDemo(false)
  }

  const [confirmationModal, setConfirmationModal] = useState(false);
  const successModal = () => {
    setConfirmationModal(true);
  }
  return (
    <section lang={t("lang")} itemScope itemType="https://schema.org/Article" className="w-full bg-gradient-to-r from-[#D7F6FF] to-[#FFF1E4]  lg:px-36 lg:mt-20 mt-10 text-white text-center lg:text-left relative lg:py-20 py-10 p-4">
      <div className="lg:max-w-7xl m-auto ">
        <img
          itemProp="image"
          src="/icons/shape-left.svg"
          alt="shape left"
          className="moveTopToBottom absolute lg:w-16 w-12 left-[25px] bottom-[23px] lg:block hidden"
        />
        <img
          itemProp="image"
          src="/icons/shape-right.svg"
          alt="shape right"
          className="moveRightToLeft absolute lg:w-16 w-12 right-[95px] lg:top-[35px] lg:block hidden
        "
        />
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-9 grid grid-flow-row">
            <div itemProp="headline" className="font-poppins font-semibold lg:font-bold lg:text-[36px] lg:leading-[48px] text-2xl text-black">
              {t("freeTrialTile")}
            </div>
            <div itemProp="text" className="text-[#000F1A] mt-2 max-w-[400px] lg:m-0 m-auto pt-5 grid grid-rows-1 font-inter font-normal lg:text-base text-sm opacity-95">
              {t("freeTrialSubTile")}
            </div>
          </div>

          <div className="col-span-3 text-center" onClick={getDemo}>
            <button itemProp="text" className="rounded py-4 px-8 lg:py-[20px] lg:px-[36px] bg-[#155263] text-white lg:mt-10 mt-4 lg:ml-5 font-medium font-inter">
              {t("freeTrialButton")}
            </button>
          </div>
        </div>
      </div>

      {/* <!-- demo modal --> */}
      <Transition.Root
        show={openDemo}
        as={Fragment}
      >
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          open={openDemo}
          onClose={setOpenDemo}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-14 sm:align-middle sm:max-w-xl sm:w-auto md:max-w-5xl">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-0 sm:text-left">
                      <div className="flex items-center justify-between">
                        <Dialog.Title
                          as="h2"
                          className="text-xl font-medium leading-6 text-gray-900 font-poppins"
                        >
                          Contact Us
                        </Dialog.Title>
                        <button onClick={() => setOpenDemo(false)}>
                          <span>
                            <CancelIcon />
                          </span>
                        </button>
                      </div>
                      <hr className="my-2" />
                      <DemoForm closeModal={closeModal} successModal={successModal} />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <!-- success modal --> */}
      <Transition.Root
        show={confirmationModal}
        as={Fragment}
      >
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          open={confirmationModal}
          onClose={setConfirmationModal}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-14 sm:align-middle sm:max-w-xl sm:w-auto md:max-w-5xl">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-0 sm:text-left">
                      <div className="flex items-center justify-between">
                        <Dialog.Title
                          as="h2"
                          className="text-xl font-medium leading-6 text-gray-900 font-poppins"
                        >
                          Book a demo
                        </Dialog.Title>
                        <button onClick={() => setConfirmationModal(false)}>
                          <span>
                            <CancelIcon />
                          </span>
                        </button>
                      </div>
                      <hr className="my-2" />
                      <div className="max-w-[500px] m-auto text-center py-8">
                        <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
                        <p className="text-lg">We'll contact you shortly to schedule your free demo. If you have any questions please call us at 01313-715904</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default Free;
