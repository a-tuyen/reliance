import React from "react";
import FaqItem from "./FaqItem";
import SideBarItem from "./SideBarItem";

const pcData = [
  { category: "Arneson", link: "/products/pleasureCraft/arneson" },
  { category: "Azimut", link: "/products/pleasureCraft/azimut" },
  // { category: "Beneteau ", link: "/products/pleasureCraft/beneteau" },
  { category: "Beneteau LC Collars", link: "/products/pleasureCraft/benLC" },
  { category: "Bow Thrusters", link: "/products/pleasureCraft/bowThruster" },
  { category: "Bennett Anodes", link: "/products/pleasureCraft/bnt" },
  {
    category: "Caterpillar Engine",
    link: "/products/pleasureCraft/caterpillar",
  },
  { category: "De-Icer Shaft Anode", link: "/products/pleasureCraft/deIcer" },
  { category: "Detroit Diesel Anode", link: "/products/pleasureCraft/detroit" },
  { category: "Donut Anodes", link: "/products/pleasureCraft/donut" },
  { category: "Engine Anodes", link: "/products/pleasureCraft/engine" },
  { category: "Fernstrum", link: "/products/pleasureCraft/fernstrum" },
  { category: "Flexofold", link: "/products/pleasureCraft/flexofold" },
  { category: "Frigoboat Anodes", link: "/products/pleasureCraft/frigoboat" },
  { category: "Galvion Anodes", link: "/products/pleasureCraft/galvion" },
  {
    category: "Gori Prop Nuts & Rings",
    link: "/products/pleasureCraft/gori",
  },
  { category: "Grouper Anodes", link: "/products/pleasureCraft/grouper" },
  { category: "Hamilton Jet", link: "/products/pleasureCraft/hj" },
  { category: "Honda Anodes", link: "/products/pleasureCraft/honda" },
  { category: "Hull Anodes", link: "/products/pleasureCraft/hullPC" },
  {
    category: "Individual Anode Kits",
    link: "/products/pleasureCraft/indivKits",
  },
  {
    category: "Keel Cooler Anodes",
    link: "/products/pleasureCraft/keelCooler",
  },
  { category: "Max Prop", link: "/products/pleasureCraft/maxProp" },
  { category: "MDG Shaft", link: "/products/pleasureCraft/mdg" },

  {
    category: "Mercury Anodes & Kits",
    link: "/products/pleasureCraft/mercury",
  },
  {
    category: "MJP UltraJet Anodes",
    link: "/products/pleasureCraft/mjp",
  },
  { category: "Nanni", link: "/products/pleasureCraft/nanni" },
  {
    category: "Nissan / Tohatsu Outdrives",
    link: "/products/pleasureCraft/nissan",
  },
  {
    category: "OMC/Johnson Evinrude Anodes",
    link: "/products/pleasureCraft/omc",
  },
  { category: "Plate Anodes", link: "/products/pleasureCraft/plate" },
  { category: "Propeller Nut", link: "/products/pleasureCraft/propNut" },
  {
    category: "Reference Zinc Anodes",
    link: "/products/pleasureCraft/reference",
  },
  { category: "Rudder Anodes", link: "/products/pleasureCraft/rudder" },
  { category: "Sea Strainer Anodes", link: "/products/pleasureCraft/strainer" },
  { category: "Shaft Anodes", link: "/products/pleasureCraft/shaft" },
  { category: "Spur Line Cutter", link: "/products/pleasureCraft/spur" },
  { category: "Suzuki Anodes", link: "/products/pleasureCraft/suzuki" },
  { category: "Teardrop Anodes", link: "/products/pleasureCraft/teardropPC" },
  { category: "Varifold Anodes", link: "/products/pleasureCraft/varifold" },
  { category: "Vetus Anodes", link: "/products/pleasureCraft/vetus" },
  { category: "Volvo Anodes", link: "/products/pleasureCraft/volvo" },
  { category: "Yamaha Anodes", link: "/products/pleasureCraft/yamaha" },
  { category: "Yanmar Marine Anodes", link: "/products/pleasureCraft/yanmar" },
];

const SideBarPC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-1">
            {pcData.map((item, id) => (
          <SideBarItem key={id} category={item.category} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default SideBarPC;
