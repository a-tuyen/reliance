import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import Image from "next/image";

// bg-[#393b3e]

const Footer = () => {
  return (
    <>
      <div className="bg-[#393b3e] md:bg-[#4C4E52] flex flex-col md:flex-row items-center justify-between w-[100%]">
        {/* <div className="h-[25vw] w-[100%] md:w-[60%] lg:w-[35%] pl-[2%] ml-[0] md:ml-[4%] flex justify-center"> */}

        <div className="flex flex-col items-center w-[100%] bg-[#393b3e] md:w-[60%] lg:w-[35%] pl-[%] ml-[0] md:ml-[4%] justify-center">
          <ul className="text-white text-xl px-3 pb-3">
            <h4 className="text-4xl pt-6 pb-3 font-heading tracking-wide z-40">
              WE ARE HERE TO HELP
            </h4>
            <li className="flex items-center p-2 z-40">
              <GiRotaryPhone size={30} />{" "}
              <div className="flex flex-col md:flex-row">
              <p className="pl-2">604 420 3731 /</p>
              <p className="pl-2">1 (877) 420 3731</p>
              </div>
            </li>
            <li className="flex items-center p-2">
              <IoIosMail size={30} />
              <p className="pl-2 ">info@metaldist.com</p>
            </li>
            <li className="flex items-center p-2">
              <TbMap2 size={30} />
              <p className="pl-2">7220 Winston Street, Burnaby, BC V5A 2G9</p>
            </li>
            <li>
              <p className="pt-2">Copyright © 2022 Metal Distributors LTD</p>
            </li>
          </ul>
        </div>
   
        <div className=" flex flex-col justify-center items-center md:items-center md:mr-4">
          <Image
            className="flex pr-2"
            src="/images/made-in-canada-reliance.png"
            width={100}
            height={50}
          />
          <div className="flex md:flex-col text-white text-s text-center font-fancy">
            <p className="pr-1 md:pr-0">PROUDLY</p> <p className="pr-1 md:pr-0">MADE IN</p> <p>CANADA</p>
          </div>
        </div>
  
        </div>
    </>
  );
};

export default Footer;
