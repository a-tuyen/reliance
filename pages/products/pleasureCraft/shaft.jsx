import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const shaftStdData = [
  {
    znCode: "MDX-1 - 2 BOLT",
    znLb: "1.13 lb",
    znKg: "(0.51 kg)",
    alCode: "AMDX-1 - 2 BOLT",
    alLb: "0.44 lb",
    alKg: "(0.2 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-2 - 2 BOLT",
    znLb: "1.03 lb",
    znKg: "(0.47 kg)",
    alCode: "AMDX-2 - 2 BOLT",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '7/8"',
    diaMm: "(22 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-3 - 2 BOLT",
    znLb: "0.98 lb",
    znKg: "(0.44 kg)",
    alCode: "AMDX-3 - 2 BOLT",
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-4 - 2 BOLT",
    znLb: "0.86 lb",
    znKg: "(0.39 kg)",
    alCode: "AMDX-4 - 2 BOLT",
    alLb: "0.34 lb",
    alKg: "(0.15 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-5 - 2 BOLT",
    znLb: "1.17 lb",
    znKg: "(0.53 kg)",
    alCode: "AMDX-5 - 2 BOLT",
    alLb: "0.46 lb",
    alKg: "(0.21 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '2 3/8"',
    widMm: "(60 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-6 - 4 BOLT",
    znLb: "2.4 lb",
    znKg: "(1.09 kg)",
    alCode: "AMDX-6 - 4 BOLT",
    alLb: "0.94 lb",
    alKg: "(0.43 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-7 - 4 BOLT",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "AMDX-7 - 4 BOLT",
    alLb: "0.86 lb",
    alKg: "(0.39 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(67 mm)",
  },

  {
    znCode: "MDX-8 - 4 BOLT",
    znLb: "2.53 lb",
    znKg: "(1.15 kg)",
    alCode: "AMDX-8 - 4 BOLT",
    alLb: "0.99 lb",
    alKg: "(0.45 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-8A - 4 BOLT",
    znLb: "2.01 lb",
    znKg: "(0.91 kg)",
    alCode: "AMDX-8A - 4 BOLT",
    alLb: "0.79 lb",
    alKg: "(0.36 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-9 - 4 BOLT",
    znLb: "2.01 lb",
    znKg: "(0.91 kg)",
    alCode: "AMDX-9 - 4 BOLT",
    alLb: "0.79 lb",
    alKg: "(0.36 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-9A - 4 BOLT",
    znLb: "6.48 lb",
    znKg: "(2.94 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "( kg)",
    diaIn: '2 1/8"',
    diaMm: "(54 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-10 - 4 BOLT",
    znLb: "6 lb",
    znKg: "(2.72 kg)",
    alCode: "AMDX-10 - 4 BOLT",
    alLb: "2.22 lb",
    alKg: "(1.01 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(102 mm)",
  },

  {
    znCode: "MDX-10A - 4 BOLT",
    znLb: "5.58 lb",
    znKg: "(2.53 kg)",
    alCode: "AMDX-10A - 4 BOLT",
    alLb: "2.18 lb",
    alKg: "(0.99 kg)",
    diaIn: '2 3/8"',
    diaMm: "(60 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-11 - 4 BOLT",
    znLb: "5.13 lb",
    znKg: "(2.33 kg)",
    alCode: "AMDX-11 - 4 BOLT",
    alLb: "2 lb",
    alKg: "(0.91 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-12 - 4 BOLT",
    znLb: "6.92 lb",
    znKg: "(3.14 kg)",
    alCode: "AMDX-12 - 4 BOLT",
    alLb: "2.7 lb",
    alKg: "(1.22 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-13 - 4 BOLT",
    znLb: "5.94 lb",
    znKg: "(2.69 kg)",
    alCode: "AMDX-13 - 4 BOLT",
    alLb: "2.32 lb",
    alKg: "(1.05 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-14 - 4 BOLT",
    znLb: "11.10 lb",
    znKg: "(5.03 kg)",
    alCode: "AMDX-14 - 4 BOLT",
    alLb: "4.34 lb",
    alKg: "(1.97 kg)",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-15 - 4 BOLT",
    znLb: "9.80 lb",
    znKg: "(4.45 kg)",
    alCode: "AMDX-15 - 4 BOLT",
    alLb: "3.83 lb",
    alKg: "(1.74 kg)",
    diaIn: '3 1/2"',
    diaMm: "(89 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-16 - 4 BOLT",
    znLb: "8.50 lb",
    znKg: "(3.86 kg)",
    alCode: "AMDX-16 - 4 BOLT",
    alLb: "3.15 lb",
    alKg: "(1.43 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-17 - 4 BOLT",
    znLb: "14.40 lb",
    znKg: "(6.53 kg)",
    alCode: "AMDX-17 - 4 BOLT",
    alLb: "5.54 lb",
    alKg: "(2.51 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-18 - 4 BOLT",
    znLb: "11.50 lb",
    znKg: "(5.22 kg)",
    alCode: "AMDX-18 - 4 BOLT",
    alLb: "4.6 lb",
    alKg: "(2.09 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-20 - 4 BOLT",
    znLb: "13 lb",
    znKg: "(5.9 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "( kg)",
    diaIn: '5 1/2"',
    diaMm: "(140 mm)",
    widIn: '7 1/2"',
    widMm: "(191 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },
];

const shaft = () => {
  return (
    <div>
      <Hero heading={"Shaft Anodes "} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>SHAFT</h1>
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
                {shaftStdData.map((item, id) => (
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
                  src="https://user-images.githubusercontent.com/77664153/243854960-b17e086d-9267-4525-a5b0-22978f1c7520.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3</p> */}
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/243854071-e0766baa-2355-408d-9601-a60e032f0ef6.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />

              </div>
            </div>
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

export default shaft;
