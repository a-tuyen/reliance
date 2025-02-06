import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartEngine4Dim from "@/components/ChartEngine4Dim";
import Image from "next/image";
import Link from "next/link";

const detroitData = [
  {
    compCode: "MD- 8515842C",
    compLb: "0.53 lb",
    compKg: "(0.24 kg)",
    replCode: "MD-8515842Z",
    replLb: "0.25 lb",
    replKg: "(0.11 kg)",
    diaIn: '2 1/8"',
    diaMm: "(54 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "5/8 - 11 UNC",
  },
  {
    compCode: "MD- 8515850C",
    compLb: "0.53 lb",
    compKg: "(0.24 kg)",
    replCode: "MD-8515850Z",
    replLb: "0.38 lb",
    replKg: "(0.17 kg)",
    diaIn: '3 3/8"',
    diaMm: "(86 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
    cDiaIn: '3/4"',
    cDiaMm: "(19 mm)",
    cPlugThread: "5/8 - 11 UNC",
  },
  {
    compCode: "MD- 8517479C",
    compLb: "0.3 lb",
    compKg: "(0.14 kg)",
    replCode: "MD-8517479Z",
    replLb: "0.16 lb",
    replKg: "(0.07 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    cPlugThread: "7/6 - 14 UNC",
  },
  {
    compCode: "MD- 8925832C",
    compLb: "0.25 lb",
    compKg: "(0.11 kg)",
    replCode: "MD-8925832Z",
    replLb: "0.08 lb",
    replKg: "(0.04 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    cPlugThread: "3/8 - 16 UNC",
  },
];

const detroit = () => {
  return (
    <div>
      <Hero
        heading={"Detroit Diesel Engine Anodes"}
        message={
          "Reliance Detroit Diesel Engine Anodes come complete with an anode and a brass plug attached or as a replacement of just an anode without brass plug"
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
                  <h1>DETROIT DIESEL ENGINE</h1>
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
                    C: PLUG
                    <p className="px-2 text-sm md:text-lg">
                      INTERNAL THREAD
                    </p>
                  </th>
                  <th>
                    D: PLUG 
                    <p className="px-2 text-sm md:text-lg">
                    EXTERNAL THREAD (NPT)
                    </p>
                  </th>
                </tr>
                {detroitData.map((item, id) => (
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
                  src="/anodes/Engine.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={250}
                  height={150}
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
                <p>Detroit Diesel Engine Replacement Anode</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/231298152-9273af43-a9e3-46af-aadb-a34389bcc658.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>Detroit Diesel Engine Brass Plug</p>
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
