import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useState } from "react";
const ServiceFeature = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });

  const handleClick = (value) => {
    setActiveTab(value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({ fade: "fade-in" });
      }

      setActiveTab((prevState) => {
        if (prevState === 5) {
          return 1;
        }
        return prevState + 1;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeTab]);

  return (
    <section
      id="feature"
      itemScope
      itemType="https://schema.org/Article"
      className="relative px-4 lg:mt-20 mt-10 overflow-x-hidden"
    >
      <img
        itemProp="image"
        className="moveTopToBottom absolute -z-1 top-0 left-[72px] lg:absolute lg:-z-1  lg:inline-block hidden"
        alt="feature top style"
        src="/images/homepage/feature-top.svg"
      />
      <header
        itemProp="name"
        className="font-poppins text-center lg:text-[40px] leading-[60px] lg:grid lg:grid-rows-1 lg:grid-flow-col lg:font-semibold text-2xl font-semibold"
      >
        {t("featureTitle")}
      </header>
      <div
        itemProp="description"
        className="lg:text-lg max-w-[600px] lg:w-dashboard text-gray-500 text-center text-sm font-normal lg:py-5 pt-2 font-inter grid grid-rows-1 w-76 m-auto"
      >
        {t("featureSubTitle")}
      </div>

      <div className="lg:grid lg:grid-rows-1 lg:max-w-7xl m-auto relative">
        <img
          itemProp="image"
          className="absolute -z-1 bottom-0 right-[-55px] w-24 lg:absolute lg:-z-1 lg:w-44 lg:h-20 lg:inline-block hidden"
          alt="cash machine"
          src="/images/homepage/cash-machine.svg"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:my-20">
          <div className="grid lg:grid-cols-1 grid-cols-2 gap-x-4 lg:mr-28 mr-0 py-4 mt-4 lg:mt-0 lg:py-0 lg-px-0">
            <div
              className={`${
                activeTab === 1
                  ? "bg-white shadow-[0_10px_30px_rgba(0,112,186,0.2)]"
                  : "bg-[#F0F0F0]"
              } mb-5 w-card h-10 lg:w-full lg:h-20 cursor-pointer font-poppins lg:text-lg text-sm  flex lg:py-7 lg:mt-0 lg:px-5 text-gray-500 font-bold`}
              onClick={() => handleClick(1)}
            >
              <div
                className={`${
                  activeTab === 1 ? "bg-[#FFA755]" : ""
                } rounded-full border-2 border-gray-500  lg:h-5 lg:w-5 w-3 h-3 mr-2 ml-3 mt-2 lg:mt-0.5 lg:mr-4`}
              ></div>
              <span className="mt-1 lg:mt-0" itemProp="text">
                {t("posTerminal")}
              </span>
            </div>
            <div
              className={`${
                activeTab === 2
                  ? "bg-white shadow-[0_10px_30px_rgba(0,112,186,0.2)]"
                  : "bg-[#F0F0F0]"
              } mb-5 w-card h-10 lg:w-full lg:h-20 cursor-pointer font-poppins lg:text-lg text-sm  flex lg:py-7 lg:mt-0 lg:px-5 text-gray-500 font-bold`}
              onClick={() => handleClick(2)}
            >
              <div
                className={`${
                  activeTab === 2 ? "bg-[#FFA755]" : ""
                } rounded-full border-2 border-gray-500  lg:h-5 lg:w-5 w-3 h-3 mr-2 ml-3 mt-2 lg:mt-0.5 lg:mr-4`}
              ></div>
              <span className="mt-1 lg:mt-0" itemProp="text">
                {t("addProducts")}
              </span>
            </div>
            <div
              className={`${
                activeTab === 3
                  ? "bg-white shadow-[0_10px_30px_rgba(0,112,186,0.2)]"
                  : "bg-[#F0F0F0]"
              } mb-5 w-card h-10 lg:w-full lg:h-20 cursor-pointer font-poppins lg:text-lg text-sm  flex lg:py-7 lg:mt-0 lg:px-5 text-gray-500 font-bold`}
              onClick={() => handleClick(3)}
            >
              <div
                className={`${
                  activeTab === 3 ? "bg-[#FFA755]" : ""
                } rounded-full border-2 border-gray-500  lg:h-5 lg:w-5 w-3 h-3 mr-2 ml-3 mt-2 lg:mt-0.5 lg:mr-4`}
              ></div>
              <span className="mt-1 lg:mt-0" itemProp="text">
                {t("productList")}
              </span>
            </div>
            <div
              className={`${
                activeTab === 4
                  ? "bg-white shadow-[0_10px_30px_rgba(0,112,186,0.2)]"
                  : "bg-[#F0F0F0]"
              } mb-5 w-card h-10 lg:w-full lg:h-20 cursor-pointer font-poppins lg:text-lg text-sm  flex lg:py-7 lg:mt-0 lg:px-5 text-gray-500 font-bold`}
              onClick={() => handleClick(4)}
            >
              <div
                className={`${
                  activeTab === 4 ? "bg-[#FFA755]" : ""
                } rounded-full border-2 border-gray-500  lg:h-5 lg:w-5 w-3 h-3 mr-2 ml-3 mt-2 lg:mt-0.5 lg:mr-4`}
              ></div>
              <span className="mt-1 lg:mt-0" itemProp="text">
                {t("returnSale")}
              </span>
            </div>
            <div
              className={`${
                activeTab === 5
                  ? "bg-white shadow-[0_10px_30px_rgba(0,112,186,0.2)]"
                  : "bg-[#F0F0F0]"
              } mb-5 w-card h-10 lg:w-full lg:h-20 cursor-pointer font-poppins lg:text-lg text-sm  flex lg:py-7 lg:mt-0 lg:px-5 text-gray-500 font-bold`}
              onClick={() => handleClick(5)}
            >
              <div
                className={`${
                  activeTab === 5 ? "bg-[#FFA755]" : ""
                } rounded-full border-2 border-gray-500  lg:h-5 lg:w-5 w-3 h-3 mr-2 ml-3 mt-2 lg:mt-0.5 lg:mr-4`}
              ></div>
              <span className="mt-1 lg:mt-0" itemProp="text">
                {t("customerReport")}
              </span>
            </div>
          </div>
          <div className="relative">
            {activeTab === 1 && (
              <img
                itemProp="image"
                className={`${fadeProp.fade} w-dashboardPic lg:ml-0`}
                src="/Pictures/pos-terminal.png"
                alt="pos terminal"
                width="697"
                height="532"
              />
            )}
            {activeTab === 2 && (
              <img
                itemProp="image"
                className={`${fadeProp.fade} w-dashboardPic lg:ml-0`}
                src="/Pictures/add-products.png"
                alt="add product"
                width="697"
                height="532"
              />
            )}
            {activeTab === 3 && (
              <img
                itemProp="image"
                className={`${fadeProp.fade} w-dashboardPic lg:ml-0`}
                src="/Pictures/product-list.png"
                alt="product list"
                width="697"
                height="533"
              />
            )}
            {activeTab === 4 && (
              <img
                itemProp="image"
                className={`${fadeProp.fade} w-dashboardPic lg:ml-0`}
                src="/Pictures/return-sale.png"
                alt="return sale"
                width="697"
                height="532"
              />
            )}
            {activeTab === 5 && (
              <img
                itemProp="image"
                className={`${fadeProp.fade} w-dashboardPic lg:ml-0`}
                src="/Pictures/customer-report.png"
                alt="customer report"
                width="697"
                height="532"
              />
            )}
            <img
              itemProp="image"
              className="moveRightToLeft absolute -z-10 w-32 h-24 -top-8 -right-10 hidden lg:inline-block"
              alt="dot"
              src="/Pictures/dashboardDot.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
