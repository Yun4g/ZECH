"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Procurement Of Marine Hoses",
        description:
            "Procurement Of Marine Hoses To Used For Terminals and FPSO operations in the transfer of Crude oil.",
    },
    {
        title:
            "Refurbishment and Resetting of Marine Break Way Couplings",
        description:
            "Repairs and maintenance of Marine Breakaway couplings.",
    },
];

export default function ProjectCards() {
    return (
        <div className="flex flex-col gap-4 mt-6">
            {projects.map((project, i) => (
                <motion.div
                    key={i}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                >
                    {/* WHITE CARD */}
                    <motion.div
                        variants={{
                            rest: { opacity: 1 },
                            hover: { opacity: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center shadow-sm"
                    >
                        <h3 className="font-semibold text-black max-w-xs text-base md:text-[20px]">
                            {project.title}
                        </h3>

                        <button className="border border-gray-400 px-3 py-1.5 rounded-md mt-2 lg:mt-0 text-sm">
                            View Project
                        </button>
                    </motion.div>

                    {/* BLACK HOVER CARD */}
                    <motion.div
                        variants={{
                            rest: { opacity: 0, y: 20 },
                            hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 bg-black text-white p-6 md:p-10 flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg md:text-[22px] max-w-xs">
                                {project.title}
                            </h3>

                            <button
                                className='bg-white text-[#000000] rounded-full ps-4 mb-12 md:mb-24 py-[3.58px] w-fit flex items-center gap-3 mt-6 cursor-pointer'

                            >
                                <p className="text-sm font-medium">
                                    see project
                                </p>

                                <span>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="22.7673" width="30.4626" height="31.9993" rx="15.2313" transform="rotate(45.3566 22.7673 0)" fill="#006600" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8199 26.296C17.6802 26.1544 17.6023 25.9632 17.6036 25.7643C17.6048 25.5654 17.685 25.3751 17.8265 25.2353L24.0094 19.1289L19.4557 19.1006C19.2616 19.0925 19.0781 19.0094 18.944 18.8688C18.8099 18.7281 18.7357 18.5409 18.7369 18.3466C18.7381 18.1522 18.8147 17.966 18.9505 17.827C19.0863 17.688 19.2708 17.6072 19.4651 17.6016L25.8289 17.6412C26.0277 17.6425 26.2177 17.7227 26.3574 17.8641C26.4971 18.0055 26.5749 18.1966 26.5738 18.3953L26.5341 24.7592C26.5261 24.9533 26.443 25.1368 26.3023 25.2709C26.1617 25.405 25.9745 25.4793 25.7801 25.478C25.5858 25.4768 25.3995 25.4002 25.2606 25.2644C25.1216 25.1286 25.0408 24.9441 25.0351 24.7499L25.0635 20.1962L18.8806 26.3026C18.739 26.4423 18.5478 26.5202 18.3489 26.5189C18.15 26.5177 17.9597 26.4375 17.8199 26.296Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <p className="text-sm text-gray-300 mt-6 max-w-md">
                            {project.description}
                        </p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}