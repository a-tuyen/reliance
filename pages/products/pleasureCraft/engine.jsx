import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
const engine = () => {
  return (
    
    <div>
      <Hero
        heading={"Engine Anodes"}
        message={
          "Reliance MDE Series of Marine Engine Anodes consists of a brass plug with anode attached"
        }
      
      img={"bg-img2"}
      />
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main></main>
          </article>
    </div>
    </div>
  );
};

export default engine;
