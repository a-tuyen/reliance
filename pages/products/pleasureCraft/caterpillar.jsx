import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartEngine4Dim from "@/components/ChartEngine4Dim";
import Image from "next/image";
import Link from "next/link";

const catData = [
  {
    compCode: "MD-CAT 6L 2016C",
    compLb: "0.1 lb",
    compKg: "(0.05 kg)",
    replCode: "MD-CAT 6L2016Z",
    replLb: "0.1 lb",
    replKg: "(0.05 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 UNC",
  },
  {
    compCode: "MD-CAT 6L 2280C",
    compLb: "0.08 lb",
    compKg: "(0.04 kg)",
    replCode: "MD-CAT 6L2280Z",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '1 5/8"',
    diaMm: "(41 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
  {
    compCode: "MD-CAT 6L 2281C",
    compLb: "0.14 lb",
    compKg: "(0.06 kg)",
    replCode: "MD-CAT 6L2281Z",
    replLb: "0.09 lb",
    replKg: "(0.04 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
  {
    compCode: "MD-CAT 6L 2283C",
    compLb: "0.08 lb",
    compKg: "(0.04 kg)",
    replCode: "MD-CAT 6L2283Z",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '1/4"',
    cDiaMm: "(6 mm)",
    cPlugThread: "5/16 18 UNC",
  },
  {
    compCode: "MD-CAT 6L 2284C",
    compLb: "1.78 lb",
    compKg: "(0.81 kg)",
    replCode: "MD-CAT 6L2284Z",
    replLb: "0.98 lb",
    replKg: "(0.44 kg)",
    diaIn: '2 15/16"',
    diaMm: "(75 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    cPlugThread: "3/4 - 10 UNC",
  },
  {
    compCode: "MD-CAT 6L 2285C",
    compLb: "0.98 lb",
    compKg: "(0.44 kg)",
    replCode: "MD-CAT 6L2285Z",
    replLb: "0.9 lb",
    replKg: "(0.41 kg)",
    diaIn: '2 15/16"',
    diaMm: "(75 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    cPlugThread: "3/4 - 10 UNC",
  },
  {
    compCode: "MD-CAT 6L 2288C",
    compLb: "0.16 lb",
    compKg: "(0.07 kg)",
    replCode: "MD-CAT 6L2288Z",
    replLb: "0.16 lb",
    replKg: "(0.07 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/16 - 14 UNC",
  },
  {
    compCode: "MD-CAT 6L 2289C",
    compLb: "0.26 lb",
    compKg: "(0.12 kg)",
    replCode: "MD-CAT 6L2289Z",
    replLb: "0.15 lb",
    replKg: "(0.07 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/16 - 14 UNC",
  },
  {
    compCode: "MD-CAT 6L 3104C",
    compLb: "0.06 lb",
    compKg: "(0.03 kg)",
    replCode: "MD-CAT 6L3104Z",
    replLb: "0.06 lb",
    replKg: "(0.03 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    cPlugThread: "1/4 - 20 UNC",
  },
];

const catBPData = [];

const caterpillar = () => {
  return (
    <div>
      <Hero
        heading={"Caterpillar Engine Anodes"}
        message={
          "Reliance Caterpillar Engine Anodes come complete with an anode and a brass plug attached or as a replacement of just an anode without brass plug"
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
                  <th colSpan={7} className="py-8">
                    <h1>CATERPILLAR ENGINE ANODES SPECIFICATIONS</h1>
                    <p>REPLACEMENT comes with just the Anode</p>
                    <p>COMPLETE comes with the Anode and Brass Plug</p>
                    <p>Not available in Aluminum</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>
                    A:
                    <p className="text-sm md:text-lg">LENGTH</p>
                  </th>
                  <th>
                    B:
                    <p className="text-sm md:text-lg">DIA</p>
                  </th>
                  <th>
                    C:
                    <p className="text-sm md:text-lg">PLUG OD</p>
                  </th>
                  <th>
                    C:
                    <p className="px-2 text-sm md:text-lg">
                      THREAD INTERVAL (NPT)
                    </p>
                  </th>
                </tr>
                {catData.map((item, id) => (
                  <ChartEngine4Dim
                    key={id}
                    compCode={item.compCode}
                    compLb={item.compLb}
                    compKg={item.compKg}
                    replCode={item.replCode}
                    replLb={item.replLb}
                    replKg={item.replKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    cPlugThread={item.cPlugThread}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center justify-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/230451905-ec4c863a-ef8b-426e-bf3f-338cb250fe59.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/230496615-0482b4f2-6dfd-4aca-a8e2-50c433736e0b.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>Engine Replacement Anode</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/230496617-d40b4723-cf00-4542-a22f-892ce6e5bfb4.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>Engine Brass Plug</p>
              </div>
            </div>
            <p className="text-center py-4">
              For more engine anodes, please see our{" "}
              <Link href="/products/pleasureCraft/engine">ENGINE</Link> and{" "}
              <Link href="/products/pleasureCraft/detroit">DETROIT DIESEL</Link>{" "}
              sections.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default caterpillar;
