import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";

const propNutData = [
  {
    znCode: "A",
    znLb: "2.4",
    znKg: "(0.90)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "2.0",
    diaMm: "(50)",
    widIn: "2.75",
    widMm: "(69)",
    cDiaIn: "2.875",
    cDiaMm: "(73)",
  },
  {
    znCode: "B",
    znLb: "2.6",
    znKg: "(1.15)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "2.25",
    diaMm: "(57)",
    widIn: "3.0",
    widMm: "(76)",
    cDiaIn: "3.0",
    cDiaMm: "(76)",
  },
  {
    znCode: "1",
    znLb: "4.0",
    znKg: "(1.80)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "2.5",
    diaMm: "(63)",
    widIn: "3.375",
    widMm: "(85)",
    cDiaIn: "3.625",
    cDiaMm: "(92)",
  },
  {
    znCode: "2",
    znLb: "4.9",
    znKg: "(2.50)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "2.875",
    diaMm: "(73)",
    widIn: "3.75",
    widMm: "(95)",
    cDiaIn: "4.0",
    cDiaMm: "(101)",
  },
  {
    znCode: "3",
    znLb: "5.8",
    znKg: "(2.70)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "3.25",
    diaMm: "(82)",
    widIn: "4.125",
    widMm: "(104)",
    cDiaIn: "4.0",
    cDiaMm: "(101)",
  },
  {
    znCode: "4",
    znLb: "8.0",
    znKg: "(3.40)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "3.75",
    diaMm: "(95)",
    widIn: "4.625",
    widMm: "(117)",
    cDiaIn: "4.5",
    cDiaMm: "(114)",
  },
  {
    znCode: "5",
    znLb: "10.3",
    znKg: "(5.00)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "4.25",
    diaMm: "(107)",
    widIn: "5.25",
    widMm: "(133)",
    cDiaIn: "5.0",
    cDiaMm: "(127)",
  },
  {
    znCode: "6",
    znLb: "11.5",
    znKg: "(5.20)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "4.625",
    diaMm: "(117)",
    widIn: "5.625",
    widMm: "(142)",
    cDiaIn: "5.5",
    cDiaMm: "(139)",
  },
  {
    znCode: "7",
    znLb: "13.0",
    znKg: "(5.90)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "5.0",
    diaMm: "(127)",
    widIn: "6.0",
    widMm: "(152)",
    cDiaIn: "6.0",
    cDiaMm: "(152)",
  },
  {
    znCode: "8",
    znLb: "17.8",
    znKg: "(7.60)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "5.5",
    diaMm: "(139)",
    widIn: "6.625",
    widMm: "(168)",
    cDiaIn: "6.375",
    cDiaMm: "(161)",
  },
  {
    znCode: "9",
    znLb: "24.8",
    znKg: "(8.85)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "6.0",
    diaMm: "(152)",
    widIn: "7.125",
    widMm: "(180)",
    cDiaIn: "6.75",
    cDiaMm: "(171)",
  },
  {
    znCode: "10",
    znLb: "25.5",
    znKg: "(11.35)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "6.5",
    diaMm: "(165)",
    widIn: "7.75",
    widMm: "(196)",
    cDiaIn: "7.0",
    cDiaMm: "(177)",
  },
  {
    znCode: "11",
    znLb: "29.8",
    znKg: "(12.7)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "70",
    diaMm: "(177)",
    widIn: "8.125",
    widMm: "(206)",
    cDiaIn: "8.125",
    cDiaMm: "(206)",
  },
  {
    znCode: "12",
    znLb: "38.5",
    znKg: "(16.8)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "7.5",
    diaMm: "(190)",
    widIn: "8.75",
    widMm: "(222)",
    cDiaIn: "9.0",
    cDiaMm: "(228)",
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
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                  <th colSpan={6}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={3} className="bg-zinc">
                    ZINC ANODE
                  </th>
                  <th colSpan={3} className="bg-alum">
                    ALUMINUM ANODE
                  </th>
                  <th colSpan={2}>DIAMETER</th>
                  <th colSpan={2}>WIDTH</th>
                  <th colSpan={2}>C-DEPTH</th>
                </tr>

                <tr>
                  <th className="bg-zinc">ITEM #</th>
                  <th className="bg-zinc border-r-0">lb</th>
                  <th className="bg-zinc border-l-0">(kg)</th>
                  <th className="bg-alum">ITEM #</th>
                  <th className="bg-alum border-r-0">lb</th>
                  <th className="bg-alum border-l-0">(kg)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
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
          </main>
        </article>
      </div>
    </div>
  );
};

export default propNut;
