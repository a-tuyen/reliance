import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimPic from "@/components/Chart4DimPic";

const semiStreamlinedWeldData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-3 / MD-ZSS",
    znLb: "10.0 lb",
    znKg: "(4.54 kg)",
    alCode: "MD-Z-3 / AMD-ZSS",
    alLb: "5.0 lb",
    alKg: "(2.27 kg)",
    diaIn: '12"',
    diaMm: "(305 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-4",
    znLb: "5.0 lb",
    znKg: "(2.27 kg)",
    alCode: "AMD-Z-4",
    alLb: "2.1 lb",
    alKg: "(0.95 kg)",
    diaIn: '6"',
    diaMm: "(152 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-6",
    znLb: "3.0 lb",
    znKg: "(1.36 kg)",
    alCode: "AMD-Z-6",
    alLb: "1.3 lb",
    alKg: "(0.59 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-19",
    znLb: "23 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-Z-19",
    alLb: "10.0 lb",
    alKg: "(4.54 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-220",
    znLb: "62.0 lb",
    znKg: "(28.12 kg)",
    alCode: "AMD-Z-220",
    alLb: "26.0 lb",
    alKg: "(11.79 kg)",
    diaIn: '27"',
    diaMm: "(686 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 3/4"',
    cDiaMm: "(44 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-ZC-5",
    znLb: "5.0 lb",
    znKg: "(2.27 kg)",
    alCode: "AMD-ZC-5",
    alLb: "2.1 lb",
    alKg: "(0.95 kg)",
    diaIn: '9"',
    diaMm: "(229 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: 'THESE ARE USED FOR CRAB TRAPS - 7/16" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-ZC-7",
    znLb: "7.0 lb",
    znKg: "(3.18 kg)",
    alCode: "AMD-ZC-7",
    alLb: "3.0 lb",
    alKg: "(1.36 kg)",
    diaIn: '9"',
    diaMm: "(229 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '1 5/8"',
    cDiaMm: "(41 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: 'THESE ARE USED FOR CRAB TRAPS - 7/16" SLOT',
  },
];

