import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimPic from "@/components/Chart4DimPic";

const semiStreamlinedWeldData = [
  {
    znCode: "Z3 / ZSS",
    znLb: "10.0",
    znKg: "(4.54)",
    alCode: "AZ3 / ZSS",
    alLb: "5.0",
    alKg: "(2.27)",
    diaIn: "12.0",
    diaMm: "(305)",
    widIn: "3.0",
    widMm: "(76)",
    cDiaIn: "1.25",
    cDiaMm: "(31)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "Z4",
    znLb: "5.0",
    znKg: "(2.27)",
    alCode: "AZ4",
    alLb: "2.1",
    alKg: "(0.95)",
    diaIn: "6.0",
    diaMm: "(152)",
    widIn: "3.5",
    widMm: "(89)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "Z6",
    znLb: "3.0",
    znKg: "(1.36)",
    alCode: "AZ6",
    alLb: "1.3",
    alKg: "(0.59)",
    diaIn: "5.0",
    diaMm: "(127)",
    widIn: "2.5",
    widMm: "(64)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "Z19",
    znLb: "23",
    znKg: "(10.43)",
    alCode: "AZ19",
    alLb: "10.0",
    alKg: "(0.59)",
    diaIn: "5.0",
    diaMm: "(127)",
    widIn: "2.5",
    widMm: "(64)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "Z-220",
    znLb: "62.0",
    znKg: "(28.12)",
    alCode: "AZ-220",
    alLb: "26.0",
    alKg: "(11.79)",
    diaIn: "27.0",
    diaMm: "(686)",
    widIn: "5.0",
    widMm: "(127)",
    cDiaIn: "1.75",
    cDiaMm: "(44)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "ZC-5",
    znLb: "5.0",
    znKg: "(2.27)",
    alCode: "AZC-5",
    alLb: "2.1",
    alKg: "(0.95)",
    diaIn: "9.0",
    diaMm: "(229)",
    widIn: "2.25",
    widMm: "(57)",
    cDiaIn: "1.25",
    cDiaMm: "(31)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
  {
    znCode: "ZC-7",
    znLb: "7.0",
    znKg: "(3.18)",
    alCode: "AZC-7",
    alLb: "3.0",
    alKg: "(1.36)",
    diaIn: "9.0",
    diaMm: "(229)",
    widIn: "2.25",
    widMm: "(57)",
    cDiaIn: "1.625",
    cDiaMm: "(41)",
    dMeasureIn: "-",
    dMeasureMm: "(-)",
    notes: "",
  },
];

const semiStreamlinedBoltData = [
  {
    znCode: "Z3BS",
    znLb: "8.5",
    znKg: "(3.86)",
    alCode: "AZ3BS",
    alLb: "4.0",
    alKg: "(1.81)",
    diaIn: "12.0",
    diaMm: "(305)",
    widIn: "3.0",
    widMm: "(76)",
    cDiaIn: "1.50",
    cDiaMm: "(38)",
    dMeasureIn: "6-8",
    dMeasureMm: "(152-203)",
    notes: "SLOTTED / AL INSERT",
  },
];

const semiStreamlined = () => {
  return (
    <div>
      <Hero
        heading={"Semi-Streamlined Anodes"}
        message={
          "Suitale for small, medium and large vessels. Often found on hulls, sea tanks, bilges, ballast tanks, and structures."
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
              <tr>
                  <th colSpan={7} className="py-8">
                    <h1>SEMI-STREAMLINED ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>

                  <th colSpan={2}>ITEM #</th>

                  <th className="border-r-0 ">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                    <div>lb</div>
                    <div className="px-2">(kg)</div>
                    </div>
                    </th>


                  <th>A - LENGTH</th>
                  <th>B - WIDTH</th>
                  <th>C - DEPTH</th>
                  <th>D - C/C</th>
                </tr>
                <tr>
                  <th colSpan={7} className="text-left px-5">
                    WELD ON
                  </th>
                </tr>
                {semiStreamlinedWeldData.map((item, id) => (
                  <Chart4DimPic
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
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))}
                <tr>
                  <th colSpan={7} className="text-left px-5">
                    BOLT ON
                  </th>
                </tr>
                {semiStreamlinedBoltData.map((item, id) => (
                  <Chart4DimPic
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
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default semiStreamlined;
