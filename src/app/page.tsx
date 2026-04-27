"use client";

import CoreValues from "@/components/LandingPage/coreValues";
import Footer from "@/components/LandingPage/footer";
import ServicesSection from "@/components/LandingPage/OurServices";
import Partners from "@/components/LandingPage/partners";
import HeroSection from "@/components/LandingPage/section1";
import VisitOffice from "@/components/LandingPage/visitOffice";
import WorkProcess from "@/components/LandingPage/WorkPress";
import Image from "next/image";

export default function LandingPage() {

  const Details = [
    {
      title: "23+",
      description: "Years Operating "
    },
    {
      title: "9+",
      description: "Major  IOC Clients "
    },
    {
      title: "4+",
      description: "Services Divisions "
    },
    {
      title: "100%",
      description: "Indigenous Ownership"
    },
  ]


  return (
    <div className="min-h-screen w-full  overflow-x-hidden bg-[#F2F2F2]">
      <nav className="md:px-16 md:py-3.75
      fixed top-0 left-0 right-0 z-50 px-4 py-3.75
      flex items-center justify-between bg-[#22222280]">

        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            src="/zoilLogo.png" alt="Zech Oil and Gas Logo" className="h-10 w-auto" />

          <h1 className="text-xl font-bold text-white inline-block ml-3">
            ZECH OIL AND GAS
          </h1>
        </div>

        <div className="hidden md:flex space-x-6 items-center">

          <button className=" text-[13.5px] font-medium text-white flex  items-center gap-1">
            About us

            <span>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
              </svg>

            </span>
          </button>

          <button className=" text-[13.5px] font-medium text-white flex  items-center gap-1.5">
            Services

            <span>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
              </svg>

            </span>
          </button>

          <button className=" text-[13.5px] font-medium text-white flex  items-center gap-1">
            Projects

            <span>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
              </svg>

            </span>
          </button>

        </div>

        <div className=" w-70.75 h-10 bg-[#6a6a6a80] px-1 backdrop-blur-2xl border border-[#B6B6B680] rounded-full flex items-center justify-end cursor-pointer">


          <section>
            <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="32" rx="16" fill="white" />
              <path d="M15.5552 20.8663C19.318 20.8663 22.3683 17.816 22.3683 14.0533C22.3683 10.2905 19.318 7.24023 15.5552 7.24023C11.7925 7.24023 8.74219 10.2905 8.74219 14.0533C8.74219 17.816 11.7925 20.8663 15.5552 20.8663Z" stroke="#006600" stroke-width="1.94659" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.4219 18.9199L26.2616 24.7597" stroke="#006600" stroke-width="1.94659" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </section>
        </div>
      </nav>


      <main className="  w-full   ">
        <section className="flex flex-col items-center max-h-screen h-screen w-full">
          <HeroSection />

          <section className="w-fit z-50 transform p-[10.66px] -translate-y-1/2 bg-white flex items-center justify-center h-fit shadow-md shadow-[#00000040] rounded-[21.8px] mx-auto mb-20">
            <div className="flex items-center justify-center gap-10 w-full">
              {Details.map((item, index) => (
                <div key={index} className="flex items-center gap-5.25">

                  <div className="flex flex-col items-center justify-center py-2.5 px-3.5">
                    <h1 className="md:text-[38.5px] font-bold text-[#000000]">
                      {item.title}
                    </h1>
                    <p className="text-xl mt-[10.79px] font-medium text-[#4E4E4E]">
                      {item.description}
                    </p>
                  </div>


                  {index !== Details.length - 1 && (
                    <div className="h-16 w-[2.3px] bg-[#4E4E4E66]" />
                  )}

                </div>
              ))}
            </div>
          </section>

          <section>
            <Partners />

          </section>

          <section className="w-full  md:px-16 py-10  ">
            <CoreValues />
          </section>

          <section className="w-full  md:px-16 py-10  ">
            <ServicesSection />
          </section>


          <section className="w-full  md:px-16 py-10  ">
            <WorkProcess/>
          </section>

           <section className="w-full  md:px-16 py-25   visitbg h-fit  mt-25 ">
              <VisitOffice/>
          </section>
          
           <section className="w-full  md:px-16 py-25  ">
              <Footer/>
           </section>
        </section>


      </main>



    </div>
  );
}
