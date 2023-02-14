import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoDark, setLogoDark] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#52525b");
        setLogoDark(true);
      } else {
        setColor("transparent");
        setTextColor("#d4d4d8");
        setLogoDark(false);
      }
      return console.log(logoDark);
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-[100%] z-40 ease-in duration-300 block"
    >
      <div className="m-auto flex justify-between items-end p-4 z-1 text-white  z-10">
        <Link href="/">
          {/* Dark Logo  */}
          <div className={logoDark ? "fixed top-3.5 left-4.5" : " sm-hidden"}>
            <Image
              src="https://user-images.githubusercontent.com/77664153/217392543-b5a88ff3-8546-4130-87fb-4b385a295ee6.png"
              width="200"
              height="30"
            />
          </div>
          {/* White Logo */}
          <div className={logoDark ? "sm-hidden" : "fixed top-4 left-3.8"}>
            <Image
              src="https://user-images.githubusercontent.com/77664153/217941326-12656f81-91f2-4e81-982b-f6a1a55bfa1b.png"
              width="200"
              height="30"
            />
          </div>
        </Link>

        <ul style={{ color: `${textColor}` }} className=" z-40 fixed right-5 top-15 hidden sm:flex">
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
          <li className="p-4 pr-0 mr-0">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="absolute right-4 top-10 sm:hidden z-10"
        >
          {nav ? (
            <CgCloseO size={70} style={{ color: `${textColor}` }} />
          ) : (
            <HiMenu size={70} style={{ color: `${textColor}` }} />
          )}
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40"
              : ""
          }
        >
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "md:hidden absolute top-0 left-[50%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#5c90d2] z-5 text-center ease-in duration-300"
                : "md:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#5c90d2] text-center ease-in duration-300"
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
    </div>
  );
};

export default NavBar;
