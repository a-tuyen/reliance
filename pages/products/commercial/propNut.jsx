import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";

const propNutData = [
  {
    znCode: "A",
    znLb: "2.4 lb",
    znKg: "(0.90 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2.0"',
    diaMm: "(50 mm)",
    widIn: '2.75"',
    widMm: "(69 mm)",
    cDiaIn: '2.875"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "B",
    znLb: "2.6 lb",
    znKg: "(1.15 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2.25"',
    diaMm: "(57 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '3.0"',
    cDiaMm: "(76 mm)",
  },

  {
    znCode: "1",
    znLb: "4.0 lb",
    znKg: "(1.80 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2.5"',
    diaMm: "(63 mm)",
    widIn: '3.375"',
    widMm: "(85 mm)",
    cDiaIn: '3.625"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "2",
    znLb: "4.9 lb",
    znKg: "(2.50 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2.875"',
    diaMm: "(73 mm)",
    widIn: '3.75"',
    widMm: "(95 mm)",
    cDiaIn: '4.0"',
    cDiaMm: "(101 mm)",
  },
  {
    znCode: "3",
    znLb: "5.8 lb",
    znKg: "(2.70 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '3.25"',
    diaMm: "(82 mm)",
    widIn: '4.125"',
    widMm: "(104 mm)",
    cDiaIn: '4.0"',
    cDiaMm: "(101 mm)",
  },
  {
    znCode: "4",
    znLb: "8.0 lb",
    znKg: "(3.40 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '3.75"',
    diaMm: "(95 mm)",
    widIn: '4.625"',
    widMm: "(117 mm)",
    cDiaIn: '4.5"',
    cDiaMm: "(114 mm)",
  },
  {
    znCode: "5",
    znLb: "10.3 lb",
    znKg: "(5.00 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '4.25"',
    diaMm: "(107 mm)",
    widIn: '5.25"',
    widMm: "(133 mm)",
    cDiaIn: '5.0"',
    cDiaMm: "(127 mm)",
  },
  {
    znCode: "6",
    znLb: "11.5 lb",
    znKg: "(5.20 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '4.625"',
    diaMm: "(117 mm)",
    widIn: '5.625"',
    widMm: "(142 mm)",
    cDiaIn: '5.5"',
    cDiaMm: "(139 mm)",
  },
  {
    znCode: "7",
    znLb: "13.0 lb",
    znKg: "(5.90 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '5.0"',
    diaMm: "(127 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '6.0"',
    cDiaMm: "(152 mm)",
  },
  {
    znCode: "8",
    znLb: "17.8 lb",
    znKg: "(7.60 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '5.5"',
    diaMm: "(139 mm)",
    widIn: '6.625"',
    widMm: "(168 mm)",
    cDiaIn: '6.375"',
    cDiaMm: "(161 mm)",
  },
  {
    znCode: "9",
    znLb: "24.8 lb",
    znKg: "(8.85 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '6.0"',
    diaMm: "(152 mm)",
    widIn: '7.125"',
    widMm: "(180 mm)",
    cDiaIn: '6.75"',
    cDiaMm: "(171 mm)",
  },
  {
    znCode: "10",
    znLb: "25.5 lb",
    znKg: "(11.35 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '6.5"',
    diaMm: "(165 mm)",
    widIn: '7.75"',
    widMm: "(196 mm)",
    cDiaIn: '7.0"',
    cDiaMm: "(177 mm)",
  },
  {
    znCode: "11",
    znLb: "29.8 lb",
    znKg: "(12.7 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '70"',
    diaMm: "(177 mm)",
    widIn: '8.125"',
    widMm: "(206 mm)",
    cDiaIn: '8.125"',
    cDiaMm: "(206 mm)",
  },
  {
    znCode: "12",
    znLb: "38.5 lb",
    znKg: "(16.8 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '7.5"',
    diaMm: "(190 mm)",
    widIn: '8.75"',
    widMm: "(222 mm)",
    cDiaIn: '9.0"',
    cDiaMm: "(228 mm)",
  },
];

const propNut = () => {
  return (
    <div>
      <Hero
        heading={"Commercial Propeller Nut Anodes"}
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

                    <h1>COMMERCIAL PROPELLER NUT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
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
                  <th>A: DIAMETER (ID)</th>
                  <th>B: DIAMETER (OD)</th>
                  <th>C: DEPTH</th>
                </tr>
                {propNutData.map((item, id) => (
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
            <div className="flex pb-4">
            <Image
              src="https://user-images.githubusercontent.com/77664153/228033667-1bfc73f5-a192-441a-a327-532fa41854b8.png"
              alt="picture of anode"
              className="min-w-[80px] lg:pr-10"
              width={200}
              height={100}
            />
            <Image
              src="https://user-images.githubusercontent.com/77664153/228033670-8743d4d9-7606-4b11-bbf4-32933bcd57b9.png"
              alt="picture of anode"
              className="min-w-[80px] lg:pl-10"
              width={200}
              height={100}
            />
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default propNut;
