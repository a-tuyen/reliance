import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart4pt2DimNote from "@/components/Chart4pt2DimNote";
import Image from "next/image";
import Link from "next/link";

const propNutData = [
  {
    compZnCode: "A",
    compZnLb: "0.3 lb",
    compZnKg: "(0.14 kg)",
    compAlCode: "AA",
    compAlLb: "0.34 lb",
    compAlKg: "(0.15 kg)",
    replZnCode: " A",
    replZnLb: "0.22 lb",
    replZnKg: "(0.1 kg)",
    replAlCode: "AA",
    replAlLb: "0.09 lb",
    replAlKg: "(0.04 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cPlugThread: "1/2 NC 13",
  },

  {
    compZnCode: "B",
    compZnLb: "0.8 lb",
    compZnKg: "(0.36 kg)",
    compAlCode: "AB",
    compAlLb: "0.46 lb",
    compAlKg: "(0.21 kg)",
    replZnCode: " B",
    replZnLb: "0.49 lb",
    replZnKg: "(0.22 kg)",
    replAlCode: "AB",
    replAlLb: "0.19 lb",
    replAlKg: "(0.09 kg)",
    diaIn: '7/8"',
    diaMm: "(22 mm)",
    widIn: '1 5/8"',
    widMm: "(41 mm)",
    cPlugThread: "5/8 NC 11",
  },

  {
    compZnCode: "C",
    compZnLb: "1.4 lb",
    compZnKg: "(0.64 kg)",
    compAlCode: "AC",
    compAlLb: "0.78 lb",
    compAlKg: "(0.35 kg)",
    replZnCode: " C",
    replZnLb: "1.09 lb",
    replZnKg: "(0.49 kg)",
    replAlCode: "AC",
    replAlLb: "0.43 lb",
    replAlKg: "(0.2 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
    cPlugThread: "3/4 NC 10",
  },

  {
    compZnCode: "D",
    compZnLb: "2.2 lb",
    compZnKg: "(1 kg)",
    compAlCode: "AD",
    compAlLb: "1.33 lb",
    compAlKg: "(0.6 kg)",
    replZnCode: " D",
    replZnLb: "1.55 lb",
    replZnKg: "(0.7 kg)",
    replAlCode: "AD",
    replAlLb: "0.61 lb",
    replAlKg: "(0.28 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '2 5/16"',
    widMm: "(59 mm)",
    cPlugThread: "7/8 NC 9",
  },

  {
    compZnCode: "E",
    compZnLb: "2.6 lb",
    compZnKg: "(1.18 kg)",
    compAlCode: "AE",
    compAlLb: "1.43 lb",
    compAlKg: "(0.65 kg)",
    replZnCode: " E",
    replZnLb: "1.76 lb",
    replZnKg: "(0.8 kg)",
    replAlCode: "AE",
    replAlLb: "0.69 lb",
    replAlKg: "(0.31 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cPlugThread: "1 NC 8",
  },

  {
    compZnCode: "F",
    compZnLb: "3.1 lb",
    compZnKg: "(1.41 kg)",
    compAlCode: "AF",
    compAlLb: "1.75 lb",
    compAlKg: "(0.79 kg)",
    replZnCode: " F",
    replZnLb: "2.1 lb",
    replZnKg: "(0.95 kg)",
    replAlCode: "AF",
    replAlLb: "0.82 lb",
    replAlKg: "(0.37 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cPlugThread: "1 1/8 NC 7",
  },

  {
    compZnCode: "G",
    compZnLb: "4.3 lb",
    compZnKg: "(1.95 kg)",
    compAlCode: "AG",
    compAlLb: "2.59 lb",
    compAlKg: "(1.17 kg)",
    replZnCode: " G",
    replZnLb: "2.81 lb",
    replZnKg: "(1.27 kg)",
    replAlCode: "AG",
    replAlLb: "1.1 lb",
    replAlKg: "(0.5 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/8"',
    widMm: "(79 mm)",
    cPlugThread: "1 1/4 NC 7",
  },

  {
    compZnCode: "H",
    compZnLb: "5.6 lb",
    compZnKg: "(2.54 kg)",
    compAlCode: "AH",
    compAlLb: "3.22 lb",
    compAlKg: "(1.46 kg)",
    replZnCode: " H",
    replZnLb: "3.17 lb",
    replZnKg: "(1.44 kg)",
    replAlCode: "AH",
    replAlLb: "1.24 lb",
    replAlKg: "(0.56 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 3/8"',
    widMm: "(86 mm)",
    cPlugThread: "1/2 NC 6",
  },
];

const propNut = () => {
  return (
    <div>
      <Hero heading={"Propeller Nut Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={7} className="py-8">
                    <h1>PROPELLER NUT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
                    <p>REPLACEMENT comes with just the Anode</p>
                    <p>COMPLETE comes with the Anode and Brass Insert</p>
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
                    <p className="text-sm md:text-lg">SHAFT SIZE</p>
                  </th>
                  <th>
                    <p className="text-sm md:text-lg">OD</p>
                  </th>
                  <th>
                    <p className="px-2 text-sm md:text-lg">
                      THREAD SIZE PER INCH
                    </p>
                  </th>
                </tr>
                {propNutData.map((item, id) => (
                  <Chart4pt2DimNote
                    key={id}
                    compZnCode={item.compZnCode}
                    compZnLb={item.compZnLb}
                    compZnKg={item.compZnKg}
                    replZnCode={item.replZnCode}
                    replZnLb={item.replZnLb}
                    replZnKg={item.replZnKg}
                    compAlCode={item.compAlCode}
                    compAlLb={item.compAlLb}
                    compAlKg={item.compAlKg}
                    replAlCode={item.replAlCode}
                    replAlLb={item.replAlLb}
                    replAlKg={item.replAlKg}
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
              <p className="py-4 font-bold">PROP NUT</p>
                <Image
                  src="https://user-images.githubusercontent.com/77664153/252786322-7161b0af-889e-4c0e-ba31-43340322c971.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <p className="text-center pt-6 pb-4">
              For more Prop Nut anodes, please see our{" "}
              <Link href="/products/pleasureCraft/gori">
                GORI
              </Link>{" "}
              section.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default propNut;
