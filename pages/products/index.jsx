import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import SideBarComm from "@/components/SideBarComm";
import SideBarPC from "@/components/SideBarPC";

const index = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Hero
        heading={"OUR PRODUCTS"}
        message={
          "We offer anodes to protect a wide range of Commercial and Pleasure Craft assets as well as Zinc caps for underground asset protection"
        }
        img={"bg-img6"}
      />
      {/* <div className="flex flex-col lg:flex-row items-center lg:justify-items-end lg:align-center pt-10 lg:py-20 w-[100%] border-8"> */}
      <h2 className="mt-10">SACRIFICIAL ANODES</h2>
      <section className="flex flex-col lg:flex-row w-[100%] justify-center lg:items-start lg:ml-[20vw]">
        
        <div className="">
          <h2 className="my-6">Commercial</h2>
          <SideBarComm />
        </div>
        <div className="lg:ml-[10%] mb-6">
          <h2 className="whitespace-nowrap my-6">Pleasure Craft</h2>
          <SideBarPC />
        </div>
        <div className="lg:ml-[10%] mb-6">
          <h2 className="whitespace-nowrap my-6">Zinc Caps</h2>
          <div>
            <ul>
              <li className="border-[1px] border-white bg-gray-300  text-center w-[100%] px-4 mx-0">
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
  );
};

export default index;
