import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section
      lang={t("lang")}
      itemScope
      itemType="https://schema.org/WPFooter"
      className="bg-[#000F1A;] w-auto h-auto text-white lg:py-4 lg:px-4 py-5 px-5"
    >
      <div className="lg:grid lg:grid-rows-1 lg:max-w-7xl m-auto w-full">
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 lg:pt-14 lg:pb-14">
          <div className=" pr-6 lg:pr-0">
            <span>
            <Link itemProp="url" href="/" className="py-4 px-2">
              <img itemProp="image" src="/images/footer-logo.svg" alt="footer logo" />
            </Link>
            </span>
            <div className="mt-4">
              <p itemProp="text">{t("footerTitle")}</p>
            </div>
          </div>
          <div className=" mt-10 lg:mt-0 lg:flex flex-col justify-center items-center">
            <div>
              <span
                className="font-poppins lg:font-semibold font-medium lg:text-xl text-lg"
                itemProp="text"
              >
                {t("quickLinkTitle")}
              </span>
              <div className="mt-4">
                <ul className="font-inter text-sm lg:text-base">
                  <li className="mb-3">
                    <Link itemProp="url" href="/features" as="/features">
                      {t("features")}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link itemProp="url" href="/why-dokane" as="/why-dokane">
                      {t("whyDokane")}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      itemProp="url"
                      href="https://www.youtube.com/@DokanEPOS"
                    >
                      {t("tutorial")}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link itemProp="url" href="/faq" as="/faq">
                      {t("faq")}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link itemProp="url" passHref={true} href="/terms" as="/terms">
                      {t("terms")}
                    </Link>
                  </li>
                  <li>
                    <Link itemProp="url" passHref={true} href="/privacy" as="/privacy">
                      {t("privacy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className=" mt-10 lg:mt-0"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <span
              itemProp="name"
              className="font-poppins lg:font-semibold font-medium lg:text-xl text-lg"
            >
              {t("contactTitle")}
            </span>
            <div className="mt-4 text-footerText list-none font-inter lg:text-base text-sm">
              <div className="flex mb-3">
                <i
                  className="fa fa-map-marker text-[24px] mr-2"
                  aria-hidden="true"
                ></i>
                <li itemProp="contactOption" className="flex-1">
                  {t("address")}
                </li>
              </div>
              <div className="flex mb-3">
                <i
                  className="fa fa-phone text-[24px] mr-2"
                  aria-hidden="true"
                ></i>
                <li className="flex-1">
                  <a itemProp="telephone" href="tel:01313-715904">
                    +{t("phone")}
                  </a>
                </li>
              </div>
              <div className="flex mb-3">
                <i
                  className="fa fa-location-arrow text-[24px] mr-2"
                  aria-hidden="true"
                ></i>
                <li className="flex-1" itemProp="email">
                  <a href="mailto:contact@dokanepos.com">
                    contact@dokanepos.com
                  </a>
                </li>
              </div>

              <div className="flex">
                <i
                  className="fa fa-whatsapp text-[24px] mr-2"
                  aria-hidden="true"
                ></i>
                <li className="flex-1" itemProp="telephone">
                  <a href="tel:01313-715904">
                    +{t("phone")}
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-footerBorder mt-10 -mx-6"></div>
        <div className="lg:grid lg:grid-rows-1 lg:grid-flow-col lg:gap-4 lg:my-8 my-4 text-sm">
          <div className="lg:grid lg:grid-cols-12 grid grid-cols-3">
            <div className="lg:col-span-6 text-footerText font-inter text-sm hidden lg:inline-block">
              <div itemProp="copyrightNotice" className="mt-8">
                {t("copyright")}&nbsp;
                <a
                  itemProp="archivedAt"
                  className="text-blue-600"
                  href="https://reformedtech.org/"
                >
                  {" "}
                  ReformedTech
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-2">
              <div className="flex lg:mt-8 mt-3 justify-end">
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a itemProp="url" href="https://www.facebook.com/dokanepos">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a itemProp="url" href="https://twitter.com/DokanEPOS">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a
                    itemProp="url"
                    href="https://www.instagram.com/dokane.pos/"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a
                    itemProp="url"
                    href="https://www.linkedin.com/company/dokane"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a itemProp="url" href="https://www.pinterest.com/dokanepos">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
                <div className="rounded py-[2px] px-[8px] hover:bg-sky-700 border border-gray-400 ml-2 cursor-pointer">
                  <a itemProp="url" href="https://www.youtube.com/@DokanEPOS">
                    <i className="fa fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col- span-3 text-footerText font-inter text-sm lg:hidden">
          <div itemProp="copyrightNotice" className="mt-8">
            {t("copyright")}&nbsp;
            <a
              itemProp="archivedAt"
              className="text-blue-600"
              href="https://reformedtech.org/"
            >
              {" "}
              ReformedTech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
