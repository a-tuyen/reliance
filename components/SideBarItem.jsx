import React from "react";
import Link from "next/link";

const SideBarItem = ({ category, link }) => {
  return (
    <div>
      <ul className="flex items-center h-[100%]">
        <li className="border-[1px] border-white bg-gray-300  text-center w-[100%] px-4 mx-0 h-full">
          <Link href={link}>{category}</Link>
        </li>
      </ul>
    </div>

    

    
  );
};

export default SideBarItem;


