import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartEngine4Dim from "@/components/ChartEngine4Dim";
import ChartEngine2Dim from "@/components/ChartEngine2Dim";
import Image from "next/image";
import Link from "next/link";

const engineData = [
  {
    compCode: "MDE-00C",
    compLb: "0.05 lb",
    compKg: "(0.02 kg)",
    replCode: "MDE-00Z",
    replLb: "0.02 lb",
    replKg: "(0.01 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1/4"',
    widMm: "(6 mm)",
    cDiaIn: '1/8"',
    cDiaMm: "(3 mm)",
    cPlugThread: "1/4 - 20 NC",
  },
  {
    compCode: "MDE-0C",
    compLb: "0.05 lb",
    compKg: "(0.02 kg)",
    replCode: "MDE-0Z",
    replLb: "0.05 lb",
    replKg: "(0.02 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '1/4"',
    cDiaMm: "(6 mm)",
    cPlugThread: "5/16 - 18 NC",
  },
  {
    compCode: "MDE-0AC",
    compLb: "0.08 lb",
    compKg: "(0.04 kg)",
    replCode: "MDE-0AZ",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '1/4"',
    cDiaMm: "(6 mm)",
    cPlugThread: "5/16 -18 NC",
  },
  {
    compCode: "MDE-0BC",
    compLb: "0.04 lb",
    compKg: "(0.02 kg)",
    replCode: "MDE-0BZ",
    replLb: "0.04 lb",
    replKg: "(0.02 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '1/4"',
    cDiaMm: "(6 mm)",
    cPlugThread: "5/16 - 18 NC",
  },
  {
    compCode: "MDE-0HC",
    compLb: "0.14 lb",
    compKg: "(0.06 kg)",
    replCode: "MDE-0HZ",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '1 5/8"',
    diaMm: "(41 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 NC",
  },
  {
    compCode: "MDE-1C",
    compLb: "0.1 lb",
    compKg: "(0.05 kg)",
    replCode: "MDE-1Z",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
  {
    compCode: "MDE-1DC",
    compLb: "0.15 lb",
    compKg: "(0.07 kg)",
    replCode: "MDE-1DZ",
    replLb: "0.07 lb",
    replKg: "(0.03 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '1/2"',
    widMm: "(10 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
  {
    compCode: "MDE-1EC",
    compLb: "0.15 lb",
    compKg: "(0.07 kg)",
    replCode: "MDE-1EZ",
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
    compCode: "MDE-1FC",
    compLb: "0.13 lb",
    compKg: "(0.06 kg)",
    replCode: "MDE-1FZ",
    replLb: "0.07 lb",
    replKg: "(0.03 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
  {
    compCode: "MDE-1GC",
    compLb: "0.1 lb",
    compKg: "(0.05 kg)",
    replCode: "MDE-1GZ",
    replLb: "0.06 lb",
    replKg: "(0.03 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 NC",
  },
  {
    compCode: "MDE-1HC",
    compLb: "0.06 lb",
    compKg: "(0.03 kg)",
    replCode: "MDE-1HZ",
    replLb: "0.07 lb",
    replKg: "(0.03 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 NC",
  },
  {
    compCode: "MDE-2C",
    compLb: "0.16 lb",
    compKg: "(0.07 kg)",
    replCode: "MDE-2Z",
    replLb: "0.15 lb",
    replKg: "(0.07 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/16 - 20 NC",
  },
  {
    compCode: "MDE-2BC",
    compLb: "0.26 lb",
    compKg: "(0.12 kg)",
    replCode: "MDE-2BZ",
    replLb: "0.26 lb",
    replKg: "(0.12 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/16 - 14 NC",
  },
  {
    compCode: "MDE-3C",
    compLb: "0.22 lb",
    compKg: "(0.1 kg)",
    replCode: "MDE-3Z",
    replLb: "0.22 lb",
    replKg: "(0.1 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 NC",
  },
  {
    compCode: "MDE-3AC",
    compLb: "0.22 lb",
    compKg: "(0.1 kg)",
    replCode: "MDE-3AZ",
    replLb: "0.22 lb",
    replKg: "(0.1 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 NC",
  },
  {
    compCode: "MDE-4C",
    compLb: "0.37 lb",
    compKg: "(0.17 kg)",
    replCode: "MDE-4Z",
    replLb: "0.38 lb",
    replKg: "(0.17 kg)",
    diaIn: '3 3/8"',
    diaMm: "(86 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 NC",
  },
  {
    compCode: "MDE-5C",
    compLb: "0.38 lb",
    compKg: "(0.17 kg)",
    replCode: "MDE-5Z",
    replLb: "0.41 lb",
    replKg: "(0.19 kg)",
    diaIn: '3 5/8"',
    diaMm: "(92 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 NC",
  },
  {
    compCode: "MDE-6C",
    compLb: "0.76 lb",
    compKg: "(0.34 kg)",
    replCode: "MDE-6Z",
    replLb: "0.55 lb",
    replKg: "(0.25 kg)",
    diaIn: '4 3/4"',
    diaMm: "(121 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "1/2 - 13 NC",
  },
  {
    compCode: "MDE-6LC",
    compLb: "0.04 lb",
    compKg: "(0.02 kg)",
    replCode: "MDE-6LZ",
    replLb: "0.02 lb",
    replKg: "(0.01 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: "-",
    cDiaMm: "-",
    cPlugThread: "1/4 - 20 NC",
  },
  {
    compCode: "MDE-7C",
    compLb: "1.54 lb",
    compKg: "(0.7 kg)",
    replCode: "MDE-7Z",
    replLb: "1.1 lb",
    replKg: "(0.5 kg)",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '1 1/16"',
    widMm: "(27 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    cPlugThread: "3/4 - 10 NC",
  },
  {
    compCode: "MDE-8C",
    compLb: "1.78 lb",
    compKg: "(0.81 kg)",
    replCode: "MDE-8Z",
    replLb: "0.9 lb",
    replKg: "(0.41 kg)",
    diaIn: '2 15/16"',
    diaMm: "(75 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    cPlugThread: "3/4 - 10 NC",
  },
];

const engineBPData = [
  {
    itemCode: "MDE-00 BP",
    itemLb: "0.01 lb",
    itemKg: "(0.005 kg)",
    unc: '1/4"',
  },
  {
    itemCode: "MDE-0 BP",
    itemLb: "0.03 lb",
    itemKg: "(0.014 kg)",
    unc: '5/16"',
  },
  {
    itemCode: "MDE-1 BP",
    itemLb: "0.06 lb",
    itemKg: "(0.027 kg)",
    unc: '3/8"',
  },
  { itemCode: "MDE-2 BP", itemLb: "0.11 lb", itemKg: "(0.05 kg)", unc: '3/8"' },
  {
    itemCode: "MDE-3/4/5 BP",
    itemLb: "0.21 lb",
    itemKg: "(0.095 kg)",
    unc: '3/8"',
  },
  {
    itemCode: "MDE-6 BP",
    itemLb: "0.21 lb",
    itemKg: "(0.095 kg)",
    unc: '1/2"',
  },
  { itemCode: "MDE-7 BP", itemLb: "0.44 lb", itemKg: "(0.2 kg)", unc: '3/4"' },
  {
    itemCode: "MDE-8 BP",
    itemLb: "0.88 lb",
    itemKg: "(0.399 kg)",
    unc: '3/4"',
  },
];

const engine = () => {
  return (
    <div>
      <Hero
        heading={"Engine Anodes"}
        message={
          "Reliance MDE Series of Engine Anodes comes complete with an anode and a brass plug attached or as a replacement of just an anode without brass plug"
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
                    <h1>ENGINE ANODES SPECIFICATIONS</h1>
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
                {engineData.map((item, id) => (
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
            <div className="flex">
              <div className="flex flex-col items-center lg:pr-10">
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
            <table>
              <tbody>
                <tr>
                  <th colSpan={4} className="py-8"><h1>BRASS PLUG SPECIFICATIONS</h1></th>
                </tr>
                <tr>
                  <th>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>UNC</th>
                </tr>
                {engineBPData.map((item, id) => (
                  <ChartEngine2Dim
                    key={id}
                    itemCode={item.itemCode}
                    itemLb={item.itemLb}
                    itemKg={item.itemKg}
                    unc={item.unc}
                  />
                ))}
              </tbody>
            </table>
            <p>
              For more engine anodes, please see our{" "}
              <Link href="/pleasureCraft/engine">CATERPILLAR</Link> and{" "}
              <Link href="/pleasureCraft/detroit">DETROIT DIESEL</Link>{" "}
              sections.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default engine;
