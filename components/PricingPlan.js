import React, { useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { CancelIcon } from "./shared/Icons";
import DemoForm from './DemoForm';
import CustomAutoComplete from './common/CustomAutocomplete';
import {
  Fragment,
} from "react";
import { useTranslation } from 'react-i18next'
function PricingPlan() {
  const { t } = useTranslation()
  const [openDemo, setOpenDemo] = useState(false);
  const [PricingOptions, setPrcingOptions] = useState([
    { id: 'yearly', value: 'yearly', label: 'Yearly Package' },
    { id: 'half-yearly', value: 'half-yearly', label: 'Half-Yearly Package' },
    // { id: 'daily', value: 'daily', label: 'Quarterly Package' },
    { id: 'monthly', value: 'monthly', label: 'Monthly Package' }
  ])
  const [selectedPricingOptions, setSelectedPricingOptions] = useState({ id: 'yearly', value: 'yearly', label: 'Yearly Package' },);

  const getFeatureContent = () => {
    if (selectedPricingOptions?.id == 'yearly') {
      return (
        <section lang={t("lang")}>
          <div className='flex mt-6 mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("yearlyPackage1")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("yearlyPackage2")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 line-through text-[#767676] lg:text-base text-sm'>{t("yearlyPackage3")} </p> <span itemProp='text' className='bg-[#FFA755] text-black text-xs ml-2 px-2 py-1 rounded-[100px] font-medium'>{getSavePrice()}</span>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("yearlyPackage4")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("yearlyPackage5")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("yearlyPackage6")}</p>
          </div>

        </section>
      )
    } else if (selectedPricingOptions?.id == 'half-yearly') {
      return (
        <>
          <div className='flex mt-6 mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage1")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage2")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 line-through text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage3")}</p> <span itemProp='text' className='bg-[#FFA755] text-black text-xs ml-2 px-2 py-1 rounded-[100px] font-medium'>{getSavePrice()}</span>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage4")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage5")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='name' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("halfYearlyPackage6")}</p>
          </div>
        </>
      )
    } else if (selectedPricingOptions?.id == 'daily') {
      return (
        <>
          <div className='flex mt-6 mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage1")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage2")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 line-through text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage3")}</p> <span itemProp='text' className='bg-[#FFA755] text-black text-xs ml-2 px-2 py-1 rounded-[100px] font-medium'>{getSavePrice()}</span>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage4")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage5")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("quarterlyPackage6")}</p>
          </div>

        </>
      )
    } else if (selectedPricingOptions?.id == 'monthly') {
      return (
        <>
          <div className='flex mt-6 mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage1")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage2")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage3")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage4")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage5")}</p>
          </div>

          <div className='flex mb-2.5'>
            <img itemProp='image' src="/images/homepage/right-sign.svg" alt="right sign" />
            <p itemProp='text' className='pl-3 text-[#767676] lg:text-base text-sm'>{t("monthlyPackage6")}</p>
          </div>

        </>
      )
    }
  }

  const getFeaturePrice = () => {
    if (selectedPricingOptions?.id == 'yearly') {
      return 917
    } else if (selectedPricingOptions?.id == 'half-yearly') {
      return 917
    } else if (selectedPricingOptions?.id == 'daily') {
      return 900
    } else if (selectedPricingOptions?.id == 'monthly') {
      return 1000
    }
  }

  const getSavePrice = () => {
    if (selectedPricingOptions?.id == 'yearly') {
      return t("yearlySave")
    } else if (selectedPricingOptions?.id == 'half-yearly') {
      return t("halfYearlySave")
    } else if (selectedPricingOptions?.id == 'daily') {
      return t("quarterlySave")
    }
  }


  const getPriceMark = () => {
    if (selectedPricingOptions?.id == 'yearly') {
      return t("yearlyOff")
    } else if (selectedPricingOptions?.id == 'half-yearly') {
      return t("halfYearlyOff")
    } else if (selectedPricingOptions?.id == 'daily') {
      return t("quarterlyOff")
    }
    else if (selectedPricingOptions?.id == 'monthly') {
      return t("monthlyOff")
    }
  }


  const getDemo = () => {
    setOpenDemo(true)
  }

  const closeModal = () => {
    setOpenDemo(false)
  }

  const [confirmationModal, setConfirmationModal] = useState(false);
  const successModal = () => {
    setConfirmationModal(true);
  }

  return (
    <>
      <section itemScope itemType="https://schema.org/Article" id="pricing" className='scroll-mt bg-gradient-to-r from-[#D7F6FF] to-[#FFF1E4] w-full h-auto lg:mt-20 mt-10 lg:py-20 py-10 relative'>
        <img itemProp='image' className='absolute moveRightToLeft top-[90px] right-[50px] hidden lg:inline-block' src="/images/homepage/taka.svg" alt="taka" />
        <header itemProp='text' className="font-poppins red text-center lg:text-[40px] lg:leading-[60px] grid grid-rows-1 grid-flow-col font-semibold text-2xl">
          <>{t("pricingTitle")}</>
        </header>
        <div itemProp='text' className="lg:text-lg text-[#4F4F4F] max-w-[600px] m-auto text-center lg:py-5 font-inter text-sm px-10 py-2">
          {t("pricingSubTitle")}
        </div>
        <div className=" max-w-7xl m-auto lg:mt-8 p-4">
          <div className='max-w-[600px] mx-auto'>
            {/* <div className="h-full bg-white shadow-lg relative">  //may be used for further
              <header className='mt-4 text-center h-[100px] border-b border-b-[#D2D6DE] relative'>
                <div className='absolute top-[-29px]'>
                  <img src="/images/homepage/pricing-mark1.png" alt="pricing mark" />
                  <div className='font-semibold absolute top-[50%] left-[50%] text-[14px] -translate-x-2/4 -translate-y-2/4 text-white'>
                    {getPriceMark()}
                  </div>
                </div>
                <h6 itemProp='headline' className='lg:text-[20px] text-[16px] text-[#0070BA] font-medium'>{t("leftPricingCardTitle")}</h6>
                <div className='flex justify-center items-center mt-2 mb-6'>
                  <p className=''><span className='text-[24px] text-[#767676] line-through' itemProp='commentCount'>{selectedPricingOptions?.id == 'monthly' ? '' : '1000/'}</span></p>
                  <p className='ml-2' itemProp='text'>Tk <span className='text-[24px] text-[#FFA755] font-semibold'>{getFeaturePrice()}</span>/Mo</p>
                </div>
              </header>
              <div className='p-5'>
                <CustomAutoComplete
                  options={PricingOptions}
                  value={selectedPricingOptions}
                  onChange={(option) => setSelectedPricingOptions(option)}
                  optionValue={(option) => option.id}
                  optionLabel={(option) => option.label}
                />

                <div className='mt-8'>
                  <h6 itemProp='text'>{t("pricingTopFeatureTitle")}</h6>
                  <>
                    <div>{getFeatureContent()}</div>
                  </>
                </div>

                <div className='max-w-[300px] m-auto text-center mt-[40px] mb-[48px] bg-[#FFF2E5] py-1.5 px-2.5'>
                  <p itemProp='text'>{t("configurationOffer")}</p>
                  <p><span itemProp='text'>{t("regularOffer")}</span></p>
                </div>

                <div>
                  <button itemProp='name' className='w-full py-4 bg-[#155263] rounded text-white' onClick={getDemo}>{t("leftGetNowBtn")}</button>
                </div>
              </div>
            </div> */}

            <div className="h-full bg-white shadow-lg lg:mt-0 mt-8">
              <header className='pt-4 text-center h-[100px] border-b border-b-[#D2D6DE]'>
                <h6 itemProp='headline' className='lg:text-[20px] text-[16px] text-[#0070BA] font-medium'>{t("rightPricingCardTitle")}</h6>
                <p itemProp='text' className='mt-2 mb-6
            '>{t("rightPricingCardSubTitle")}</p>
              </header>
              <div className=' text-center mt-[40px] px-5 pb-5'>
                <h6 itemProp='alternativeHeadline' className='text-black lg:text-[26px] text-[24px] font-poppins'>{t("rightPricingContactTitle")}</h6>
                <figure className='mt-[30px] flex justify-center'>
                  <img itemProp='image' src="/images/homepage/entrepreneur.png" width="501" height="271" alt="entrepreneur" />
                </figure>
                <p itemProp='text' className='text-[20px] mt-[18px] mb-[52px] text-[#0070BA]'>{t("demoCheck")}</p>

                <div>
                  <button itemProp='name' className='w-full py-4 bg-[#155263] rounded text-white' onClick={getDemo}>{t("rightGetNowBtn")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*     demo modal        */}
      <Transition.Root
        show={openDemo}
        as={Fragment}
      >
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
                          className="text-xl font-medium leading-6 text-gray-900 "
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
                      <DemoForm closeModal={closeModal} successModal={successModal} />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <!-- success modal --> */}
      <Transition.Root
        show={confirmationModal}
        as={Fragment}
      >
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
                        <p className="text-lg">We'll contact you shortly to schedule your free demo. If you have any questions please call us at 01313-715904</p>
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
  )
}

export default PricingPlan
