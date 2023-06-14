import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const benEuroData = [
  {
    znCode: "MD-BLC EURO 25MM",
    znLb: "0.9 lb",
    znKg: "(0.41 kg)",
    alCode: "AMD-BLC EURO 25MM",
    alLb: "0.39 lb",
    alKg: "(0.18 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: "MD-BLC EURO 30MM",
    znLb: "0.9 lb",
    znKg: "(0.41 kg)",
    alCode: "AMD-BLC EURO 30MM",
    alLb: "0.31 lb",
    alKg: "(0.14 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: "MD-BLC EURO 35MM",
    znLb: "0.8 lb",
    znKg: "(0.36 kg)",
    alCode: "AMD-BLC EURO 35MM",
    alLb: "0.31 lb",
    alKg: "(0.14 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '2/3"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: "MD-BLC EURO 40MM",
    znLb: "0.7 lb",
    znKg: "(0.32 kg)",
    alCode: "AMD-BLC EURO 40MM",
    alLb: "0.33 lb",
    alKg: "(0.15 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '2/3"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: "MD-BLC EURO 45MM",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BLC EURO 45MM",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '2/3"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: "MD-BLC EURO 50MM",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BLC EURO 50MM",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '11/16"',
    cDiaMm: "(17 mm)",
  },
];

const benStdData = [
  {
    znCode: 'MD-BEN STD LC 1"',
    znLb: "0.49 lb",
    znKg: "(0.22 kg)",
    alCode: 'AMD-BEN STD LC 1"',
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: 'MD-BEN STD LC 1 1/8"',
    znLb: "0.49 lb",
    znKg: "(0.22 kg)",
    alCode: 'AMD-BEN STD LC 1 1/8"',
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: 'MD-BEN STD LC 1 1/4"',
    znLb: "0.49 lb",
    znKg: "(0.22 kg)",
    alCode: 'AMD-BEN STD LC 1 1/4"',
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: 'MD-BEN STD LC 1 1/2"',
    znLb: "0.7 lb",
    znKg: "(0.32 kg)",
    alCode: 'AMD-BEN STD LC 1 1/2"',
    alLb: "0.33 lb",
    alKg: "(0.15 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '2/3"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: 'MD-BEN STD LC 1 3/4"',
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: 'AMD-BEN STD LC 1 3/4"',
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 5/8"',
    widMm: "(92 mm)",
    cDiaIn: '2/3"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: 'MD-BEN STD LC 2"',
    znLb: "1.25 lb",
    znKg: "(0.57 kg)",
    alCode: 'AMD-BEN STD LC 2"',
    alLb: "0.54 lb",
    alKg: "(0.24 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 5/8"',
    widMm: "(92 mm)",
    cDiaIn: '11/16"',
    cDiaMm: "(17 mm)",
  },
];

const benLC = () => {
  return (
    <div>
      <Hero
        heading={"Beneteau LC Euro Collar Anodes "}
        message={"Limited Clearance anodes in Metric and Standard sizes"}
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
                    <h1>BENETEAU LC EURO COLLAR</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p className="pt-2">METRIC</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
                  <th>C: THICKNESS</th>
                </tr>
                {benEuroData.map((item, id) => (
                  <Chart3Dim
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
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex">
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/229937680-99c38228-add5-4013-93d4-b45e69d6e782.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3</p> */}
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/228628913-20d5eb4d-f4c3-47ef-a780-be98d9028e96.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3 HEX / MDCT-5 HEX</p> */}
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>BENETEAU STD LC COLLAR</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p className="pt-2">STANDARD</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
                  <th>C: THICKNESS</th>
                </tr>
                {benStdData.map((item, id) => (
                  <Chart3Dim
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
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>
            <p className="text-center pb-4">
              For more LC Collar Anodes, please see our{" "}
              <Link href="/products/pleasureCraft/donut">DONUT</Link> section.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default benLC;
