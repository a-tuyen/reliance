import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-[#4C4E52]">
    <div className="bg-black/[30%] h-[17rem] w-[90%] md:w-[70%] lg:w-[35%] pl-[1rem] ml-[2%]  ">
      <ul className="text-white text-xl ">
        <h2 className="text-3xl pt-8 pb-3">WE ARE HERE TO HELP</h2>
        <li className="flex items-center p-2">
          <GiRotaryPhone size={30}/> <p className="pl-2">1 (877) 420 3731</p>
        </li>
        <li className="flex items-center p-2">
          <IoIosMail size={30} /><p className="pl-2">info@metaldist.com</p>
        </li>
        <li className="flex items-center p-2">
            <TbMap2 size={30} /><p className="pl-2">7220 Winston Street, Burnaby, BC V5A 2G9</p>
        </li>
        <li>
          <p className="pt-2">Copyright © 2022 Metal Distributors LTD</p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Footer;
