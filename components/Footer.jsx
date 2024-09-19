import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#4C4E52] flex flex-col lg:flex-row">
        <div className="bg-[#393b3e] h-[17rem] w-[100%] md:w-[60%] lg:w-[35%] pl-[2%] ml-[0] md:ml-[4%] flex justify-center border-solid border-5 border-blue-500">
          <ul className="text-white text-xl">
            <h4 className="text-4xl pt-6 pb-3 font-heading tracking-wide z-40">
              WE ARE HERE TO HELP
            </h4>
            <li className="flex items-center p-2 z-40">
              <GiRotaryPhone size={30} />{" "}
              <p className="pl-2">1 (877) 420 3731</p>
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
   
        <div className="flex-col justify-center lg:justify-end items-center w-[100%] py-2.5 border-solid border-5 border-red-500">
          <Image
            className="flex pr-2"
            src="/images/made-in-canada-reliance.png"
            width={80}
            height={50}
          />
          <div className="flex flex-col text-white text-s lg:text-base text-left font-fancy w-[25%] lg:w-[15%] lg:pl-2">
            <p>PROUDLY</p> <p>MADE IN</p> <p>CANADA</p>
          </div>
        </div>
  
        </div>
    </>
  );
};

export default Footer;
