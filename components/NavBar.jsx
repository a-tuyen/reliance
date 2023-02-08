import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { CgCloseO} from "react-icons/cg";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor('#52525b');
      } else {
        setColor("transparent");
        setTextColor("#d4d4d8");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <div className="logo-img"></div>
          <Image src='https://user-images.githubusercontent.com/77664153/217392543-b5a88ff3-8546-4130-87fb-4b385a295ee6.png' width='250' height='30'  />

          {/* <Image src='https://user-images.githubusercontent.com/77664153/217392544-87c17d30-7161-485c-b09e-7fa0500c7425.png' width='250' height='35' /> */}
          {/* <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl '> Reliance
                    </h1> */}
        </Link>
        
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/products">Products</Link>
          </li>
          <li className="p-4">
            <Link href="/technical info">Technical Info</Link>
          </li>
          <li className="p-4">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <CgCloseO size={70} style={{ color: `${textColor}` }} />
          ) : (
            <HiMenu size={70} style={{ color: `${textColor}` }} />
          )}
        </div>
        
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "med:hidden absolute top-0 left-[50%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#0284c7] z-5 text-center ease-in duration-300"
              : "med:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#0089B9] text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/technical info">Technical Info</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/faq">FAQ</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
