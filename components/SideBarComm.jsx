import React from "react";
import SideBarItem from "./SideBarItem";

const commData = [
    { category: "Ballast Tank Anodes", link: "/products/commercial/ballast" },
    { category: "Bolt-On (Pie Anodes)", link: "/products/commercial/boltOn" },
    { category: "Heat Exchanger Anodes", link: "/products/commercial/heatExchanger" },
    { category: "Heater Treater Anodes", link: "/products/commercial/heaterTreater" },
    { category: "Crab Trap Anodes", link: "/products/commercial/crabTrap" },
    { category: "Hull Anodes", link: "/products/commercial/hull" },
    { category: "Plates", link: "/products/commercial/plate" },
    { category: "Propeller Nut Anodes", link: "/products/commercial/propNut" },
    { category: "Rods", link: "/products/commercial/rod" },
    { category: "Semi-Streamlined", link: "/products/commercial/semiStreamlined" },
    { category: "Streamlined Anodes", link: "/products/commercial/streamlined" },
    { category: "Teardrop Anodes", link: "/products/commercial/teardrop" },
     
];




const SideBarComm = () => {
  return (
    
    <div>
    {/* <h4 className="border-[1px] border-white bg-gray-300 w-[100%] text-center uppercase">Commercial Anodes</h4> */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
      {commData.map((item, id) => (
    <SideBarItem key={id} category={item.category} link={item.link} />            
      ))}
</div>
  </div>
    
    // <div className="flex">
    //   <h4 className="border-[1px] border-white bg-gray-300 w-[16%] text-center uppercase">Commercial Anodes</h4>
    //     {commData.map((item, id) => (
    //   <SideBarItem key={id} category={item.category} link={item.link} />            
    //     ))}

    // </div>
  );
};

export default SideBarComm;
