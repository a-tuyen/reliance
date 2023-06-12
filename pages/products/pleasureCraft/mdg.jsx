import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const mdgStdData = [
  {
    znCode: "MDG-34 - 2 BOLT",
    znLb: "1.98 lb",
    znKg: "(0.9 kg)",
    alCode: "AMDG-34 - 2 BOLT",
    alLb: "0.77 lb",
    alKg: "(0.35 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDG-78 - 2 BOLT",
    znLb: " lb",
    znKg: "(0 kg)",
    alCode: "AMDG-78 - 2 BOLT",
    alLb: "0 lb",
    alKg: "(0 kg)",
    diaIn: '7/8"',
    diaMm: "(22 mm)",
    widIn: '0"',
    widMm: "(0 mm)",
    cDiaIn: '0"',
    cDiaMm: "(0 mm)",
  },

  {
    znCode: "MDG-1 - 2 BOLT",
    znLb: "1.8 lb",
    znKg: "(0.82 kg)",
    alCode: "AMDG-1 - 2 BOLT",
    alLb: "0.7 lb",
    alKg: "(0.32 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDG-118 - 2 BOLT",
    znLb: "1.63 lb",
    znKg: "(0.74 kg)",
    alCode: "AMDG-118 - 2 BOLT",
    alLb: "0.64 lb",
    alKg: "(0.29 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDG-114 - 2 BOLT",
    znLb: "3.79 lb",
    znKg: "(1.72 kg)",
    alCode: "AMDG-114 - 2 BOLT",
    alLb: "1.48 lb",
    alKg: "(0.67 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '3 1/8"',
    cDiaMm: "(79 mm)",
  },

  {
    znCode: "MDG-138 - 2 BOLT",
    znLb: "3.6 lb",
    znKg: "(1.63 kg)",
    alCode: "AMDG-138 - 2 BOLT",
    alLb: "1.41 lb",
    alKg: "(0.64 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '3 1/8"',
    cDiaMm: "(79 mm)",
  },

  {
    znCode: "MDG-112 - 2 BOLT",
    znLb: "3.41 lb",
    znKg: "(1.55 kg)",
    alCode: "AMDG-112 - 2 BOLT",
    alLb: "1.33 lb",
    alKg: "(0.6 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '3 1/8"',
    cDiaMm: "(79 mm)",
  },

  {
    znCode: "MDG-134 - 4 BOLT",
    znLb: "6.72 lb",
    znKg: "(3.05 kg)",
    alCode: "AMDG-134 - 4 BOLT",
    alLb: "2.63 lb",
    alKg: "(1.19 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '3 7/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDG-2 - 4 BOLT",
    znLb: "6 lb",
    znKg: "(2.72 kg)",
    alCode: "AMDG-2 - 4 BOLT",
    alLb: "2.34 lb",
    alKg: "(1.06 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '3 7/8"',
    cDiaMm: "(98 mm)",
  },
];

const mdgMetricData = [
  {
    znCode: "MDG-25MM - 2 BOLT",
    znLb: "1.8 lb",
    znKg: "(0.82 kg)",
    alCode: "AMDG-25MM - 2 BOLT",
    alLb: "0.7 lb",
    alKg: "(0.32 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDG-30MM - 2 BOLT",
    znLb: "1.6 lb",
    znKg: "(0.73 kg)",
    alCode: "AMDG-30MM - 2 BOLT",
    alLb: "0.63 lb",
    alKg: "(0.29 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '2 1/4"',
    widMm: "(57 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDG-35MM - 2 BOLT",
    znLb: "3.6 lb",
    znKg: "(1.63 kg)",
    alCode: "AMDG-35MM - 2 BOLT",
    alLb: "1.41 lb",
    alKg: "(0.64 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '3 1/8"',
    cDiaMm: "(79 mm)",
  },

  {
    znCode: "MDG-40MM - 2 BOLT",
    znLb: "3.28 lb",
    znKg: "(1.49 kg)",
    alCode: "AMDG-40MM - 2 BOLT",
    alLb: "1.28 lb",
    alKg: "(0.58 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '3 1/8"',
    cDiaMm: "(79 mm)",
  },

  {
    znCode: "MDG-45MM - 4 BOLT",
    znLb: "6.66 lb",
    znKg: "(3.02 kg)",
    alCode: "AMDG-45MM - 4 BOLT",
    alLb: "2.6 lb",
    alKg: "(1.18 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '3 7/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDG-50MM - 4 BOLT",
    znLb: "6.11 lb",
    znKg: "(2.77 kg)",
    alCode: "AMDG-50MM - 4 BOLT",
    alLb: "2.39 lb",
    alKg: "(1.08 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '3 7/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDG-60MM - 4 BOLT",
    znLb: "4.82 lb",
    znKg: "(2.19 kg)",
    alCode: "AMDG-60MM - 4 BOLT",
    alLb: "1.88 lb",
    alKg: "(0.85 kg)",
    diaIn: '2 3/8"',
    diaMm: "(60 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '3 7/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDG-70MM - 4 BOLT",
    znLb: " lb",
    znKg: "(0 kg)",
    alCode: "AMDG-70MM - 4 BOLT",
    alLb: "0 lb",
    alKg: "(0 kg)",
    diaIn: '0"',
    diaMm: "(0 mm)",
    widIn: '0"',
    widMm: "(0 mm)",
    cDiaIn: '0"',
    cDiaMm: "(0 mm)",
  },
];

const mdg = () => {
  return (
    <div>
      <Hero
        heading={"MDG Shaft Anodes "}
        message={"European Style Shaft Anodes"}
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>MDG SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
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
                {mdgStdData.map((item, id) => (
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
                  src="https://user-images.githubusercontent.com/77664153/244805611-1547e1f6-bf17-4a60-9c88-c3b0a1e158c2.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3</p> */}
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/244805604-b3ede7d8-e255-4534-9e64-039c12581557.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>MDG SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p>METRIC SERIES</p>
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
                {mdgMetricData.map((item, id) => (
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
              For more Shaft Anodes, please see our{" "}
              <Link href="/products/pleasureCraft/mdg">MDG</Link> section.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default mdg;
