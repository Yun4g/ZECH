
import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
    const whatZechDoes = [
        "Engineering",
        "Construction",
        "Procurement",
        "Logistics",
    ];

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const chipVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
    };

    const buttonVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4 } }
    };

    return (
        <motion.section
            className="px-4 sm:px-8 md:px-16 w-full hero-bg h-fit flex flex-col justify-center "
            initial="hidden"
            animate="visible"
        >

            
            <motion.div
                className="bg-[#006600] border-2 border-[#559955] mt-36 rounded-full p-3 md:p-2 text-white text-xs sm:text-sm font-medium w-fit"
                variants={chipVariant}
            >
                <p>Nigeria&apos;s Indigenous O&amp;G Services Partner · Est. 2001</p>
            </motion.div>
            <motion.h1
                className="text-xl md:text-6xl lg:text-[80px] leading-[1.1] mt-4.5 md:mt-0 text-center md:text-start text-white font-bold  md:max-w-200 "
                variants={textVariant}
            >
                Driving Progress Through Industrial <br className='hidden md:block' />  Excellence
            </motion.h1>


            <section className='flex flex-col items-start md:items-end justify-end  w-full'>
                <div className="flex flex-wrap items-center justify-start md:justify-end gap-1.5 md:gap-5.5 mt-3 md:mt-0 ">
                    {whatZechDoes.map((item, index) => (
                        <motion.p
                            key={index}
                            className="text-white text-sm md:text-base font-semibold w-[48%] md:w-fit border border-white rounded-[5px] px-1.5 py-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                            {item} {index < whatZechDoes.length - 1 ? '·' : '·'}
                        </motion.p>   
                    ))}
                </div>

                <div className='flex flex-col w-full md:w-lg boder-2 md:me-2 '>
                    <motion.p
                        className="text-white text-base md:text-xl mt-3.5 borer-2  font-semibold md:w-127.5 wrap-break-word text-center  md:text-start"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        We provide integrated service packages from turnkey onshore/offshore pipeline operations, procurement, maintenance, repairs and supplies services, marine and energy services.
                    </motion.p>
                    <motion.button
                        className='bg-white rounded-full ps-4 mb-12 md:mb-24 py-[3.58px] w-fit flex items-center gap-3 mt-6 cursor-pointer'
                        variants={buttonVariant}
                    >
                        <p className="text-sm font-medium">
                            Get In Touch
                        </p>

                        <span>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="22.7673" width="30.4626" height="31.9993" rx="15.2313" transform="rotate(45.3566 22.7673 0)" fill="#006600" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.8199 26.296C17.6802 26.1544 17.6023 25.9632 17.6036 25.7643C17.6048 25.5654 17.685 25.3751 17.8265 25.2353L24.0094 19.1289L19.4557 19.1006C19.2616 19.0925 19.0781 19.0094 18.944 18.8688C18.8099 18.7281 18.7357 18.5409 18.7369 18.3466C18.7381 18.1522 18.8147 17.966 18.9505 17.827C19.0863 17.688 19.2708 17.6072 19.4651 17.6016L25.8289 17.6412C26.0277 17.6425 26.2177 17.7227 26.3574 17.8641C26.4971 18.0055 26.5749 18.1966 26.5738 18.3953L26.5341 24.7592C26.5261 24.9533 26.443 25.1368 26.3023 25.2709C26.1617 25.405 25.9745 25.4793 25.7801 25.478C25.5858 25.4768 25.3995 25.4002 25.2606 25.2644C25.1216 25.1286 25.0408 24.9441 25.0351 24.7499L25.0635 20.1962L18.8806 26.3026C18.739 26.4423 18.5478 26.5202 18.3489 26.5189C18.15 26.5177 17.9597 26.4375 17.8199 26.296Z" fill="white" />
                            </svg>
                        </span>
                    </motion.button>
                </div>
            </section>
        </motion.section>
    );
}





export default HeroSection;