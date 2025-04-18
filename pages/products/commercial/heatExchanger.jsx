import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";

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
    widMm: "-",
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
    widMm: "-",
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
    widMm: "-",
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
    widMm: "-",
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
    widMm: "-",
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
    widMm: "-",
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
    widMm: "-",
    cDiaIn: "1.0",
    cDiaMm: "(25)",
  },
];

const heatExchanger = () => {
  return (
    <div>
      <Hero heading={"Heat Exchanger Anodes"} message={"Used for protection of Heat Exchangers and for other areas where space is limited"} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                  <h1>HEAT EXCHANGER</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
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
                <tr>
                  <th colSpan={6} className="text-left px-5">
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
            <div className="flex pb-6">
              <Image
                src="https://user-images.githubusercontent.com/77664153/228010869-9e860457-5051-48af-b23c-e97646465f06.png"
                alt="picture of anode"
                className="min-w-[80px] lg:pr-8"
                width={200}
                height={100}
              />
              <Image
                src="https://user-images.githubusercontent.com/77664153/228010876-69ca6917-cc47-48eb-93aa-630c0c4f15e2.png"
                alt="picture of anode"
                className="min-w-[80px] lg:pl-8"
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

export default heatExchanger;
