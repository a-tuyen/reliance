import React from "react";
import Link from "next/link";

const SideBarItem = ({ category, link }) => {
  return (
    <div>
      <ul>
        <li className="border-[1px] border-white bg-gray-300  text-center w-[100%]">
          <Link href={link}>{category}</Link>
        </li>
      </ul>
    </div>

    

    
  );
};

export default SideBarItem;


