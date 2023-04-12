import React from "react";
import Image from "next/image";
import bg1 from "../public/backgrounds/relianceBg1.jpeg";
import bg2 from "../public/backgrounds/relianceBg2.jpeg";
import bg3 from "../public/backgrounds/relianceBg3.jpeg";
import bg4 from "../public/backgrounds/relianceBg4.jpeg";


const Hero = ({ heading, message, img }) => {
  return (
    <div className="h-[100%] pb-0 mb-0">
    <div className={`relative items-center justify-center h-[100vh] mb-0 z-1 bg-fixed bg-center bg-cover ${img}`}></div>
      {/* <div>
        <Image src={bg1} alt="/" priority fill objectFit="cover" objectPosition="center" quality={100} className="z-0 top-0 left-0" />
      </div> */}
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] bg-black/30 z-[1]" />
      <div className="flex flex-col items-center text-white z-[1]">
        <h1 className="absolute text-white tracking-wider top-[40%] text-center z-[10] px-4">
          {heading}
        </h1>
        <p className="absolute justify-center w-[80%] md:[70%] py-2 md:py-10 top-[60%] sm:top-[55%] font-heading text-2xl md:text-3xl text-white text-center font-thin z-[10]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Hero;
