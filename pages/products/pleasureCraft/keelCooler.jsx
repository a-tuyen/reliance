import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimPic from "@/components/Chart2DimPic";
import Chart5Dim from "@/components/Chart5Dim";
import Image from "next/image";

const keelCoolerData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/233424527-b3b58179-a6f1-4018-bf3e-471f53bd2f33.png",
    znCode: "MD-KK-1",
    znLb: "1.1 lb",
    znKg: "(0.5 kg)",
    alCode: "AMD-KK-1",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '2 5/8"',
    diaMm: "(67 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424526-e75dc0ac-fb8b-4cef-989d-e673790d285b.png",
    znCode: "MD-KK-2",
    znLb: "1.25 lb",
    znKg: "(0.57 kg)",
    alCode: "AMD-KK-2",
    alLb: "0.49 lb",
    alKg: "(0.22 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424522-d00072fa-eea7-484a-9755-576e88932cad.png",
    znCode: "MD-KK-3",
    znLb: "3.25 lb",
    znKg: "(1.47 kg)",
    alCode: "AMD-KK-3",
    alLb: "1.18 lb",
    alKg: "(0.54 kg)",
    diaIn: '3 7/8"',
    diaMm: "(98 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424480-7427a2bc-6eac-4111-b364-d1adadb51df7.png",
    znCode: "MD-X-45-3",
    znLb: "0.25 lb",
    znKg: "(0.11 kg)",
    alCode: "AMD-X-45-3",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '3 7/8"',
    widMm: "(98 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424486-04410fd6-c352-42db-ac84-a18ba86a56f0.png",
    znCode: "MD-X-47-3",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-X-47-3",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    diaIn: '6 3/4"',
    diaMm: "(171 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424483-c499f5e0-7029-4f76-b26f-39a14257884f.png",
    znCode: "MD-X-52-3",
    znLb: "3.00 lb",
    znKg: "(1.36 kg)",
    alCode: "AMD-X-52-3",
    alLb: "1.17 lb",
    alKg: "(0.53 kg)",
    diaIn: '12 1/4"',
    diaMm: "(311 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233424484-5cf99d4c-c908-46bc-a5d5-31865e0f32fb.png",
    znCode: "MD-X-58",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-X-58",
    alLb: "0.27 lb",
    alKg: "(0.12 kg)",
    diaIn: '6 3/8"',
    diaMm: "(162 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
  },
];

const fernstrumKeelData = [
  {
    znCode: "MD-1274A",
    znLb: "2.20 lb",
    znKg: "(1 kg)",
    alCode: "AMD-1274A",
    alLb: "0.88 lb",
    alKg: "(0.4 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '1 1/16"',
    cDiaMm: "(27 mm)",
    dMeasureIn: '3 1/4"',
    dMeasureMm: "(83 mm)",
    eMeasureIn: '7/16"',
    eMeasureMm: "(11 mm)",
  },

  {
    znCode: "MD-1874A",
    znLb: "3.4 lb",
    znKg: "(1.54 kg)",
    alCode: "AMD-1874A",
    alLb: "1.36 lb",
    alKg: "(0.62 kg)",
    diaIn: '7"',
    diaMm: "(178 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '1 1/16"',
    cDiaMm: "(27 mm)",
    dMeasureIn: '3 1/4"',
    dMeasureMm: "(83 mm)",
    eMeasureIn: '9/16"',
    eMeasureMm: "(14 mm)",
  },

  {
    znCode: "MD-2624A",
    znLb: "1.5 lb",
    znKg: "(0.68 kg)",
    alCode: "AMD-2624A",
    alLb: "0.59 lb",
    alKg: "(0.27 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '13/16"',
    cDiaMm: "(21 mm)",
    dMeasureIn: '3 1/4"',
    dMeasureMm: "(83 mm)",
    eMeasureIn: '9/16"',
    eMeasureMm: "(14 mm)",
  },

  {
    znCode: "MD-2874A",
    znLb: "4.2 lb",
    znKg: "(1.91 kg)",
    alCode: "AMD-2874A",
    alLb: "1.68 lb",
    alKg: "(0.76 kg)",
    diaIn: '9"',
    diaMm: "(229 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cDiaIn: '1 1/16"',
    cDiaMm: "(27 mm)",
    dMeasureIn: '4"',
    dMeasureMm: "(102 mm)",
    eMeasureIn: '9/16"',
    eMeasureMm: "(14 mm)",
  },
];

const keelCooler = () => {
  return (
    <div>
      <Hero
        heading={"Keel Cooler Anodes"}
        message={
          "Designed to provide maximum protection to your fresh water cooling system by protectiong the heat exchanger from galvanic corrosion"
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
                  <th colSpan={5} className="py-8">
                    <h1>KEEL COOLER</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {keelCoolerData.map((item, id) => (
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
                  <th colSpan={8} className="py-8">
                    <h1>FERNSTRUM KEEL COOLER</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={5}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>

                  <th className="border-r-0 ">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: LENGTH</th>
                  <th>B: WIDTH</th>
                  <th>C: DEPTH</th>
                  <th>D: C/C</th>
                  <th>HOLE DIAMETER</th>
                </tr>
                {fernstrumKeelData.map((item, id) => (
                  <Chart5Dim
                    key={id}
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
                    eMeasureIn={item.eMeasureIn}
                    eMeasureMm={item.eMeasureMm}
                  />
                ))}
              </tbody>
            </table>
            <div>
              <Image
                src="https://user-images.githubusercontent.com/77664153/233488586-985ef5fa-e9dd-40a6-a325-9dee5bc8dfee.png"
                alt="pic0ture of anode"
                width={300}
                height={180}
              />
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default keelCooler;
