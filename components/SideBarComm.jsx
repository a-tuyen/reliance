import React from "react";
import SideBarItem from "./SideBarItem";

const commData = [
    { category: "Ballast Tank Anodes", link: "/products/commercial/ballast" },
    { category: "Bolt-On (Pie Anodes)", link: "/products/commercial/boltOn" },
    { category: "Rods", link: "/products/commercial/rod" },
    { category: "Plates", link: "/products/commercial/plate" },
    { category: "Crab Trap Anodes", link: "/products/commercial/crabTrap" },
    { category: "Heat Exchanger Anodes", link: "/products/commercial/heatExchanger" },
    { category: "Heater Treater Anodes", link: "/products/commercial/heaterTreater" },
    { category: "Hull Anodes", link: "/products/commercial/Hull" },
    { category: "Propeller Nut Anodes", link: "/products/commercial/PropNut" },
    { category: "Semi-Streamlined Anodes", link: "/products/commercial/semiStreamlined" },
    { category: "Weld On and Bolt On Anodes", link: "/products/commercial/weldOn" },
    { category: "Streamlined Anodes", link: "/products/commercial/streamlined" },
    { category: "Teardrop Anodes", link: "/products/commercial/Teardrop" },
     
];




const SideBarComm = () => {
  return (
    <div>
      <h2 className="border-[1px] border-white bg-gray-300 w-[16%] text-center uppercase">Commercial Anodes</h2>
        {commData.map((item, id) => (
      <SideBarItem key={id} category={item.category} link={item.link} />            
        ))}

    </div>
  );
};

export default SideBarComm;
