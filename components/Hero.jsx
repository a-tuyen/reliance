import React from "react";
import Image from "next/image";
import bg1 from '../public/backgrounds/relianceBg1.jpeg'
import bg2 from '../public/backgrounds/relianceBg2.jpeg'
import bg3 from '../public/backgrounds/relianceBg3.jpeg'
import bg4 from '../public/backgrounds/relianceBg4.jpeg'


const Hero = ({ heading, message }) => {
  const imgArr = ["img", "img2", "img3", "img4"];

  const picSelector = bg2; 

  // const picSelector = () => {

  //   return bg2;
  
  // };


  return (
    <div className="h-screen">
      <div className="static">
        <Image src={picSelector} fill objectFit="cover" quality={100} />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
        <div className='flex flex-col items-center p-5 text-white z-[2] mt-[10rem]'>
            <h2 className='text-6xl text-white font-boldHeading tracking-wider text-center z-40'>{heading}</h2>
            <p className='flex justify-center w-[70%] py-10 text-3xl text-white text-center font-thin z-40'>{message}</p>
        </div>
    </div>
    // <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover bg-img1'>
        // {/* Overlay */}
    // </div>
  );
};

export default Hero;
