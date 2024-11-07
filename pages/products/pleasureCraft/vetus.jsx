import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Chart2DimPic from "@/components/Chart2DimPic";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";


const vetusData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/232910240-741345fe-4934-4b90-9911-2ce69af9ffcf.png",
    znCode: "MD-BP-129",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-129",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910238-66ba1b88-1602-48ae-a333-22a47bd43715.png",
    znCode: "MD-BP-195",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-195",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '1 5/8"',
    widMm: "(41 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910242-23bd186d-33bb-4011-94b7-0711451d947e.png",
    znCode: "MD-BP-1185",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-1185",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910238-66ba1b88-1602-48ae-a333-22a47bd43715.png",
    znCode: "MD-BP-1210",
    znLb: "0.84 lb",
    znKg: "(0.38 kg)",
    alCode: "AMD-BP-1210",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 1/2"',
    widMm: "(38 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909896-cb6ebba8-bd59-4f89-bc7e-4113b4ec6c60.png",
    znCode: "MD-BP-1126",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-1126",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909895-976b948f-c8a5-46b3-8e0e-21718e103c50.png",
    znCode: "MD-BP-1221",
    znLb: "0.08 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-BP-1221",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },
];


const vetusHullData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228083916-a5f3c61d-6bd2-4893-8985-a956d46d2772.png",
    znCode: "MD-VETUS 8",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "AMD-VETUS 8",
    alLb: "1 lb",
    alKg: "(0.45 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084392-8823c4f6-cee5-4f22-9cfa-6fa88e0c6b52.png",
    znCode: "MD-VETUS 15",
    znLb: "2 lb",
    znKg: "(0.91 kg)",
    alCode: "AMD-VETUS 15",
    alLb: "1 lb",
    alKg: "(0.45 kg)",
    diaIn: '6.00"',
    diaMm: "(152 mm)",
    widIn: '2 1/2"',
    widMm: "(60 mm)",
    cDiaIn: '1.0"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '3.125"',
    dMeasureMm: "(79 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084747-200118bd-e073-4aa8-8aeb-0d46a9eabbc3.png",
    znCode: "MD-VETUS 25",
    znLb: "5.1 lb",
    znKg: "(2.313 kg)",
    alCode: "AMD-VETUS 25",
    alLb: "2.5 lb",
    alKg: "(1.134 kg)",
    diaIn: '9 1/2"',
    diaMm: "(241 mm)",
    widIn: '2.4"',
    widMm: "(61 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084747-200118bd-e073-4aa8-8aeb-0d46a9eabbc3.png",
    znCode: "MD-VETUS 35",
    znLb: "10 lb",
    znKg: "(4.5 kg)",
    alCode: "AMD-VETUS 35",
    alLb: "3.85 lb",
    alKg: "(1.75 kg)",
    diaIn: '13 3/4"',
    diaMm: "(349 mm)",
    widIn: '2 7/8"',
    widMm: "(73 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200 mm)",
    notes: "",
  },
];


const vetus = () => {
  return (
    <div>
      <Hero heading={"Vetus Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>VETUS BOW THRUSTERS</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {vetusData.map((item, id) => (
                  <Chart2DimPic
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
                    width="300"
                    height="180"
                    aDim="A: DIAMETER"
                    bDim="B: HEIGHT"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>VETUS HULL</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {vetusHullData.map((item, id) => (
                  <Chart2DimPic
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
                    width="300"
                    height="180"
                    aDim="A: DIAMETER"
                    bDim="B: HEIGHT"
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

export default vetus;
