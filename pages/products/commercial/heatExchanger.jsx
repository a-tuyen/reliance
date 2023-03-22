import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";

const heatExchangerSquareData = [
  {
    znCode: "H1B6 / ZEP",
    znLb: "9.0",
    znKg: "(4.10)",
    alCode: "AH1B6 / AZEP",
    alLb: "3.8",
    alKg: "(1.7)",
    diaIn: "6.0",
    diaMm: "(152)",
    widIn: "6.0",
    widMm: "(152)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
];

const heatExchangerCircleData = [
  {
    znCode: 'H2B2 / ZEP 2"',
    znLb: "0.8",
    znKg: "(.35)",
    alCode: 'AH2B2 / AZEP 2"',
    alLb: "0.3",
    alKg: "(0.15)",
    diaIn: "2.0",
    diaMm: "(50)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B3 / ZEP 3"',
    znLb: "1.8",
    znKg: "(.80)",
    alCode: 'AH2B3 / AZEP 3"',
    alLb: "0.7",
    alKg: "(0.30)",
    diaIn: "3.0",
    diaMm: "(76)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B4 / ZEP 4"',
    znLb: "3.2",
    znKg: "(1.45)",
    alCode: 'AH2B4 / AZEP 4"',
    alLb: "1.3",
    alKg: "(0.60)",
    diaIn: "4.0",
    diaMm: "(101)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B5 / ZEP 5"',
    znLb: "4.9",
    znKg: "(2.20)",
    alCode: 'AH2B5 / AZEP 5"',
    alLb: "2.0",
    alKg: "(0.90)",
    diaIn: "5.0",
    diaMm: "(127)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B6 / ZEP 6"',
    znLb: "7.11",
    znKg: "(3.20)",
    alCode: 'AH2B6 / AZEP 6"',
    alLb: "3.0",
    alKg: "(1.35)",
    diaIn: "6.0",
    diaMm: "(152)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B9 / ZEP 9"',
    znLb: "16.2",
    znKg: "(7.35)",
    alCode: 'AH2B9 / AZEP 9"',
    alLb: "7.05",
    alKg: "(3.20)",
    diaIn: "9.0",
    diaMm: "(229)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
  {
    znCode: 'H2B11 / ZEP 11"',
    znLb: "24.7",
    znKg: "(11.2)",
    alCode: 'AH2B11 / AZEP 11"',
    alLb: "10.75",
    alKg: "(4.88)",
    diaIn: "11.0",
    diaMm: "(279)",
    widIn: "-",
    widMm: "(-)",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
];

const heatExchanger = () => {
  return (
    <div>
      <Hero heading={"Heat Exchanger Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={12} className="py-8">
                    <h1>HEAT EXCHANGER ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
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
                  <th colSpan={2}>A-LENGTH</th>
                  <th colSpan={2}>B-WIDTH</th>
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
                <tr>
                  <th colSpan={12} className="text-left px-5">
                    STYLE A - SQUARE
                  </th>
                </tr>
                {heatExchangerSquareData.map((item, id) => (
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
                <tr>
                  <th colSpan={6} className="text-left px-5">
                    STYLE A - CIRCLE
                  </th>
                  <th colSpan={2}>A-DIAMETER</th>
                  <th colSpan={2}>B-WIDTH</th>
                  <th colSpan={2}>C-DEPTH</th>
                </tr>
                {heatExchangerCircleData.map((item, id) => (
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

export default heatExchanger;
