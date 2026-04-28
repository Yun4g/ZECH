"use client";

import { useState } from "react";
import CoreValues from "@/components/LandingPage/coreValues";
import Footer from "@/components/LandingPage/footer";
import ServicesSection from "@/components/LandingPage/OurServices";
import Partners from "@/components/LandingPage/partners";
import HeroSection from "@/components/LandingPage/section1";
import VisitOffice from "@/components/LandingPage/visitOffice";
import WorkProcess from "@/components/LandingPage/WorkPress";
import Image from "next/image";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About us", "Services", "Projects"];

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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F2F2F2]">
      <nav className={` ${menuOpen ? 'bg-[#22222280]' : ''} fixed inset-x-0 top-0 z-50  md:bg-[#22222280]  lg:backdrop-blur-[2px]  px-4 py-3.5 sm:px-6 md:px-10 lg:px-16`}>
        <div className=" flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image width={40} height={40} src="/zoilLogo.png" alt="Zech Oil and Gas Logo" className="h-10 w-auto" />
            <h1 className="hidden md:block text-base font-bold uppercase  text-white sm:text-lg">ZECH OIL AND GAS</h1>
          </div>

          <div className="hidden items-center gap-16 lg:flex">
            {navItems.map((label) => (
              <button key={label} className="flex items-center gap-2 text-sm font-medium text-white transition">
                <span>{label}</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
                </svg>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden rounded-2xl border border-white/15 bg-[#222222dd] p-3 text-white transition duration-300 hover:border-white/30 hover:bg-white/15"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full bg-white origin-center transition-all duration-300 ease-in-out 
    ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full bg-white origin-center transition-all duration-200 ease-out 
    ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full bg-white origin-center transition-all duration-300 ease-in-out 
    ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}
                />
              </span>
            </button>

            <div className="hidden rounded-full border border-white/20 bg-white/10 pe-1 py-1 w-70.75 lg:flex justify-end">
              <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="32" rx="16" fill="white" />
                <path d="M15.5552 20.8663C19.318 20.8663 22.3683 17.816 22.3683 14.0533C22.3683 10.2905 19.318 7.24023 15.5552 7.24023C11.7925 7.24023 8.74219 10.2905 8.74219 14.0533C8.74219 17.816 11.7925 20.8663 15.5552 20.8663Z" stroke="#006600" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.4219 18.9199L26.2616 24.7597" stroke="#006600" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className={`${menuOpen ? 'opacity-100' : 'opacity-0'} mt-4 rounded-3xl border border-white/10 bg-[#111111ee] transition duration-500 p-5 text-white shadow-2xl md:hidden`}>
          <div className="space-y-3">
            {navItems.map((label) => (
              <button key={label} className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#222222] px-5 py-3 text-left text-sm font-semibold text-white transition hover:border-[#6b8f6b] hover:bg-[#1d331d]">
                <span>{label}</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </nav>


      <main className="w-full">
        <section className="flex flex-col items-center max-h-screen h-screen w-full">
          <HeroSection />

          <section className=" w-full md:w-fit z-40 transform p-[10.66px] md:-translate-y-1/2 bg-white flex items-center justify-center h-fit md:shadow-md shadow-[#00000040] md:rounded-[21.8px] mx-auto mb-2.5 md:mb-20">
            <div className="flex flex-col md:flex-row  items-center justify-center md:gap-10 w-full">
              {Details.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row  items-center md:gap-5.25">

                  <div className="flex flex-col items-center justify-center py-2.5 px-3.5">
                    <h1 className=" text-[20px] md:text-[38.5px] font-bold text-[#000000]">
                      {item.title}
                    </h1>
                    <p className="text-xl mt-[10.79px] font-medium text-[#4E4E4E]">
                      {item.description}
                    </p>
                  </div>


                  {index !== Details.length - 1 && (
                    <div className=" h-1.5 md:h-16  w-full  md:w-[2.3px] bg-[#4E4E4E66]" />
                  )}

                </div>
              ))}
            </div>
          </section>

          <section>
            <Partners />

          </section>

          <section className="w-full  md:px-16 md:py-10 md:mt-25 ">
            <CoreValues />
          </section>

          <section className="w-full px-4  md:px-16 md:py-10 md:mt-25 ">
            <ServicesSection />
          </section>


          <section className="w-full px-4  md:px-16 py-8 md:py-10  ">
            <WorkProcess />
          </section>

          <section className="w-full md:px-16 py-25   visitbg h-fit  md:mt-25 ">
            <VisitOffice />
          </section>

          <section className="w-full  md:px-16 py-25  ">
            <Footer />
          </section>
        </section>


      </main>



    </div>
  );
}
