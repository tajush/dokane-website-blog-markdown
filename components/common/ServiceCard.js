import React from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({card}) => {
  const { t } = useTranslation();
  return (
    <section
      itemScope
      itemType="https://schema.org/Article"
      id="dokanE"
      className="scroll-mt bg-gradient-to-r from-[#D7F6FF] to-[#FFF1E4] w-full h-auto lg:mt-20 mt-10 lg:py-20 py-10"
    >
      <header className="font-poppins max-w-[650px] m-auto text-center lg:text-[40px] lg:leading-[60px] font-semibold text-2xl">
        <div itemProp="name">{t("cardTitle")}</div>
        <div
          itemProp="description"
          className="lg:text-lg text-gray-500 text-center font-thin lg:py-5 font-inter grid grid-rows-1 text-sm px-10 py-2"
        >
          {t("cardSubTitle")}
        </div>
      </header>
      <div className="lg:grid lg:grid-rows-1 max-w-7xl m-auto lg:mt-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon1.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="name" className="font-bold text-xl mb-2">
                {card.cardTitle1}
              </div>
              <span
                itemProp="text"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
               {card.cardSubTitle1}
              </span>
            </div>
          </div>
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon2.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div
                itemProp="alternativeHeadline"
                className="font-bold text-xl mb-2"
              >
                {card.cardTitle2}
              </div>
              <span
                itemProp="description"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
                 {card.cardSubTitle2}
              </span>
            </div>
          </div>
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon3.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div
                itemProp="alternativeHeadline"
                className="font-bold text-xl mb-2"
              >
                {card.cardTitle3}
              </div>
              <span
                itemProp="description"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
                {card.cardSubTitle3}
              </span>
            </div>
          </div>
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon2.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div
                itemProp="alternativeHeadline"
                className="font-bold text-xl mb-2"
              >
                {card.cardTitle4}
              </div>
              <span
                itemProp="description"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
               {card.cardSubTitle4}
              </span>
            </div>
          </div>
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:lg:p py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon3.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div
                itemProp="alternativeHeadline"
                className="font-bold text-xl mb-2"
              >
                {card.cardTitle5}
              </div>
              <span
                itemProp="description"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
              {card.cardSubTitle5}
              </span>
            </div>
          </div>
          <div className="hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img
              itemProp="image"
              className="h-12 m-auto"
              src="/images/homepage/card-icon1.svg"
              alt="card icon"
            />
            <div className="px-6 py-4 font-poppins text-center">
              <div
                itemProp="alternativeHeadline"
                className="font-bold text-xl mb-2"
              >
                {card.cardTitle6}
              </div>
              <span
                itemProp="description"
                className="text-gray-700 lg:text-base text-sm font-inter"
              >
               {card.cardSubTitle6}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
