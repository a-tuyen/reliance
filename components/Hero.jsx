import React from "react";
import Image from "next/image";
import bg1 from "../public/backgrounds/relianceBg1.jpeg";
import bg2 from "../public/backgrounds/relianceBg2.jpeg";
import bg3 from "../public/backgrounds/relianceBg3.jpeg";
import bg4 from "../public/backgrounds/relianceBg4.jpeg";

const Hero = ({ heading, message, img }) => {
  return (
    <div className="h-[100%] pb-0 mb-0">
      <div className="static">
        <Image src={img} alt="" priority fill objectFit="cover" quality={100} />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />
      <div className="flex flex-col items-center p-5 text-white z-[1] mt-[10rem]">
        <h2 className="text-6xl text-white font-boldHeading tracking-wider text-center mt-[13%] z-[1]">
          {heading}
        </h2>
        <p className="flex justify-center w-[70%] py-10 text-3xl text-white text-center font-thin z-[1]">
          {message}
        </p>
      </div>
    </div>
    // <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover bg-img1'>
    // {/* Overlay */}
    // </div>
  );
};

export default Hero;
