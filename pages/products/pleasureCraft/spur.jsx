import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Image from "next/image";

const spurData = [
  {
    znCode: "SIZE A",
    znLb: "0.05 lb",
    znKg: "(0.02 kg)",
    alCode: "SIZE A",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '10/27"',
    diaMm: "(9 mm)",
    widIn: '0.68"',
    widMm: "(17 mm)",
  },
  {
    znCode: "SIZE B",
    znLb: "0.05 lb",
    znKg: "(0.02 kg)",
    alCode: "SIZE B",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '2/5"',
    diaMm: "(10 mm)",
    widIn: '0.68"',
    widMm: "(17 mm)",
  },
  {
    znCode: "SIZE C-D-E",
    znLb: "0.10 lb",
    znKg: "(0.05 kg)",
    alCode: "SIZE C-D-E",
    alLb: "0.05 lb",
    alKg: "(0.02 kg)",
    diaIn: '13/25"',
    diaMm: "(13 mm)",
    widIn: '1.25"',
    widMm: "(32 mm)",
  },

  {
    znCode: "SIZE F-F1",
    znLb: "0.20 lb",
    znKg: "(0.09 kg)",
    alCode: "SIZE F-F1",
    alLb: "0.08 lb",
    alKg: "(0.04 kg)",
    diaIn: '10/27"',
    diaMm: "(9 mm)",
    widIn: '0.68"',
    widMm: "(17 mm)",
  },
];

const spur = () => {
  return (
    <div>
      <Hero heading={"Spurs Line Cutter Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1 className="text-center pt-4">
                      SPURS LINE CUTTER ANODE SPECIFICATIONS
                    </h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="pl-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: INSIDE WIDTH</th>
                  <th>B: OVERALL HEIGHT</th>
                </tr>
                {spurData.map((item, id) => (
                  <Chart2Dim
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
                  />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232573112-a2b80387-7d49-4003-9b74-9f36bcac6ac6.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4"></p>
              </div>
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232573113-221a0424-11fc-443f-abb6-b1d158c038d3.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4">SIZES A TO E</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232573114-e7230f1b-485b-4b34-83d9-b955efddcde7.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4">SIZE F-F1</p>
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default spur;
