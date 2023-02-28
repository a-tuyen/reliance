import React from "react";
import Link from "next/link";

const SideBarItem = ({ category, link }) => {
  return (
    <div>
      <ul>
      <Link href={link}><li className="border-[1px] border-white bg-gray-300 w-[16%] text-center">
          {category}
        </li></Link>
      </ul>
    </div>
  );
};

export default SideBarItem;
