import React, { useRef } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { CancelIcon } from "./shared/Icons";
import DemoForm from "./DemoForm";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// languages = languages.filter(i=> i.code != locale)
const MenuBar = () => {
  const [dropdowns, setDropdowns] = useState([
    {
      item: "Super Shop",
      link: "supershop"
     
    },
    {
      item: "Pharmacy",
      link: "/pharmacy"
      
    },
    {
      item: "Departmental & Grocery",
      link: "/departmental-grocery"
      
    },
    {
      item: "Food and Restaurant",
      link: "/food-restaurant"
      
    },
    {
      item: "Computer & Mobile",
      link: "/computer-mobile"
   
    },
    {
      item: "E-commerce",
      link: "/e-commerce"
     
    },
    {
      item: "Hadware & Electronic",
      link: "/hardware-electronic"
      
    },
    {
      item: "Clothing Store",
      link: "/clothing-store"
    
    },
    {
      item: "Fashion House",
      link: "/fashion-house"
   
    },
    {
      item: "Gym & Fitness",
      link: "/gym-fitness"
     
    },
    {
      item: "Footwear Shop",
      link: "/footwear-shop"
      
    },
    {
      item: "Jewellery",
      link: "/jewellery"
     
    },
  ]);
  const changeLanguage = (i18n, language) => {
    window.localStorage.setItem("MY_LANGUAGE", language);
    setLocale(language);
    i18n.changeLanguage(language);
  };
  let languages = [
    { code: "en", translateKey: "EN" },
    { code: "bn", translateKey: "বাং" },
  ];
  const [locale, setLocale] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = window.localStorage.getItem("MY_LANGUAGE");
      setLocale(lang);
    }
  }, []);
  // const locale = typeof window !== 'undefined' && window.localStorage.getItem('MY_LANGUAGE')
  const menu = useRef(null);
  const { t, i18n } = useTranslation();

  function handleMenuToggle(e) {
    e.preventDefault();
    menu.current.classList.toggle("hidden");
  }

  const [openDemo, setOpenDemo] = useState(false);
  const getDemo = () => {
    setOpenDemo(true);
  };
  const closeModal = () => {
    setOpenDemo(false);
  };
  const [confirmationModal, setConfirmationModal] = useState(false);
  const successModal = () => {
    setConfirmationModal(true);
  };

  return (
    <>
      {/* <!-- Navbar goes here --> */}

      <nav className="font-inter bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl px-2 m-auto">
          <div
            className="flex justify-between items-center
          "
          >
            {/* <!-- Website Logo --> */}

            <Link href="/" className="py-4 px-2">
              <img src="/images/logo.svg" width="130" height="30" alt="logo" />
            </Link>

            {/* <!-- Primary Navbar items --> */}

            <div className="font-medium font-poppins hidden md:flex items-center space-x-1 text-black text-base">
              <Link href="/#home" className="py-4 px-4 ">
                {t("home")}
              </Link>
              <li className="dropdown py-4 px-4">
                <p className="dropBtn">
                {t("services")} <i className="fa fa-angle-down"></i>
                </p>
                <div className="drop-content nav-items">
                  {dropdowns.map((dropdown, i) => (
                    <Link
                      className="dropdown-item"
                      key={i}
                      href={dropdown.link}
                      as={dropdown.linkHtml}
                    >
                      {dropdown.item}
                    </Link>
                  ))}
                </div>
              </li>
              <Link href="/features" as="/features" className="py-4 px-4 ">
                {t("features")}
              </Link>
              <Link href="/why-dokane" as="/why-dokane" className="py-4 px-4 ">
                {t("whyDokane")}
              </Link>
              <Link href="/blog" className="p-4">
              {t("blogs")}
              </Link>
              <Link
                href="https://www.youtube.com/@DokanEPOS"
                className="py-4 px-4"
              >
                {t("tutorial")}
              </Link>
              <Link href="/faq" as="/faq" className="py-4 px-4 ">
                {t("faq")}
              </Link>
            </div>

            {/* <!-- Secondary Navbar items --> */}

            <div className="flex justify-center items-center">
              <div className="text-white font-medium text-sm lg:inline-block hidden cursor-pointer">
                <p
                  className="py-[8px] px-[22px] bg-[#155263] rounded font-inter"
                  onClick={getDemo}
                >
                  {t("demoButton")}
                </p>
              </div>

              <div className="ml-3 border py-[5px] px-[16px] rounded">
                {languages.map(
                  (language) =>
                    language.code != locale && (
                      <button
                        className={
                          i18n.language === language.code
                            ? "active text-black"
                            : undefined
                        }
                        onClick={() => changeLanguage(i18n, language.code)}
                        key={language.code}
                      >
                        {language.translateKey}
                      </button>
                    )
                )}
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}

            <div className="md:hidden xl:hidden sm:active flex items-center">
              <button className="outline-none" onClick={handleMenuToggle}>
                <svg
                  className="w-6 h-6 text-black"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div
          className="hidden text-black font-normal text-sm text-center"
          ref={menu}
        >
          <ul className="xl:hidden md:hidden ">
            <li className="pb-4 pt-4">
              <a href="#home">{t("home")}</a>
            </li>

            <li className="pb-4">
              <a href="#feature">{t("features")}</a>
            </li>

            <li className="pb-4">
              <a href="#dokanE">{t("whyDokane")}</a>
            </li>

            <li className="pb-4">
              <a href="#pricing">{t("pricing")}</a>
            </li>

            <li className="pb-4">
              <a href="https://www.youtube.com/@DokanEPOS">{t("tutorial")}</a>
            </li>

            <li className="pb-4">
              <a href="#faq">{t("help")}</a>
            </li>
          </ul>
        </div>
      </nav>

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
                        <p className="text-lg">
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
    </>
  );
};

export default MenuBar;
