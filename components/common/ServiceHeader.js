import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";
import DemoForm from "../DemoForm";
import { CancelIcon } from "../shared/Icons";
// import Typewriter from 'typewriter-effect';
import { useTypewriter } from "react-simple-typewriter";

const ServiceHeader = ({ header,words }) => {
  // const [myNewArray, setMyNewArray] = useState([]);
  const [text] = useTypewriter({
    words,
    loop: 0,
  });
  const { t } = useTranslation();
  const [openDemo, setOpenDemo] = useState(false);
  const getDemo = () => {
    setOpenDemo(true);
  };
  const closeModal = () => {
    setOpenDemo(false);
  };

  // useEffect(() => {
  //   myArray && myArray.length && setMyNewArray(myArray);
  // }, [myArray])

  const [confirmationModal, setConfirmationModal] = useState(false);
  const successModal = () => {
    setConfirmationModal(true);
  };

  // const myArray = ["1", "2"]

  return (
    <section
      id="home"
      itemScope
      itemType="https://schema.org/Article"
      className="background bg-gradient-to-r from-[#D7F6FF] to-[#FFF1E4] lg:h-auto sm:h-auto"
    >
      <div className="lg:grid grid-rows-1 max-w-7xl m-auto px-4">
        <div className="lg:flex items-center grid-cols-12 pt-[62px]">
          <div className="lg:col-span-7">
            <div className=" lg:m-0">
              <h1
                itemProp="name"
                className="lg:pt-10 pt-24 pb-5 lg:leading-[58px] font-poppins text-[#000F1A] font-bold lg:text-[40px] text-xl text-center lg:text-left grid lg:grid-rows-1 sm:grid-rows uppercase"
              >
                {header.headerTitle}
              </h1>

              <div
                itemProp="description"
                className="px-6 max-w-[600px] m-auto lg:m-0  lg:px-0 text-center font-inter lg:text-left text-[#4F4F4F] text-sm lg:text-lg lg:font-normal"
              >
                {header.headerSubTitle}
              </div>

              <div className="flex justify-center lg:justify-start pt-[40px] font-poppins uppercase text-[#000F1A] font-bold lg:text-[25px] text-sm">
                <h3 className="mr-2">{header.headerText}</h3>
                {/* <Typewriter
                options={{
                  // strings: Array.isArray(myArray) ? [...myArray] : [],
                  strings: ['Growth','production'],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
                <span className="uppercase">{text}</span>
              </div>
            </div>

            <div className="py-10 flex lg:justify-start justify-center font-poppins lg:space-x-3 text-white font-normal text-sm lg:pt-10">
              <div className="py-3 px-4 mr-2 lg:py-4 lg:px-8 rounded bg-[#155263]">
                <a itemProp="url" href="#">
                  {t("priceButton")}
                </a>
              </div>
              <div
                onClick={getDemo}
                className="rounded text-black border border-black py-3 px-4 mr-2 lg:py-4 lg:px-8"
              >
                <button itemProp="text">{t("liveDemoButton")} &gt;</button>
              </div>
            </div>
          </div>
          <div className="col-span-5 hidden lg:inline-block">
            {/* <img
              className="w-min absolute right-0 top-40"
              alt=""
              src={headerBg.src}
            /> */}
            <img
              itemProp="image"
              alt="hero image"
              src={header.img}
              width="624"
              height="426"
            />
          </div>
        </div>
      </div>

      {/* <!-- demo modal --> */}
      <Transition.Root show={openDemo} as={Fragment}>
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
                          Book a demo
                        </Dialog.Title>
                        <button onClick={() => setOpenDemo(false)}>
                          <span>
                            <CancelIcon />
                          </span>
                        </button>
                      </div>
                      <hr className="my-2" />
                      <DemoForm
                        closeModal={closeModal}
                        successModal={successModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <!-- success modal --> */}
      <Transition.Root show={confirmationModal} as={Fragment}>
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
                          itemProp="text"
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
                        <h2 className="text-4xl font-bold mb-4" itemProp="text">
                          Thank You!
                        </h2>
                        <p className="text-lg" itemProp="text">
                          We'll contact you shortly to schedule your free demo.
                          If you have any questions please call us at
                          01313-715904
                        </p>
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

export default ServiceHeader;
