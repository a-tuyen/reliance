import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3DimPic from "@/components/Chart3DimPic";
import Image from "next/image";

const deIcerData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/243767659-07af73e3-72aa-4dea-ba44-d1052ec7f77d.png",
    znCode: "MD-XO DE-ICER SHAFT ANODE",
    znLb: "0.40 lb",
    znKg: "(0.18 kg)",
    alCode: "AMD-XO DE-ICER SHAFT ANODE",
    alLb: "0.16 lb",
    alKg: "(0.07 kg)",
    diaIn: '1/2"',
    diaMm: "(13 mm)",
    widIn: '1 1/2"',
    widMm: "(38 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
];

const deIcer = () => {
  return (
    <div>
      <Hero heading={"DE-ICER Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>DE-ICER SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {deIcerData.map((item, id) => (
                  <Chart3DimPic
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
                    width="300"
                    height="180"
                    aDim="DIAMETER"
                    bDim="THICKNESS"
                    cDim="HOLE DIAMETER"
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

export default deIcer;
