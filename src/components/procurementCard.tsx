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

                            <button className="bg-white text-black rounded-full px-4 py-2 w-fit flex items-center gap-2 mt-4 md:mt-0">
                                <span className="text-sm font-medium">See Project</span>
                                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center">↗</span>
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