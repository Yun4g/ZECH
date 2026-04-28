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
  console.log(menuOpen, "menu open state")
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
      <nav className={` ${menuOpen ? 'bg-[#22222280]' : ''} fixed inset-x-0 top-0 z-50  lg:bg-[#22222280]  lg:backdrop-blur-[2px]  px-4 py-3.5 sm:px-6 md:px-10 lg:px-16`}>
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

            <div className="hidden lg:flex">
              <button
                className='bg-white rounded-full ps-4 py-[3.58px] w-fit flex items-center gap-3  cursor-pointer'

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
              </button>
            </div>
          </div>
        </div>

        <div className={`${menuOpen ? 'opacity-100' : 'opacity-0'} mt-4 rounded-3xl border border-white/10 bg-[#111111ee] transition duration-500 p-5 text-white shadow-2xl lg:hidden`}>
          <div className="space-y-3">
            {navItems.map((label) => (
              <button key={label} className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#222222] px-5 py-3 text-left text-sm font-semibold text-white transition hover:border-[#6b8f6b] hover:bg-[#1d331d]">
                <span>{label}</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05073 6.30865L0.00363159 1.26155L1.26518 0L5.6815 4.41632L10.0978 0L11.3594 1.26155L6.31228 6.30865C6.14497 6.47591 5.91808 6.56987 5.6815 6.56987C5.44493 6.56987 5.21804 6.47591 5.05073 6.30865Z" fill="white" />
                </svg>
              </button>
            ))}

             <button
                className='bg-white text-black rounded-full ps-4 py-[3.58px] w-fit flex items-center gap-3  cursor-pointer'

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
              </button>
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
