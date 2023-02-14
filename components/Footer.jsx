import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { SiOpenstreetmap } from "react-icons/si";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-[#4C4E52]">
    <div className="bg-black/[40%] h-[17rem] w-[20rem] pl-[1rem] ">
      <ul className="text-white">
        <h2>WE ARE HERE TO HELP</h2>
        <li className="flex items-center">
          <GiRotaryPhone size={30}/> <p className="pl-2">1 (877) 420 3731</p>
        </li>
        <li className="flex items-center">
          <IoIosMail size={30} /><p className="pl-2">info@metaldist.com</p>
        </li>
        <li className="flex items-center">
            <TbMap2 size={30} />
          <p className="pl-2">7220 Winston Street, Burnaby, BC V5A 2G9</p>
        </li>
        <li>
          <p>Copyright © 2022 Metal Distributors LTD</p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Footer;
