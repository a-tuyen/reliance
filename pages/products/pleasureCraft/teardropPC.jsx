import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart4DimPic from "@/components/Chart4DimPic";
import Image from "next/image";

const teardropPCData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/229861110-0a491cc3-cc3c-4fac-b121-a4d2ec577286.png",
    znCode: "MD-T-20",
    znLb: "0.4 lb",
    znKg: "(0.18 kg)",
    alCode: "AMD-T-20",
    alLb: "0.14 lb",
    alKg: "(0.06 kg)",
    diaIn: '3 3/8"',
    diaMm: "(86 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    dMeasureIn: '1 1/4"',
    dMeasureMm: "(32 mm)",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/229861110-0a491cc3-cc3c-4fac-b121-a4d2ec577286.png",
    znCode: "MD-T-21",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-T-21",
    alLb: "0.39 lb",
    alKg: "(0.18 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '7/8"',
    cDiaMm: "(22 mm)",
    dMeasureIn: '1 5/8"',
    dMeasureMm: "(41 mm)",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/229861114-3ba888af-fd10-45cc-8b3c-41a39de12993.png",
    znCode: "MD-TD-S",
    znLb: "0.55 lb",
    znKg: "(0.25 kg)",
    alCode: "AMD-TD-S",
    alLb: "0.19 lb",
    alKg: "(0.09 kg)",
    diaIn: '3 3/8"',
    diaMm: "(86 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
    dMeasureIn: '1 1/2"',
    dMeasureMm: "(38 mm)",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/229861114-3ba888af-fd10-45cc-8b3c-41a39de12993.png",
    znCode: "MD-T-L",
    znLb: "0.95 lb",
    znKg: "(0.43 kg)",
    alCode: "AMD-T-L",
    alLb: "0.43 lb",
    alKg: "(0.2 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    dMeasureIn: '2 1/8"',
    dMeasureMm: "(54 mm)",
  },
];

const teardropPC = () => {
  return (
    <div>
      <Hero
        heading={"Teardrop Anodes "}
        message={
          "Reliance Teardrop Anodes are streamlined types for use on large surfaces of a pleasure craft vessel, such as the hull"
        }
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={13} className="py-8">
                    <h1>TEARDROP ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>

                {teardropPCData.map((item, id) => (
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

export default teardropPC;
