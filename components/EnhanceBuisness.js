import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

function EnhanceBuisness() {
    const { t } = useTranslation()
    const [show, setShow] = useState(false);

    const showButton = () => {
        setShow(prev => !prev)
    }
    return (
        <>
            <section lang={t("lang")} itemScope itemType="https://schema.org/Service" className='w-full h-auto lg:pt-20 pt-10 relative'>
                <img itemProp='image' className='rotate absolute top-[75px] right-[125px] hidden lg:inline-block' src="/images/homepage/cashier.svg" alt="cashier" />
                <img itemProp='image' className='moveTopToBottom absolute bottom-[10px] left-[125px] hidden lg:inline-block' src="/images/homepage/cash-register.svg" alt="cash register" />
                <header className="font-poppins lg:px-0 px-4 text-center max-w-[730px] m-auto lg:text-[40px] lg:leading-[60px] font-semibold text-2xl">
                    <div itemProp='name'>{t("enhanceTitle")}</div>
                    <div itemProp='description' className="lg:text-lg font-thin text-[#4F4F4F] text-center lg:py-5 font-inter text-sm px-10 py-2">
                        {t("enhanceSubTitle")}
                    </div>
                </header>
                <div className=" max-w-7xl m-auto lg:mt-8 p-4">
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-y-12'>
                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/supershop.svg" alt="supershop" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("superShop")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/pharmacy.svg" alt="pharmacy" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("pharmacy")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/departmental.svg" alt="departmental" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("departmental")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/food.svg" alt="food" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("food")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/computer.svg" alt="computer" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("computerMobile")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/e-commerce.svg" alt="e-commerce" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("ecommerce")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/hardware.svg" alt="hardware" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("hardware")}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                            <figure>
                                <img itemProp='image' src="/images/homepage/clothing.svg" alt="clothing" />
                            </figure>
                            <div className='mt-4 text-center'>
                                <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("clothingStore")}</p>
                            </div>
                        </div>

                        {show &&
                            <>
                                <div className='flex justify-center items-center flex-col'>
                                    <figure>
                                        <img itemProp='image' src="/images/homepage/fashion.svg" alt="fashion" />
                                    </figure>
                                    <div className='mt-4 text-center'>
                                        <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("fashionHouse")}</p>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center flex-col'>
                                    <figure>
                                        <img itemProp='image' src="/images/homepage/gym.svg" alt="gym" />
                                    </figure>
                                    <div className='mt-4 text-center'>
                                        <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("gym")}</p>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center flex-col'>
                                    <figure>
                                        <img itemProp='image' src="/images/homepage/footwear.svg" alt="footwear" />
                                    </figure>
                                    <div className='mt-4 text-center'>
                                        <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("footwear")}</p>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center flex-col'>
                                    <figure>
                                        <img itemProp='image' src="/images/homepage/jewellery.svg" alt="jewellery" />
                                    </figure>
                                    <div className='mt-4 text-center'>
                                        <p itemProp='serviceType' className='text-black hover:text-[#0070BA] cursor-pointer'>{t("jewellery")}</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                    <div className='text-center mt-16'>
                        <button itemProp='name' className='border py-[8px] px-[32px]' onClick={showButton}>{!show ? t("enhanceMoreButton") : t("enhanceLessButton")}</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EnhanceBuisness
