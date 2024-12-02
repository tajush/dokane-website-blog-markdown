import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function Reviews() {
  const { t } = useTranslation();
  var reviewSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "theClass",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  var logoSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "theClass",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section lang={t("lang")} itemScope itemType="https://schema.org/Article">
      <div className=" max-w-7xl m-auto lg:mt-8 p-4">
        <header
          itemProp="text"
          className="font-poppins lg:mb-[50px] mb-[20px] text-center lg:text-[40px] leading-[60px] lg:grid lg:grid-rows-1 lg:grid-flow-col lg:font-semibold text-2xl font-semibold"
        >
          {t("reviewsTitle")}
        </header>
        {/* <div className='bg-[#155263] lg:p-[30px] p-[20px] rounded-[20px]	'>
                    <Slider {...reviewSettings}>
                        <div>
                            <figure className='mb-[20px]'>
                                <img src="/images/homepage/star.svg" alt="star" />
                            </figure>
                            <p className="text-white lg:mb-[60px] mb-[35px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eligendi sunt voluptatum exercitationem nesciunt? Dolore, porro
                                ipsum sit aut explicabo beatae eos voluptas commodi esse vel
                                reprehenderit voluptate distinctio quae pariatur.
                            </p>
                            <div className='flex items-center'>
                                <figure>
                                    <img src="/images/homepage/company-icon1.svg" alt="" />
                                </figure>
                                <div className='ml-3'>
                                    <h6 className='text-white font-medium text-[16px] font-inter'>&#8211; Meherab Hossain</h6>
                                    <p className='text-[#CFFDFF] font-normal text-[16px] font-poppins'>Product Manager, Cake box bazar</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <figure className='mb-[20px]'>
                                <img src="/images/homepage/star.svg" alt="star" />
                            </figure>
                            <p className="text-white lg:mb-[60px] mb-[35px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eligendi sunt voluptatum exercitationem nesciunt? Dolore, porro
                                ipsum sit aut explicabo beatae eos voluptas commodi esse vel
                                reprehenderit voluptate distinctio quae pariatur.
                            </p>
                            <div className='flex items-center'>
                                <figure>
                                    <img src="/images/homepage/company-icon1.svg" alt="" />
                                </figure>
                                <div className='ml-3'>
                                    <h6 className='text-white font-medium text-[16px] font-inter'>&#8211; Meherab Hossain</h6>
                                    <p className='text-[#CFFDFF] font-normal text-[16px] font-poppins'>Product Manager, Cake box bazar</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div> */}
      </div>

      <div>
        <Slider {...logoSettings}>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/fresh-juice.png"
              alt="frsh juice"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/cake-box.png"
              alt="cake box"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/family-mart.png"
              alt="family mart"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/afsuli.png"
              alt="afsuli"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/bangla-food.png"
              alt="bangla food"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/hanger.png"
              alt="hanger"
            />
          </figure>
          <figure>
            <img
              itemProp="image"
              className="mx-auto"
              src="/images/homepage/safri.png"
              alt="safri"
            />
          </figure>
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
