import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const mdgStdData = [
 
];

const mdgMetricData = [
 
];


const mdg = () => {
  return (
    <div>
      <Hero heading={"MDG Shaft Anodes "} message={"European Style Shaft Anodes"} img={"bg-img2"} />
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
