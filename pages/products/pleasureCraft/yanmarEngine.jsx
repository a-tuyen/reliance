import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartEngine4Dim from "@/components/ChartEngine4Dim";
import Image from "next/image";
import Link from "next/link";

const yanmarData = [
  {
    compCode: "MD- YANMAR 119574-18790C",
    compLb: "0.18 lb",
    compKg: "(0.08 kg)",
    replCode: "MD-YANMAR 119574-18790Z",
    replLb: "0.16 lb",
    replKg: "(0.07 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/16-14 UNC",
  },
  {
    compCode: "MD- YANMAR 119574-44150C",
    compLb: "0.13 lb",
    compKg: "(0.06 kg)",
    replCode: "MD-YANMAR 119574-44150Z",
    replLb: "0.13 lb",
    replKg: "(0.06 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "11/16 UNC",
  },
  {
    compCode: "MD- YANMAR 120650-13420C",
    compLb: "0.25 lb",
    compKg: "(0.11 kg)",
    replCode: "MD-YANMAR 120650-13420Z",
    replLb: "0.21 lb",
    replKg: "(0.1 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "THREAD: M8",
  },
  {
    compCode: "MD- YANMAR 272100-200200C",
    compLb: "0.11 lb",
    compKg: "(0.05 kg)",
    replCode: "MD-YANMAR 272100-200200Z",
    replLb: "0.12 lb",
    replKg: "(0.05 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "THREAD: M8",
  },
  {
    compCode: "MD- YANMAR 272100-200300C",
    compLb: "0.19 lb",
    compKg: "(0.09 kg)",
    replCode: "MD-YANMAR 272100-200300Z",
    replLb: "0.16 lb",
    replKg: "(0.07 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "THREAD: M8",
  },
  {
    compCode: "MD- YANMAR 272100-200370C",
    compLb: "0.17 lb",
    compKg: "(0.08 kg)",
    replCode: "MD-YANMAR 272100-200370Z",
    replLb: "0.15 lb",
    replKg: "(0.07 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "THREAD: M8",
  },
  {
    compCode: "MD- YANMAR 272100-200550C",
    compLb: "0.35 lb",
    compKg: "(0.16 kg)",
    replCode: "MD-YANMAR 272100-200550Z",
    replLb: "0.33 lb",
    replKg: "(0.15 kg)",
    diaIn: '2 11/16"',
    diaMm: "(68 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "THREAD: M8",
  },
];

const detroit = () => {
  return (
    <div>
      <Hero
        heading={"Yanmar Engine Engine Anodes"}
        message={
          "Reliance Yanmar Engine Engine Anodes come complete with an anode and a brass plug attached or as a replacement of just an anode without brass plug"
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
                    <h1>Yanmar Engine ENGINE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
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
                {yanmarData.map((item, id) => (
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
              <Link href="/products/pleasureCraft/caterpillar">
                CATERPILLAR
              </Link>{" "}
              sections.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default detroit;
