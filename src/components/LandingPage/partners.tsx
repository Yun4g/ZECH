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
  const multiplied = 49;

  const multipliedLogos = Array(multiplied).fill(logos).flat();





  return (
    <section className="w-full bg-[#f3f3f3]  overflow-hidden ">
      <div className="flex justify-center md:mb-16">
        <div className="text-[#006600] p-2.5  rounded-full text-lg md:text-3xl font-medium">
          Trusted Partners
        </div>
      </div>


      <div className="relative w-full overflow-hidden pause-on-hover">
        
        <div className="flex w-max whitespace-nowrap animate-scroll gap-16">

          {multipliedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-30 shrink-0"
            >
              <Image
                src={logo}
                alt="partner logo"
                width={70}
                height={40}
                className="object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}