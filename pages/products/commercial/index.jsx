import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";
import SideBarComm from "@/components/SideBarComm";

const index = () => {
  return (
    <div className="bg-white flex  flex-col justify-center">
      <Hero
        heading={"Commercial Anodes"}
        message={
          "We offer anodes to protect a wide range of commercial assets including: Merchant and naval vessels, piers, dry docks and retaining walls, offshore drilling platforms and pipelines and oceanographic equipment"
        }
        img={"bg-img5"}
      />
      <section>
        <SideBarComm />
      </section>
    </div>
  );
};

export default index;