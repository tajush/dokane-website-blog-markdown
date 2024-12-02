import React from "react";
import { useTranslation } from "react-i18next";

const ServicePayment = ({ payment }) => {
  const { t } = useTranslation();
  return (
    <section
      itemScope
      itemType="https://schema.org/Article"
      className="relative text-white font-poppins bg-[#155263] lg:mt-24 mt-10 "
    >
      <img
        itemProp="image"
        className="moveRightToLeft absolute top-0 left-[10px] lg:block hidden"
        src="/images/homepage/payment-topStyle.svg"
        alt="payment top style"
      />
      <img
        itemProp="image"
        className="absolute bottom-0 right-0 lg:block hidden"
        src="/images/homepage/payment-bottomStyle.svg"
        alt="payment bottom style"
      />
      <div className="lg:grid grid-rows-1 lg:max-w-7xl m-auto px-4">
        <div className="grid grid-cols-12 ">
          <div className="relative lg:col-span-8 col-span-12 lg:font-bold font-semibold w-5/6 lg:my-[90px] my-10">
            <h5
              itemProp="name"
              className="lg:text-[32px] lg:leading-[48px] text-lg"
            >
              {payment.paymentTitle}
            </h5>
            <p
              itemProp="description"
              className="font-inter lg:text-base text-sm mt-4 font-thin"
            >
              {payment.paymentSubTitle}
            </p>
            <button
              itemProp="text"
              className="text-black bg-[#FFA755] py-[18px] px-[36px] rounded mt-10"
            >
              <a href="#pricing">{t("paymentOfferButton")}</a>
            </button>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <figure className="relative z-10">
              <img
                itemProp="image"
                className="lg:mt-[-42px] mt-4"
                src={payment.img}
                width="471"
                height="436"
                alt="payment img"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePayment;
