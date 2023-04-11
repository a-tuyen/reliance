import React from "react";
import FaqItem from "./FaqItem";
import SideBarItem from "./SideBarItem";

const pcData = [
  { category: "Arneson", link: "/products/pleasureCraft/arneson" },
  { category: "Azimut", link: "/products/pleasureCraft/azimut" },
  { category: "Beneteau ", link: "/products/pleasureCraft/beneteau" },
  { category: "Beneteau LC Collars", link: "/products/pleasureCraft/benLC" },
  { category: "Bow Thrusters", link: "/products/pleasureCraft/bowThruster" },
  { category: "Bennett Anodes", link: "/products/pleasureCraft/bnt" },
  {
    category: "Caterpillar Engine",
    link: "/products/pleasureCraft/caterpillar",
  },
  { category: "De-Icer Shaft Anode", link: "/products/pleasureCraft/deIcer" },
  { category: "Detroit Diesel Anode", link: "/products/pleasureCraft/deIcer" },
  { category: "Donut Anodes", link: "/products/pleasureCraft/donut" },
  { category: "Engine Anodes", link: "/products/pleasureCraft/engine" },
  { category: "Fernstrum", link: "/products/pleasureCraft/fernstrum" },
  { category: "Frigoboat Anodes", link: "/products/pleasureCraft/frigoboat" },
  { category: "Galvion Anodes", link: "/products/pleasureCraft/galvion" },
  {
    category: "Gori Prop Nuts & Rings",
    link: "/products/pleasureCraft/gori",
  },
  { category: "Grouper Anodes", link: "/products/pleasureCraft/grouper" },
  { category: "Hamilton Jet", link: "/products/pleasureCraft/hj" },
  { category: "Honda Anodes", link: "/products/pleasureCraft/honda" },
  { category: "Hull Anodes", link: "/products/pleasureCraft/Hull" },
  {
    category: "Individual Anode Kits",
    link: "/products/pleasureCraft/indivKits",
  },
  {
    category: "Keel Cooler Anodes",
    link: "/products/pleasureCraft/keelCooler",
  },
  { category: "Maxi Prop", link: "/products/pleasureCraft/maxiProp" },
  {
    category: "Mercury Anodes",
    link: "/products/pleasureCraft/mercury",
  },
  {
    category: "Mercury Anode Kits",
    link: "/products/pleasureCraft/mercuryKits",
  },
  { category: "Miscellaneous", link: "/products/pleasureCraft/misc" },
  {
    category: "Nissan / Tohatsu Outdrives",
    link: "/products/pleasureCraft/nissan",
  },
  {
    category: "OMC/Johnson Evinrude Anodes",
    link: "/products/pleasureCraft/omc",
  },
  { category: "Propeller Nuts", link: "/products/pleasureCraft/propNuts" },
  {
    category: "Quick BTQ Thrusters",
    link: "/products/pleasureCraft/btq",
  },
  { category: "Rudder Anodes", link: "/products/pleasureCraft/rudder" },
  { category: "Sea Strainer Anodes", link: "/products/pleasureCraft/strainer" },
  { category: "Shaft Anodes", link: "/products/pleasureCraft/shaft" },
  {
    category: "Side Power Thrusters",
    link: "/products/pleasureCraft/sidePower",
  },
  { category: "Spur Line Cutter", link: "/products/pleasureCraft/spur" },
  { category: "Suzuki Anodes", link: "/products/pleasureCraft/suzuki" },
  { category: "Teardrop Anodes", link: "/products/pleasureCraft/teardropPC" },
  { category: "Vetus Anodes", link: "/products/pleasureCraft/vetus" },
  { category: "Volvo Penta Anodes", link: "/products/pleasureCraft/volvo" },
  { category: "Volvo Anode Kits", link: "/products/pleasureCraft/volvoKits" },
  { category: "Yamaha Anodes", link: "/products/pleasureCraft/yamaha" },
  {
    category: "Yamaha Anodes Kits",
    link: "/products/pleasureCraft/yamahaKits",
  },
  { category: "Yanmar Marine Anodes", link: "/products/pleasureCraft/yanmar" },
  { category: "Plate Anodes", link: "/products/pleasureCraft/plates" },
];

const SideBarPC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {/* <h4 className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">Pleasure Craft</h4> */}
        {pcData.map((item, id) => (
          <SideBarItem key={id} category={item.category} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default SideBarPC;
