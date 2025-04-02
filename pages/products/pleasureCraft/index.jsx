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
          "Designed with precision and care, our anodes for recreational vessels offer a reliable, OEM-style fit and long-lasting protection."
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
