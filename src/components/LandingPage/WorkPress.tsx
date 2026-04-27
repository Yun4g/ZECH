"use client";

import Image from "next/image";

export default function WorkProcess() {
    return (
        <section>


            <h1 className="text-[22px] md:text-[72px] lg:text-[150px] text-center w-full font-bold text-black mb-12">
                Work Process
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-20">


                {
                    [
                        {
                            num: "01",
                            title: "Consultation & Planning",
                             subtitle: <>Shaping the Foundation of <br /> Success</>,
                            desc: `We begin by thoroughly understanding 
                            your needs, defining clear goals, and crafting situations`,
                        },
                        {
                            num: "02",
                            title: "Execution & Implementation",
                            subtitle: "Transforming Ideas into Tangible Results",
                            desc: "Our team applies advanced techniques, innovative technology, and precision execution",
                        },
                        {
                            num: "03",
                            title: "Delivery & Support",
                            subtitle: "Commited to Quality and Continued Growth",
                            desc: "We begin by thoroughly understanding your needs, defining clear goals, and crafting situations",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white px-4 py-4 md:px-5 md:py-9  rounded-xl md:rounded-[31px]  "
                        >
                            <h2 className="text-[40px] md:text-[76px] font-bold text-black ">
                                {item.num}
                            </h2>
                                    
                            <p className="text-[#006600] font-semibold max-w- mb-4 text-base md:text-xl">
                                {item.title}
                            </p>

                            <h3 className="font-bold text-black  text-base md:text-[20px]">
                                {item.subtitle}
                            </h3>

                            <p className="text-[#000000] md:mt-4 font-normal text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))
                }

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                    <p className="text-[#006600] font-semibold mb-3 text-[24px] ">
                        Our Projects
                    </p>

                    <h2 className="text-[20px] md:text-[48px] font-medium leading-tight mb-4">
                        Built to perform,
                        <br /> proven to last
                    </h2>

                    <p className="text-[#000000] text-sm  font-medium  mb-12">
                        From offshore platforms to onshore industries, Zech oil & gas delivers projects across the globe combining deep engineering expertise with proven operational excellence to bring every site online safely and efficiently.
                    </p>


                    <div className=" flex items-end gap-3 ">
                        <div className=" h-34.25 w-34.25 rounded-xl overflow-hidden">
                            <Image
                                src="/workProces 1.jpg"
                                alt="pipes"
                                width={137}
                                height={137}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className=" h-34.25 w-34.25 rounded-xl overflow-hidden translate-y-10">
                            <Image
                                src="/workProces2.jpg"
                                alt="plant"
                                width={137}
                                height={137}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-1 mt-4.5 lg:mt-0">

                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm flex flex-col lg:flex-row justify-between items-center">
                        <h3 className="font-semibold text-black max-w-xs text-base  md:text-[20px]">
                            Procurement Of Marine Hoses
                        </h3>

                        <button className="border border-gray-400 px-2 py-1 rounded-md mt-1.5  lg:mt-0  text-base">
                            View Project
                        </button>
                    </div>


                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm flex  flex-col lg:flex-row justify-between items-center">
                        <h3 className="font-semibold text-black max-w-xs text-base md:text-[20px]">
                            Refurbishment and Resetting of Marine Break Way Couplings
                        </h3>

                        <button className="border border-gray-400 px-2 py-1 mt-1.5  lg:mt-0 rounded-md text-base  ">
                            View Project
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}