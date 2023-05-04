import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const goriPNData = [
  {
    znCode: "MD-GP-14072100",
    znLb: "0.08 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-GP-14072100",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '3/10"',
    diaMm: "(8 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    cDiaIn: '1 1/8"',
    cDiaMm: "(16 mm)",
  },

  {
    znCode: "MD-GP-14073100",
    znLb: "0.08 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-GP-14073100",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '1/4"',
    diaMm: "(6 mm)",
    widIn: '1 1/10"',
    widMm: "(28 mm)",
    cDiaIn: '46/73"',
    cDiaMm: "(16 mm)",
  },

  {
    znCode: "MD-GP-14074100",
    znLb: "0.19 lb",
    znKg: "(0.09 kg)",
    alCode: "AMD-GP-14074100",
    alLb: "0.07 lb",
    alKg: "(0.03 kg)",
    diaIn: '2/5"',
    diaMm: "(10 mm)",
    widIn: '1 3/10"',
    widMm: "(33 mm)",
    cDiaIn: '4/5"',
    cDiaMm: "(20 mm)",
  },
];

const goriRingData = [
  {
    znCode: "MD-GP-15520000",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-GP-15520000",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    diaIn: '2 3/5"',
    diaMm: "(66 mm)",
    widIn: '1 4/5"',
    widMm: "(46 mm)",
    cDiaIn: '1 1/8"',
    cDiaMm: "(33 mm)",
  },

  {
    znCode: "MD-GP-15527500",
    znLb: "0.08 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-GP-15527500",
    alLb: "0.32 lb",
    alKg: "(0.15 kg)",
    diaIn: '3 1/5"',
    diaMm: "(81 mm)",
    widIn: '2 1/5"',
    widMm: "(56 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
  },

  {
    znCode: "MD-GP-15530000",
    znLb: "1.9 lb",
    znKg: "(0.86 kg)",
    alCode: "AMD-GP-15530000",
    alLb: "0.74 lb",
    alKg: "(0.34 kg)",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '2 1/10"',
    widMm: "(53 mm)",
    cDiaIn: '1 3/5"',
    cDiaMm: "(41 mm)",
  },

  {
    znCode: "MD-GP-15539500",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "AMD-GP-15539500",
    alLb: "0.86 lb",
    alKg: "(0.39 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '2 2/5"',
    widMm: "(61 mm)",
    cDiaIn: '1 3/10"',
    cDiaMm: "(33 mm)",
  },

  {
    znCode: "MD-GP-15540000",
    znLb: "2.9 lb",
    znKg: "(1.32 kg)",
    alCode: "AMD-GP-15540000",
    alLb: "1.13 lb",
    alKg: "(0.51 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '2 2/5"',
    widMm: "(61 mm)",
    cDiaIn: '1 4/5"',
    cDiaMm: "(46 mm)",
  },

  {
    znCode: "MD-GP-15670000",
    znLb: "1.41 lb",
    znKg: "(0.64 kg)",
    alCode: "AMD-GP-15670000",
    alLb: "0.85 lb",
    alKg: "(0.39 kg)",
    diaIn: '3 4/5"',
    diaMm: "(97 mm)",
    widIn: '3 1/10"',
    widMm: "(79 mm)",
    cDiaIn: '1 3/5"',
    cDiaMm: "(41 mm)",
  },
];

const gori = () => {
  return (
    <div>
      <Hero
        heading={"gori Anode"}
        message={
          "A hanging anode that helps with general corrosion protection on and around your boat"
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
                  <th colSpan={6} className="py-8">
                    <h1>GORI PROPELLER NUTS</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
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
                    <p className="text-sm md:text-lg">HOLE DIAMETER</p>
                  </th>
                  <th>
                    B:
                    <p className="text-sm md:text-lg">WIDTH</p>
                  </th>
                  <th>
                    C:
                    <p className="text-sm md:text-lg">HEIGHT</p>
                  </th>
                </tr>
                {goriPNData.map((item, id) => (
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
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
                <p className="pb-4">Gori Propeller Nut</p>
                <Image
                  src="https://user-images.githubusercontent.com/77664153/236334426-52e14dcd-81e5-4db6-a5a9-df49ca07d8eb.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={300}
                  height={180}
                />
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>GORI PROPELLER RINGS</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
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
                    <p className="text-sm md:text-lg">OUTSIDE DIAMETER</p>
                  </th>
                  <th>
                    B:
                    <p className="text-sm md:text-lg">INSIDE DIAMETER</p>
                  </th>
                  <th>
                    C:
                    <p className="text-sm md:text-lg">HEIGHT</p>
                  </th>
                </tr>
                {goriRingData.map((item, id) => (
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
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
                <p className="pb-4">Gori Propeller Ring</p>
                <Image
                  src="https://user-images.githubusercontent.com/77664153/236336216-8822d1e5-62ae-4a51-a34c-ee49f1747623.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default gori;
