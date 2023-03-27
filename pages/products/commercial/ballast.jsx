import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";

const ballastData = [
  {
    znCode: "ZMD3602",
    znLb: "90.0 lb",
    znKg: "(40.91 kg)",
    alCode: "AMD3602",
    alLb: "35 lb",
    alKg: "(16 kg)",
    diaIn: '60.0"',
    diaMm: "(1524 mm)",
    widIn: '2.5"',
    widMm: "(64 mm)",
    cDiaIn: '3.0"',
    cDiaMm: "(76 mm)",
  },
];

const ballast = () => {
  return (
    <div>
      <Hero heading={"Ballast Tank Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>BALLAST TANK ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr></tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: LENGTH</th>
                  <th>B: WIDTH</th>
                  <th>C: DEPTH</th>
                </tr>
                {ballastData.map((item, id) => (
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
                  />
                ))}
              </tbody>
            </table>
            <Image
              src="https://user-images.githubusercontent.com/77664153/228003981-5a67065d-948f-4f4b-aeea-ab8a83f572fa.png"
              alt="picture of anode"
              className="min-w-[80px]"
              width={200}
              height={100}
            />
            <p className="pt-4 pb-4 text-center w-[80%]">
              These Ballast Tank Anodes are available in any length up to the
              maximum shown in the chart. Supplied with straight or bent rod
              extensions. Other rod sizes and configurations may be specified by
              purchaser.</p>
            
          </main>
        </article>
      </div>
    </div>
  );
};

export default ballast;
