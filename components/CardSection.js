import React from "react";
import { useTranslation } from 'react-i18next'

const CardSection = () => {
  const { t } = useTranslation()
  return (
    <section lang={t("lang")} itemScope itemType="https://schema.org/Article" id="dokanE" className="scroll-mt bg-gradient-to-r from-[#D7F6FF] to-[#FFF1E4] w-full h-auto lg:mt-20 mt-10 lg:py-20 py-10">
      <header className="font-poppins max-w-[650px] m-auto text-center lg:text-[40px] lg:leading-[60px] font-semibold text-2xl">
        <div itemProp="name">{t("cardTitle")}</div>
        <div itemProp="description" className="lg:text-lg text-gray-500 text-center font-thin lg:py-5 font-inter grid grid-rows-1 text-sm px-10 py-2">
          {t("cardSubTitle")}
        </div>
      </header>
      <div className="lg:grid lg:grid-rows-1 max-w-7xl m-auto lg:mt-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="lg:max-w-sm w-dashboardPic m-auto hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon1.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="name" className="font-bold text-xl mb-2">
                {t("cardItemHeader1")}
              </div>
              <span itemProp="text" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription1")}
              </span>
            </div>
          </div>
          <div className="lg:max-w-sm w-dashboardPic m-auto hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon2.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="alternativeHeadline" className="font-bold text-xl mb-2">{t("cardItemHeader2")}</div>
              <span itemProp="description" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription2")}
              </span>
            </div>
          </div>
          <div className="lg:max-w-sm w-dashboardPic m-auto hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon3.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="alternativeHeadline" className="font-bold text-xl mb-2">
                {t("cardItemHeader3")}
              </div>
              <span itemProp="description" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription3")}
              </span>
            </div>
          </div>
          <div className="lg:max-w-sm w-dashboardPic m-auto lg:hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon2.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="alternativeHeadline" className="font-bold text-xl mb-2">{t("cardItemHeader4")}</div>
              <span itemProp="description" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription4")}
              </span>
            </div>
          </div>
          <div className="lg:max-w-sm w-dashboardPic m-auto hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:lg:p py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon3.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="alternativeHeadline" className="font-bold text-xl mb-2">{t("cardItemHeader5")}</div>
              <span itemProp="description" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription5")}
              </span>
            </div>
          </div>
          <div className="lg:max-w-sm w-dashboardPic m-auto hover:rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white lg:py-8 py-7">
            <img itemProp="image" className="h-12 m-auto" src="/images/homepage/card-icon1.svg" alt="card icon" />
            <div className="px-6 py-4 font-poppins text-center">
              <div itemProp="alternativeHeadline" className="font-bold text-xl mb-2">{t("cardItemHeader6")}</div>
              <span itemProp="description" className="text-gray-700 lg:text-base text-sm font-inter">
                {t("cardItemDescription6")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
