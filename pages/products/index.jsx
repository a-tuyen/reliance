import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import SideBarComm from "@/components/SideBarComm";
import SideBarPC from "@/components/SideBarPC";

const index = () => {
  return (
    <div className="bg-white flex flex-col justify-center w-[100%]">
      <Hero
        heading={"OUR PRODUCTS"}
        message={
          "We offer anodes to protect a wide range of Commercial and Pleasure Craft assets as well as Zinc Caps for underground asset protection"
        }
        img={"bg-img6"}
      />
      <div className="flex flex-col items-center w-[100%]">
      <h2 className="mt-10">SACRIFICIAL ANODES</h2>
      <section className="flex flex-col lg:flex-row justify-center">
          <div className="">
            <h2 className="my-6">Commercial</h2>
            <SideBarComm />
          </div>
          <div className="mb-6 lg:mx-[20%]">
            <h2 className="whitespace-nowrap my-6">Pleasure Craft</h2>
            <SideBarPC />
          </div>
          <div className="mb-6">
            <h2 className="whitespace-nowrap my-6">Zinc Caps</h2>
            <div>
              <ul>
                <li className="border-[1px] border-white bg-gray-300  text-center px-4 mx-0">
                  <Link href="/products/zincCap">Zinc Anode Caps</Link>
                </li>
              </ul>
            </div>
          </div>
          <main>
            <article></article>
          </main>
        </section>
      </div>
    </div>
  );
};

export default index;
