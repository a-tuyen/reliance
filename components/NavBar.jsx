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
        setColor("rgba(0, 0, 0, 0.2)");
        setTextColor("#d4d4d8");
        setLogoDark(false);
      }
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
          <div className={logoDark ? "fixed top-3.5 left-4.5" : " md-hidden"}>
            <Image
              src="https://user-images.githubusercontent.com/77664153/217392543-b5a88ff3-8546-4130-87fb-4b385a295ee6.png"
              width="200"
              height="30"
            />
          </div>
          {/* White Logo */}
          <div className={logoDark ? "md-hidden" : "fixed top-4 left-3.8"}>
            <Image
              src="https://user-images.githubusercontent.com/77664153/217941326-12656f81-91f2-4e81-982b-f6a1a55bfa1b.png"
              width="200"
              height="30"
            />
          </div>
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className=" z-40 fixed right-5 top-22 hidden md:flex h-9 text-xl"
        >
          <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52]">
            <Link href="/">Home</Link>
          </li>

          <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
            <Link href="/about">About Us</Link>
          </li>

          <li
            class=" flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52]"
          >
            <div class="relative group">
              <Link href="#">Products</Link>
              <div class="absolute z-10 hidden bg-grey-300 group-hover:block mt-[0px]">
                <div class="bg-gray-200 shadow-lg">
                  <div class="w-[100%] text-blaxk">
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]" href="/" >Commercial Anodes</Link>
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]" href="/" >Pleasure Craft Anodes</Link>
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px] pb-[5px]" href="/" >Zinc Caps</Link>

                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            class=" flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52]"
          >
            <div class="relative group">
              <Link href="#">Technical Info
              </Link>
              <div class="absolute z-10 hidden bg-grey-300 group-hover:block mt-[0px]">
                <div class="bg-gray-200 shadow-lg">
                  <div class="w-[100%]">
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]" href="/" >Why Choose Mil-Spec?</Link>
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px]" href="/" >Boat Protection Basics</Link>
                    <Link className="whitespace-nowrap block hover:bg-[#587cc5] px-[8px] pt-[5px] pb-[5px]" href="/" >FAQ</Link>


                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-center mx-2 hover:text-[#4C4E52] hover:border-b-[2px] border-solid border-[#4C4E52] ">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="absolute right-4 top-10 md:hidden z-10"
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
                <Link href="/about">About Us</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/about">Products</Link>
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
