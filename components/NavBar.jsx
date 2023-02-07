import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import navlogotransparent from "../public/navlogotransparent";
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
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
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
          {/* <Image src='/../public/navlogotransparent.png' width='87' height='35' /> */}
          <Image src='https://user-images.githubusercontent.com/77664153/217392543-b5a88ff3-8546-4130-87fb-4b385a295ee6.png' width='87' height='35' />
          {/* <Image src='https://user-images.githubusercontent.com/77664153/217392544-87c17d30-7161-485c-b09e-7fa0500c7425.png' width='87' height='35' /> */}
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
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={() => {
                setNav(false);
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setNav(false);
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              onClick={() => {
                setNav(false);
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/technical info">Technical Info</Link>
            </li>
            <li
              onClick={() => {
                setNav(false);
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/faq">FAQ</Link>
            </li>
            <li
              onClick={() => {
                setNav(false);
              }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={() => {
                setNav(false);
              }}
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
