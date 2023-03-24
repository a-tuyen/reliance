import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
import vetus25 from "../../../public/vetus25.png";
import Chart5DimPic from "@/components/Chart5DimPic";

const teardropWeldData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/227595629-244047a0-9ec8-4ae1-8a81-5b238856a2f5.png",
    znCode: "MD-ZTS",
    znLb: "5.0 lb",
    znKg: "(2.27 kg)",
    alCode: "AMD-ZTS",
    alLb: "2.1 lb",
    alKg: "(0.95 kg)",
    mountingIn: "-",
    mountingMm: "-",
    diaIn: '9.0"',
    diaMm: "(229 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/227595629-244047a0-9ec8-4ae1-8a81-5b238856a2f5.png",
    znCode: "MD-35",
    znLb: "2.43 lb",
    znKg: "(1.1 kg)",
    alCode: "AMD-35",
    alLb: "1.10 lb",
    alKg: "(0.5 kg)",
    mountingIn: "-",
    mountingMm: "-",
    diaIn: '5.0"',
    diaMm: "(127 mm)",
    widIn: '2 2/5"',
    widMm: "(61 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/227595629-244047a0-9ec8-4ae1-8a81-5b238856a2f5.png",
    znCode: "MD-37",
    znLb: "4.85 lb",
    znKg: "(2.2 kg)",
    alCode: "AMD-37",
    alLb: "1.94 lb",
    alKg: "(0.88 kg)",
    mountingIn: "-",
    mountingMm: "-",
    diaIn: '7.0"',
    diaMm: "(178 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
];

const teardropBoltData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/227599404-735b1fa3-e4da-4808-a59b-01ff591fec7d.png",
    znCode: "MD-Z-12",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-Z-12",
    alLb: ".38 lb",
    alKg: "(0.17 kg)",
    mountingIn: '1/4"',
    mountingMm: "(6 mm)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    dMeasureIn: '2"',
    dMeasureMm: "(51 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/227599404-735b1fa3-e4da-4808-a59b-01ff591fec7d.png",
    znCode: "MD-Z-13",
    znLb: "1.50 lb",
    znKg: "(0.68 kg)",
    alCode: "AMD-Z-13",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    mountingIn: '1/4"',
    mountingMm: "(6 mm)",
    diaIn: '6"',
    diaMm: "(152 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '3 1/4"',
    dMeasureMm: "(83 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/227599404-735b1fa3-e4da-4808-a59b-01ff591fec7d.png",
    znCode: "MD-Z-14",
    znLb: "3.25 lb",
    znKg: "(1.47 kg)",
    alCode: "AMD-Z-14",
    alLb: "1.35 lb",
    alKg: "(0.61 kg)",
    mountingIn: '1/4"',
    mountingMm: "(6 mm)",
    diaIn: '8"',
    diaMm: "(203 mm)",
    widIn: '2 5/8"',
    widMm: "(67 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '4"',
    dMeasureMm: "(102 mm)",
    notes: "",
  },
];

const teardrop = () => {
  return (
    <div>
      <Hero heading={"Teardrop Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={9} className="py-8">
                    <h1>TEARDROP SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={5}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    WELD ON
                  </th>
                </tr>
                {teardropWeldData.map((item, id) => (
                  <Chart5DimPic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    mountingIn={item.mountingIn}
                    mountingMm={item.mountingMm}
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
                {teardropBoltData.map((item, id) => (
                  <Chart5DimPic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    mountingIn={item.mountingIn}
                    mountingMm={item.mountingMm}
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

export default teardrop;
