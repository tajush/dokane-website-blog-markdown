import React from "react";
const Custom404 = () => {
    return (
        <div className="lg:py-16 py-10 px-4">
            <div className="flex justify-center">
                <img src="/images/error.png" alt="error img" />
            </div>

            <div className="text-center lg:mt-[60px] mt-[30px]">
                <h1 className="lg:text-[56px] text-[32px] lg:leading-[56px] font-poppins font-black text-[#212833] lg:mb-[30px] mb-[15px]">We lost this page</h1>
                <p className="max-w-[564px] m-auto font-inter lg:text-[17px] text-[14px] leading-[28px] text-[#4D4E50]">We searched high and low but couldn’t find what you’re looking for. Let’s find a better place for you to go.</p>
                <button className="bg-[#155263] text-white py-[16px] px-[32px] rounded lg:mt-[40px] mt-[20px]">
                    <i className="fa fa-long-arrow-right mr-2" aria-hidden="true"></i>
                    <a href="/">Go to Home</a>
                </button>
            </div>
        </div>
    );
}

export default Custom404;