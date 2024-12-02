import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTranslation } from 'react-i18next'

const Faq = () => {
  const { t } = useTranslation()
  return (
    <section lang={t("lang")} id="faq" itemScope itemType="https://schema.org/Article" className="scroll-mt lg:mt-20 mt-10 lg:px-4 max-w-7xl m-auto relative">
      <img itemProp="image" className="moveTopToBottom absolute top-[20px] left-[80px] hidden lg:inline-block" src="/images/homepage/faq-top.svg" alt="faq top style" />
      <header className="max-w-[780px] m-auto">
        <h2 itemProp="headline" className="font-poppins text-center lg:text-[40px] leading-[60px] font-semibold text-2xl">{t("faqTitle")}</h2>
        <div itemProp="text" className="lg:text-lg text-gray-500 text-center lg:py-5 font-inter text-sm px-10 py-2">
          {t("faqSubTitle")}
        </div>
      </header>

      <div className="lg:px-36 px-4 lg:pt-10 font-inter">
        <div className="py-6 mx-auto bg-white border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-xl text-base font-medium text-left text-black rounded-lg">
                  <span itemProp="name" className="w-full">{t("faqQuestion1")}</span>
                  <ChevronDownIcon
                    className={`${open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel itemProp="text" className="lg:pl-4 lg:pr-24 lg:pt-4 m-auto py-4 px-4 lg:pb-2 text-sm lg:text-lg font-normal text-gray-500 ">
                  {t("faqAnswer1")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-6 mx-auto bg-white border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-xl text-base font-medium text-left text-black rounded-lg">
                  <span itemProp="name" className="w-full">{t("faqQuestion2")}</span>
                  <ChevronDownIcon
                    className={`${open ? "transform rotate-180" : ""
                      }  w-5 h-5 ml-10 lg:ml-10 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel itemProp="text" className="lg:pl-4 lg:pr-24 lg:pt-4 m-auto py-4 px-4 lg:pb-2 text-sm lg:text-lg font-normal text-gray-500 ">
                  {t("faqAnswer2")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-6 mx-auto bg-white border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-xl text-base font-medium text-left text-black rounded-lg">
                  <span itemProp="name" className="w-full">{t("faqQuestion3")}</span>
                  <ChevronDownIcon
                    className={`${open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel itemProp="text" className="lg:pl-4 lg:pr-24 lg:pt-4 m-auto py-4 px-4 lg:pb-2 text-sm lg:text-lg font-normal text-gray-500 ">
                  {t("faqAnswer3")}.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-6 mx-auto bg-white border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-xl text-base font-medium text-left text-black rounded-lg">
                  <span itemProp="name" className="w-full">{t("faqQuestion4")}</span>
                  <ChevronDownIcon
                    className={`${open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel itemProp="text" className="lg:pl-4 lg:pr-24 lg:pt-4 m-auto py-4 px-4 lg:pb-2  text-sm lg:text-lg font-normal text-gray-500 ">
                  {t("faqAnswer4")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-6 mx-auto bg-white border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-xl text-base font-medium text-left text-black rounded-lg">
                  <span itemProp="name" className="w-full">{t("faqQuestion5")}</span>
                  <ChevronDownIcon
                    className={`${open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel itemProp="text" className="lg:pl-4 lg:pr-24 lg:pt-4 m-auto py-4 px-4 lg:pb-2 text-sm lg:text-lg font-normal text-gray-500 ">
                  {t("faqAnswer5")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button itemProp="text" className="py-[18px] px-[32px] bg-[#155263] text-white rounded"><a href="mailto:contact@dokanepos.com">Have Questions?</a></button>
      </div>
    </section>
  );
};

export default Faq;
