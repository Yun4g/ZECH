"use client";

import Image from "next/image";

const logos = [
  "/shell-logo.png",
  "/nillon.png",
  "/nnpc.png",
  "/lexOillogo.png",
  "/nnpc.png",
  "/dangote.png",
  "/nlng.png",
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f3f3f3] py-2 md:py-4 overflow-hidden">
      
   
      <div className="flex justify-center md:mb-15">
        <div className="text-[#006600] p-2.5  rounded-full text-lg md:text-3xl font-medium">
        Trusted Partners
        </div>
      </div>


      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-16">
          
   
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-30">
              <Image
                src={logo}
                alt="partner logo"
                width={100}
                height={40}
                className="object-contain w-auto h-auto"
              />
            </div>
          ))}

         
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center min-w-30">
              <Image
                src={logo}
                alt="partner logo"
                width={100}
                height={40}
                className="object-contain w-auto h-auto"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}