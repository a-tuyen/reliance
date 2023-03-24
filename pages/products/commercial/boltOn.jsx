import React from "react";
import Chart3Dim from "@/components/Chart3Dim";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Image from "next/image";

const boltOnData = [
  {
    znCode: "MD-Z-7",
    znLb: "12.5 lb",
    znKg: "(6.0 kg)",
    alCode: "AMD-Z-7",
    alLb: "5.5 lb",
    alKg: "(2.49 kg)",
    diaIn: '8 1/2"',
    diaMm: "(216 mm)",
    widIn: "-",
    widMm: "-",
    cDiaIn: '7/16"',
    cDiaMm: "(17 mm)",
  },

  {
    znCode: "MD-ZD-56",
    znLb: "2.5 lb",
    znKg: "(1.136 kg)",
    alCode: "AMD-ZD-56",
    alLb: "0.80 lb",
    alKg: "(0.364 kg)",
    diaIn: '4"',
    diaMm: "(101 mm)",
    widIn: "-",
    widMm: "-",
    cDiaIn: '7/16"',
    cDiaMm: "(17 mm)",
  },
  {
    znCode: "MD-ZD-58",
    znLb: "4.40 lb",
    znKg: "(2.000 kg)",
    alCode: "AMD-ZD-58",
    alLb: "1.31 lb",
    alKg: "(0.595 kg)",
    diaIn: '5.9"',
    diaMm: "(132 mm)",
    widIn: "-",
    widMm: "-",
    cDiaIn: '7/16"',
    cDiaMm: "(17 mm)",
  },
];

const boltOn = () => {
  return (
    <div>
      <Hero
        heading={"Bolt On Anodes (Pie Anodes)"}
        message={""}
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>BOLT-ON (PIE ANODE) SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>

                <tr>
                  <th colspan={2} className="">
                    ITEM #
                  </th>
                  <th>
                    {" "}
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>DIAMETER</th>
                  <th>WIDTH</th>
                  <th>BOLT DIAMETER</th>
                </tr>
                {boltOnData.map((item, id) => (
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
            <div className="flex flex-row">
              <div className="flex flex-col items-center mr-3 mb-3">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/227375989-41edee47-7c80-4036-92d1-bfba65d1b1c8.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>Z-7</p>
              </div>
              <div className="flex flex-col items-center ml-3 mr-8 mb-3">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/227376003-f3889d35-0e22-4d65-bbf8-c9b6477d130b.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>ZD-56 / ZD-58</p>
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default boltOn;
