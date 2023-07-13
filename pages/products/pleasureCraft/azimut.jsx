import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3DimPic from "@/components/Chart3DimPic";
import Chart1pt2DimNote from "@/components/Chart1pt2DimNote";
import Image from "next/image";

const azimutData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/236282590-ee272a3c-04d9-4ce9-8bc5-559e84aa776d.png",
    znCode: "125mm TRANSOM",
    znLb: "5.9 lb",
    znKg: "(2.68 kg)",
    alCode: "125mm TRANSOM",
    alLb: "2.3 lb",
    alKg: "(1.04 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '1 1/2"',
    widMm: "(38 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236282595-065359d7-a721-4c86-905c-e958b0d0595d.png",
    znCode: "135mm TRANSOM",
    znLb: "10.20 lb",
    znKg: "(4.63 kg)",
    alCode: "135mm TRANSOM",
    alLb: "3.98 lb",
    alKg: "(1.81 kg)",
    diaIn: '5 1/2"',
    diaMm: "(140 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236282590-ee272a3c-04d9-4ce9-8bc5-559e84aa776d.png",
    znCode: "152mm TRANSOM",
    znLb: "9 lb",
    znKg: "(4.08 kg)",
    alCode: "152mm TRANSOM",
    alLb: "3.52 lb",
    alKg: "(1.6 kg)",
    diaIn: '5 1/8"',
    diaMm: "(130 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '9/16"',
    cDiaMm: "(14 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236282595-065359d7-a721-4c86-905c-e958b0d0595d.png",
    znCode: "125mm STREAMLINED HULL",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "125mm STREAMLINED HULL",
    alLb: "0.86 lb",
    alKg: "(0.39 kg)",
    diaIn: '4 9/10"',
    diaMm: "(124 mm)",
    widIn: '4/5"',
    widMm: "(20 mm)",
    cDiaIn: '2/5"',
    cDiaMm: "(10 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236282612-ceec0273-ae14-4fb9-b70c-a359942ae814.png",
    znCode: "140mm STREAMLINED HULL",
    znLb: "3.25 lb",
    znKg: "(1.47 kg)",
    alCode: "140mm STREAMLINED HULL",
    alLb: "1.27 lb",
    alKg: "(0.58 kg)",
    diaIn: '5 1/2"',
    diaMm: "(140 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    cDiaIn: '2/5"',
    cDiaMm: "(10 mm)",
  },
];

const azimutPNData = [
  {
    znCode: "40 mm ",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    diaIn: '1 3/5"',
    diaMm: "(41 mm)",
    widIn: '2 3/5"',
    widMm: "(66 mm)",
    thread: "24 x 200",
  },

  {
    znCode: "45 mm ",
    znLb: "1.75 lb",
    znKg: "(0.79 kg)",
    diaIn: '1 3/5"',
    diaMm: "(41 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    thread: "33 x 200",
  },

  {
    znCode: "50 mm ",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    diaIn: '2 9/10"',
    diaMm: "(74 mm)",
    widIn: '3 3/10"',
    widMm: "(84 mm)",
    thread: "36 x 300",
  },

  {
    znCode: "55 mm ",
    znLb: "2.25 lb",
    znKg: "(1.02 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '3 2/5"',
    widMm: "(86 mm)",
    thread: "40 x 300",
  },

  {
    znCode: "60 mm ",
    znLb: "3.5 lb",
    znKg: "(1.59 kg)",
    diaIn: '3 1/5"',
    diaMm: "(81 mm)",
    widIn: '3 4/5"',
    widMm: "(97 mm)",
    thread: "45 x 300",
  },
];

const azimut = () => {
  return (
    <div>
      <Hero heading={"Radice / Azimut Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>RADICE / AZIMUT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {azimutData.map((item, id) => (
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

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>NANNI ENGINE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th className="border-r-0 ">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>HEIGHT</th>
                  <th>BASE DIAMETER</th>
                  <th>THREAD SIZE</th>
                </tr>
                {azimutPNData.map((item, id) => (
                  <Chart1pt2DimNote
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    notes={item.thread}
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

export default azimut;
