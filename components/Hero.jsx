import React from "react";
import Image from "next/image";
import bg1 from '../public/backgrounds/relianceBg1.png'
import bg2 from '../public/backgrounds/relianceBg2.jpeg'


const Hero = ({ heading, message }) => {
  const imgArr = ["img", "img2", "img3", "img4"];

  const pic = () => {
    return "../public/backgrounds/relianceBg1.png";
  };

  const picSelector = "img3";

  return (
    <div className="h-screen">
      <div className="absolute -z-10">
        <Image src={pic} width={1280} height={1000} quality={100} />
      </div>
      <div classname="bg-white" > Some overlay things go in here </div>
    </div>
    // <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover bg-img1'>
    //     {/* Overlay */}
    //     <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
    //     <div className='flex flex-col items-center p-5 text-white z-[2] mt-[10rem]'>
    //         <h2 className='text-6xl text-white font-boldHeading tracking-wider text-center'>{heading}</h2>
    //         <p className='flex justify-center w-[70%] py-10 text-3xl text-white text-center font-thin'>{message}</p>
    //     </div>
    // </div>
  );
};

export default Hero;