const semiStreamlinedBoltData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228068691-369dde4e-33ab-4e83-b185-86e846224d8d.png",
    znCode: "MD-Z-03B",
    znLb: "13.50 lb",
    znKg: "(6.12 kg)",
    alCode: "AMD-Z-03B",
    alLb: "5.0 lb",
    alKg: "(2 1/4 kg)",
    diaIn: '13.5"',
    diaMm: "(343 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '8" - 9"',
    dMeasureMm: "(203 - 229 mm)",
    notes: 'SLOTTED WITH ALUMINUM INSERT - 3/4" x 2.5" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-Z-3BS",
    znLb: "8.5 lb",
    znKg: "(3.86 kg)",
    alCode: "AMD-Z-3BS",
    alLb: "4.0 lb",
    alKg: "(1.81 kg)",
    diaIn: '12"',
    diaMm: "(305 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '6" - 8"',
    dMeasureMm: "(152 - 203 mm)",
    notes: 'SLOTTED W/ ALUMINUM INSERT - 3/4" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZHC-11",
    znLb: "11.0 lb",
    znKg: "(4.99 kg)",
    alCode: "AMD-ZHC-11",
    alLb: "4.8 lb",
    alKg: "(2.18 kg)",
    diaIn: '12"',
    diaMm: "(305 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '8" - 9"',
    dMeasureMm: "(203 - 229 mm)",
    notes: 'SLOTTED W/ GALVANIZED INSERT - 5/8" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228068691-369dde4e-33ab-4e83-b185-86e846224d8d.png",
    znCode: "MD-ZHC-12",
    znLb: "10.0 lb",
    znKg: "(4.54 kg)",
    alCode: "AMD-ZHC-12",
    alLb: "5.0 lb",
    alKg: "(2.27 kg)",
    diaIn: '12"',
    diaMm: "(305 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '6"',
    dMeasureMm: "(152 mm)",
    notes: 'SLOTTED W/ ALUMINUM INSERT - 5/8" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZHC-15",
    znLb: "16.0 lb",
    znKg: "(7.26 kg)",
    alCode: "AMD-ZHC-15",
    alLb: "6.5 lb",
    alKg: "(2.95 kg)",
    diaIn: '16"',
    diaMm: "(406 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 3/4"',
    cDiaMm: "(44 mm)",
    dMeasureIn: '9"',
    dMeasureMm: "(229 mm)",
    notes: 'SLOTTED W/ GALVANIZED INSERT - 5/8" SLOT',
  },
  
  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZHC-15 HEAVY",
    znLb: "18.0 lb",
    znKg: "(8.16 kg)",
    alCode: "AMD-ZHC-15 HEAVY",
    alLb: "8.65 lb",
    alKg: "(4 kg)",
    diaIn: '18.0"',
    diaMm: "(457 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/4"',
    cDiaMm: "(44 mm)",
    dMeasureIn: '9"',
    dMeasureMm: "(229 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZHC-16",
    znLb: "16.0 lb",
    znKg: "(7.26 kg)",
    alCode: "AMD-ZHC-16",
    alLb: "7.0 lb",
    alKg: "(3.18 kg)",
    diaIn: '16"',
    diaMm: "(406 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '1 3/4"',
    cDiaMm: "(44 mm)",
    dMeasureIn: '9"',
    dMeasureMm: "(229 mm)",
    notes: 'SLOTTED GALVANIZED INSERT - 5/8" to 1" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZHC-18 / CL-18",
    znLb: "18 lb",
    znKg: "(8.16 kg)",
    alCode: "AMD-ZHC-18 / AMD-CL-18",
    alLb: "7.8 lb",
    alKg: "(3.54 kg)",
    diaIn: '16"',
    diaMm: "(406 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '2"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '9"',
    dMeasureMm: "(229 mm)",
    notes: 'SLOTTED GALVANIZED INSERT - 5/8" SLOT',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZD-72B",
    znLb: "26.0 lb",
    znKg: "(11.79 kg)",
    alCode: "AMD-ZD-72B",
    alLb: "10 lb",
    alKg: "(4.54 kg)",
    diaIn: '18"',
    diaMm: "(457 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '2 1/4"',
    cDiaMm: "(57 mm)",
    dMeasureIn: '9"',
    dMeasureMm: "(229 mm)",
    notes: "SLOTTED W/ STEEL INSERT",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZD-72BM",
    znLb: "17.0 lb",
    znKg: "(7.71 kg)",
    alCode: "AMD-ZD-72BM",
    alLb: "6.5 lb",
    alKg: "(2.95 kg)",
    diaIn: '18"',
    diaMm: "(457 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '8" - 9"',
    dMeasureMm: "(203 - 229 mm)",
    notes: "SLOTTED W/ STEEL INSERT",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228068691-369dde4e-33ab-4e83-b185-86e846224d8d.png",
    znCode: "MD-Z-15B",
    znLb: "15.0 lb",
    znKg: "(6.8 kg)",
    alCode: "AMD-Z-15B",
    alLb: "6.33 lb",
    alKg: "(2.87 kg)",
    diaIn: '18"',
    diaMm: "(457 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '8 7/8"',
    dMeasureMm: "(225 mm)",
    notes: "SLOTTED WITH GALVANIZED STEEL INSERT",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228071062-4d9a2fbe-3bfe-4b98-af6f-10de414825db.png",
    znCode: "MD-ZD-76 MINI EURO",
    znLb: "3.0 lb",
    znKg: "(1.36 kg)",
    alCode: "AMD-ZD-76 MINI EURO",
    alLb: "1.45 lb",
    alKg: "(0.66 kg)",
    diaIn: '8"',
    diaMm: "(203 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '4 1/4"',
    dMeasureMm: "(108 mm)",
    notes: "SLOTTED W/ ALUMINUM INSERT",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228066886-41ed1f10-ffa0-4bb1-924b-e2467068ef8e.png",
    znCode: "MD-ZD-77 EURO",
    znLb: "5.0 lb",
    znKg: "(2.27 kg)",
    alCode: "AMD-ZD-77 EURO",
    alLb: "2.5 lb",
    alKg: "(1.13 kg)",
    diaIn: '12 1/2"',
    diaMm: "(318 mm)",
    widIn: '2 1/5"',
    widMm: "(56 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '4" - 8"',
    dMeasureMm: "(102 - 203 mm)",
    notes: "SLOTTED W/ ALUMINUM INSERT",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228072906-00579c86-5938-4d89-84a8-a1da10918a7f.png",
    znCode: "MD-Z-H55GB",
    znLb: "9.5 lb",
    znKg: "(4.31 kg)",
    alCode: "AMD-Z-H55GB",
    alLb: "4.0 lb",
    alKg: "(1.81 kg)",
    diaIn: '7 7/8"',
    diaMm: "(200 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '9 5/6"',
    dMeasureMm: "(250 mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
];

const semiStreamlined = () => {
  return (
    <div>
      <Hero
        heading={"Semi-Streamlined Anodes"}
        message={
          "Suitable for small, medium and large vessels. Often found on hulls, sea tanks, bilges, ballast tanks, and structures."
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table className="border-none border-collapse">
              <tbody>
                <tr>
                  <th colSpan={7} className="py-8">
                    <h1>SEMI-STREAMLINED</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    WELD ON
                  </th>
                </tr>
                {semiStreamlinedWeldData.map((item, id) => (
                  <Chart4DimPic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))}
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    BOLT ON
                  </th>
                </tr>
                {semiStreamlinedBoltData.map((item, id) => (
                  <Chart4DimPic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default semiStreamlined;
