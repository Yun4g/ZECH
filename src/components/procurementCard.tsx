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
                    className="relative rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{ rest: {}, hover: {} }}
                >
                    <motion.div
                        className="min-h-35 p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center"
                        variants={{
                            rest: { minHeight: "140px" },
                            hover: { minHeight: "258px" },
                        }}
                        transition={{ duration: 0.35 }}
                    >
                        <h3 className="font-semibold text-black max-w-xs text-base md:text-[20px]">
                            {project.title}
                        </h3>

                        <button className="border border-gray-400 px-3 py-1.5 rounded-md mt-4 lg:mt-0 text-sm">
                            View Project
                        </button>
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { opacity: 0, y: 20 },
                            hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 bg-black text-white p-6 md:p-10 flex flex-col justify-between"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <h3 className="font-semibold text-lg md:text-[22px] max-w-xs">
                                {project.title}
                            </h3>

                            <button className="bg-white text-black rounded-full px-1.5 py-1.5 w-fit flex items-center gap-2 mt-4 md:mt-0">
                                <span className="text-sm font-medium">See Project</span>
                                <span className="">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="35.8894" height="35.8759" rx="17.938" fill="#006600" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6776 22.1539C13.5378 22.0123 13.46 21.8211 13.4612 21.6222C13.4625 21.4233 13.5427 21.233 13.6842 21.0932L19.8671 14.9868L15.3134 14.9585C15.1192 14.9504 14.9358 14.8673 14.8017 14.7267C14.6676 14.586 14.5933 14.3988 14.5945 14.2045C14.5957 14.0101 14.6723 13.8239 14.8082 13.6849C14.944 13.5459 15.1285 13.4651 15.3227 13.4595L21.6866 13.4991C21.8853 13.5004 22.0754 13.5806 22.215 13.722C22.3547 13.8634 22.4325 14.0545 22.4314 14.2533L22.3918 20.6171C22.3837 20.8113 22.3006 20.9947 22.16 21.1288C22.0193 21.2629 21.8321 21.3372 21.6378 21.336C21.4435 21.3347 21.2572 21.2582 21.1182 21.1223C20.9792 20.9865 20.8984 20.802 20.8928 20.6078L20.9211 16.0541L14.7382 22.1605C14.5967 22.3003 14.4055 22.3781 14.2065 22.3768C14.0076 22.3756 13.8174 22.2954 13.6776 22.1539Z" fill="white" />
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