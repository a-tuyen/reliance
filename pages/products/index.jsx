import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import SideBarComm from "@/components/SideBarComm";
import SideBarPC from "@/components/SideBarPC";

const index = () => {
  return (
    <div className="bg-white flex  flex-col justify-center">
      <Hero
        heading={"OUR PRODUCTS"}
        message={
          "We offer anodes to protect a wide range of Commercial and Pleasure Craft assets as well as Zinc caps for underground asset protection"
        }
        img={"bg-img6"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center pt-10 lg:py-20 w-[100%]">
        <div>
        <h2>Commercial</h2>
        <SideBarComm />
        </div>
        <div>
        <h2>Pleasure Craft</h2>
        <SideBarPC />
        </div>
        <main>
          <article></article>
        </main>
      </div>
    </div>
  );
};

export default index;
