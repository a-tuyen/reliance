import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import SideBarPC from "@/components/SideBarPC";

const index = () => {
  return (
    <div className="bg-white flex  flex-col justify-center">
      <Hero
        heading={"Pleasure Craft Anodes"}
        message={
          "We carry a variety of anodes for pleasure craft vessels. All carefully designed by our skilled technicians to fit like an OEM part"
        }
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:items-center pt-10 lg:py-20 w-[100%] mb-10 lg:mb-6">
        <SideBarPC />
        <main>
          <article>
            {/* <h3></h3> */}
          </article>
        </main>
      </div>
    </div>
  );
};

export default index;
