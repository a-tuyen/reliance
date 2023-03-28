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
          ""
        }
        img={"bg-img2"}
      />
  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
     <SideBarPC />
     <main>
      <article>

      </article>
     </main>
     </div>
    </div>
  );
};

export default index;
