import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";

const donutStdData = [
  {
    znCode: "MDC-A",
    znLb: "0.9 lb",
    znKg: "(0.41 kg)",
    alCode: "AMDC-A",
    alLb: "0.39 lb",
    alKg: "(0.18 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: "MDC-1",
    znLb: "0.67 lb",
    znKg: "(0.3 kg)",
    alCode: "AMDC-1",
    alLb: "0.26 lb",
    alKg: "(0.12 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
  },
  {
    znCode: "MDC-2",
    znLb: "0.64 lb",
    znKg: "(0.29 kg)",
    alCode: "AMDC-2",
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '7/8"',
    diaMm: "(22 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-3",
    znLb: "1.03 lb",
    znKg: "(0.47 kg)",
    alCode: "AMDC-3",
    alLb: "0.43 lb",
    alKg: "(0.2 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-4",
    znLb: "0.9 lb",
    znKg: "(0.41 kg)",
    alCode: "AMDC-4",
    alLb: "0.39 lb",
    alKg: "(0.18 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '5/8"',
    cDiaMm: "(16 mm)",
  },
  {
    znCode: "MDC-5",
    znLb: "0.98 lb",
    znKg: "(0.44 kg)",
    alCode: "AMDC-5",
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-6",
    znLb: "1.48 lb",
    znKg: "(0.67 kg)",
    alCode: "AMDC-6",
    alLb: "0.58 lb",
    alKg: "(0.26 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-7",
    znLb: "1.42 lb",
    znKg: "(0.64 kg)",
    alCode: "AMDC-7",
    alLb: "0.55 lb",
    alKg: "(0.25 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-8",
    znLb: "3.11 lb",
    znKg: "(1.41 kg)",
    alCode: "AMDC-8",
    alLb: "1.21 lb",
    alKg: "(0.55 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
  },
  {
    znCode: "MDC-9",
    znLb: "2.79 lb",
    znKg: "(1.27 kg)",
    alCode: "AMDC-9",
    alLb: "1.27 lb",
    alKg: "(0.58 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
  },
  {
    znCode: "MDC-9A",
    znLb: "2.56 lb",
    znKg: "(1.16 kg)",
    alCode: "AMDC-9A",
    alLb: "1 lb",
    alKg: "(0.45 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
  },
  {
    znCode: "MDC-12",
    znLb: "4.59 lb",
    znKg: "(2.08 kg)",
    alCode: "AMDC-12",
    alLb: "1.79 lb",
    alKg: "(0.81 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-12A",
    znLb: "4.48 lb",
    znKg: "(2.03 kg)",
    alCode: "AMDC-12A",
    alLb: "1.75 lb",
    alKg: "(0.79 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-13",
    znLb: "4.11 lb",
    znKg: "(1.86 kg)",
    alCode: "AMDC-13",
    alLb: "1.61 lb",
    alKg: "(0.73 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-13A",
    znLb: "4.11 lb",
    znKg: "(1.86 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '6 1/2"',
    widMm: "(165 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-14",
    znLb: "7.8 lb",
    znKg: "(3.54 kg)",
    alCode: "AMDC-14",
    alLb: "3.05 lb",
    alKg: "(1.38 kg)",
    diaIn: '3 1/2"',
    diaMm: "(89 mm)",
    widIn: '6 1/2"',
    widMm: "(165 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-15",
    znLb: "6.7 lb",
    znKg: "(3.04 kg)",
    alCode: "AMDC-15",
    alLb: "2.62 lb",
    alKg: "(1.19 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '6 1/2"',
    widMm: "(165 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-18",
    znLb: "11.1 lb",
    znKg: "(5.03 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '7 5/8"',
    widMm: "(194 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-19",
    znLb: "9.8 lb",
    znKg: "(4.45 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '5"',
    diaMm: "(127 mm)",
    widIn: '7 5/8"',
    widMm: "(194 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
];

const donutHvyData = [
  {
    znCode: "MDC-0 HEAVY",
    znLb: "0.7 lb",
    znKg: "(0.32 kg)",
    alCode: "AMDC-0 HEAVY",
    alLb: "0.26 lb",
    alKg: "(0.12 kg)",
    diaIn: '1/2"',
    diaMm: "(13 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
  },
  {
    znCode: "MDC-0A HEAVY",
    znLb: "0.73 lb",
    znKg: "(0.33 kg)",
    alCode: "AMDC-0A HEAVY",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    diaIn: '5/8"',
    diaMm: "(16 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
  },
  {
    znCode: "MDC-9 HEAVY",
    znLb: "2.79 lb",
    znKg: "(1.27 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
  {
    znCode: "MDC-9A HEAVY",
    znLb: "5.3 lb",
    znKg: "(2.4 kg)",
    alCode: "-",
    alLb: "-",
    alKg: "",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
  },
];

const donutMetricData = [
  {
    znCode: "MDC-20MM",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMDC-20MM",
    alLb: "0.39 lb",
    alKg: "(0.18 kg)",
    diaIn: '',
    diaMm: "(20 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-25MM",
    znLb: "1.05 lb",
    znKg: "(0.48 kg)",
    alCode: "AMDC-25MM",
    alLb: "0.52 lb",
    alKg: "(0.24 kg)",
    diaIn: '',
    diaMm: "(25 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-30MM",
    znLb: "1.1 lb",
    znKg: "(0.5 kg)",
    alCode: "AMDC-30MM",
    alLb: "0.47 lb",
    alKg: "(0.21 kg)",
    diaIn: '',
    diaMm: "(30 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-35MM",
    znLb: "1.48 lb",
    znKg: "(0.67 kg)",
    alCode: "AMDC-35MM",
    alLb: "0.66 lb",
    alKg: "(0.3 kg)",
    diaIn: '',
    diaMm: "(35 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-40MM",
    znLb: "1.36 lb",
    znKg: "(0.62 kg)",
    alCode: "AMDC-40MM",
    alLb: "0.61 lb",
    alKg: "(0.28 kg)",
    diaIn: '',
    diaMm: "(40 mm)",
    widIn: '3"',
    widMm: "(76 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
  },
  {
    znCode: "MDC-45MM",
    znLb: "3.1 lb",
    znKg: "(1.41 kg)",
    alCode: "AMDC-45MM",
    alLb: "1.32 lb",
    alKg: "(0.6 kg)",
    diaIn: '',
    diaMm: "(45 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
  },
  {
    znCode: "MDC-50MM",
    znLb: "2.8 lb",
    znKg: "(1.27 kg)",
    alCode: "AMDC-50MM",
    alLb: "1.23 lb",
    alKg: "(0.56 kg)",
    diaIn: '',
    diaMm: "(50 mm)",
    widIn: '4"',
    widMm: "(102 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
  },
];

const donut = () => {
  return (
    <div>
      <Hero
        heading={"Donut (Limited Clearance) Anodes "}
        message={
          "Reliance Donut Anodes mount to the shaft with stainless steel slot head screws. Socket cap screws available upon request"
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
                  <th colSpan={13} className="py-8">
                    <h1>DONUT ANODE SPECIFICATIONS</h1>
                    <p>MDC SERIES</p>
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
                {donutStdData.map((item, id) => (
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
                  src="https://user-images.githubusercontent.com/77664153/228628906-530dc637-bda7-4c85-bf57-72b134a7fa25.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3</p> */}
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/228628913-20d5eb4d-f4c3-47ef-a780-be98d9028e96.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3 HEX / MDCT-5 HEX</p> */}
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>DONUT ANODE SPECIFICATIONS</h1>
                    <p>MDC HEAVY SERIES</p>
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
                {donutHvyData.map((item, id) => (
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
            <table>
              <tbody>
                <tr>
                  <th colSpan={13} className="py-8">
                    <h1>DONUT ANODE SPECIFICATIONS</h1>
                    <p>MDC METRIC SERIES</p>
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
                {donutMetricData.map((item, id) => (
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
          </main>
        </article>
      </div>
    </div>
  );
};

export default donut;
