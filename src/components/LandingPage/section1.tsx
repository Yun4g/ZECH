
import React from 'react';

function HeroSection() {
    const whatZechDoes = [
        "Engineering",
        "Construction",
        "Procurement",
        "Logistics",
    ];

    return (
        <section className="px-16 w-full  hero-bg h-fit  flex flex-col justify-center    gap-8">
            <h1 className="text-[80px] leading-[1.1] text-white font-bold max-w-200 md:mt-36 ">
                Driving Progress Through <br /> Industrial Excellence
            </h1>

            <div className="bg-[#006600] border-2 border-[#559955] rounded-full p-2 text-white text-sm font-medium w-fit">
                <p>Nigeria&apos;s Indigenous O&amp;G Services Partner · Est. 2001</p>
            </div>

            <section className='flex flex-col   items-end justify-center w-full'>
                <div className="flex items-center   justify-end gap-7 mt-4   ">
                    {whatZechDoes.map((item, index) => (
                        <p
                            key={index}
                            className="text-white text-base font-semibold border border-white rounded px-4 py-1"
                        >
                            {item} ·
                        </p>
                    ))}
                </div>

                <div className=' flex flex-col  '>
                    <p className="text-white text-xl mt-3.5 font-semibold  md:w-155 wrap-break-word text-start">
                        We provide integrated service packages from turnkey  onshore/offshore pipeline operations, procurement,  maintenance, repairs and  supplies services, marine and energy services.

                    </p>

                    <button className='bg-white rounded-full ps-4 mb-24  py-[3.58px] w-fit flex items-center gap-3 mt-6 cursor-pointer'>
                        <p className=" text-sm font-meduim ">
                            Get In Touch
                        </p>

                        <span>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="22.7673" width="30.4626" height="31.9993" rx="15.2313" transform="rotate(45.3566 22.7673 0)" fill="#006600" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.8199 26.296C17.6802 26.1544 17.6023 25.9632 17.6036 25.7643C17.6048 25.5654 17.685 25.3751 17.8265 25.2353L24.0094 19.1289L19.4557 19.1006C19.2616 19.0925 19.0781 19.0094 18.944 18.8688C18.8099 18.7281 18.7357 18.5409 18.7369 18.3466C18.7381 18.1522 18.8147 17.966 18.9505 17.827C19.0863 17.688 19.2708 17.6072 19.4651 17.6016L25.8289 17.6412C26.0277 17.6425 26.2177 17.7227 26.3574 17.8641C26.4971 18.0055 26.5749 18.1966 26.5738 18.3953L26.5341 24.7592C26.5261 24.9533 26.443 25.1368 26.3023 25.2709C26.1617 25.405 25.9745 25.4793 25.7801 25.478C25.5858 25.4768 25.3995 25.4002 25.2606 25.2644C25.1216 25.1286 25.0408 24.9441 25.0351 24.7499L25.0635 20.1962L18.8806 26.3026C18.739 26.4423 18.5478 26.5202 18.3489 26.5189C18.15 26.5177 17.9597 26.4375 17.8199 26.296Z" fill="white" />
                            </svg>

                        </span>
                    </button>
                </div>
            </section>

        </section>
    );
}





export default HeroSection;