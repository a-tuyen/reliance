import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
import vetus25 from "../../../public/vetus25.png"


const hullData = [
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

const hull = () => {
  return (
    <div>
      <Hero
        heading={"Hull Anodes"}
        message={
          "This line provides a full range of types and sizes of hull anodes for small to large commercial vessels and structures. Available in weld-on and bolt-on styles with steel or aluminum insterts cast as integral parts of the anodes."
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={14} className="py-8">
                    <h1>HULL ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  {/* <th colSpan={2}></th> */}
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                  <th colSpan={9}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>

                  <th colSpan={6}></th>
                  <th colSpan={2}>DIAMETER</th>
                  <th colSpan={2}>WIDTH</th>
                  <th colSpan={2}>C-DEPTH</th>
                  <th colSpan={2}>D-C/C</th>
                </tr>

                <tr>
                  <th colspan={2} className="">DIAGRAM</th>
                  <th className="border-l-0">METAL</th>
                  <th>ITEM #</th>
                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                </tr>
                <tr>
                  <td colspan={2} rowspan={2} className="horizontal-align-center">
                    <Image
                    src={vetus25}
                    alt="diagram of Vetus 25"
                    className="min-w-[80px] block ml-auto mr-auto"
                    />
                  </td>
      
                  <td className="bg-zinc text-white border-l-0">ZN</td>
                  <td className="bg-zincLight">MD-VETUS 25</td>
                  <td className="bg-zincLight border-r-0">5.10</td>
                  <td className="bg-zincLight border-l-0">2.300</td>
                  <td rowspan={2} className="border-r-0">
                    1.11
                  </td>
                  <td rowspan={2} className="border-l-0">
                    2.20
                  </td>
                  <td rowspan={2} className="border-r-0">
                    3.65
                  </td>
                  <td rowspan={2} className="border-l-0">
                    295
                  </td>
                  <td rowspan={2} className="border-r-0">
                    25.2
                  </td>
                  <td rowspan={2} className="border-l-0">
                    1.11
                  </td>
                  <td rowspan={2} className="border-r-0">
                    0.25
                  </td>
                  <td rowspan={2} className="border-l-0">
                    35
                  </td>
                 </tr>
                <tr>
                  <td className="bg-alum text-white border-l-0">AL</td>
                  <td className="bg-alumLight">AMD-VETUS 25</td>
                  <td className="bg-alumLight border-r-0">2.50</td>
                  <td className="bg-alumLight border-l-0">1.100</td>
                </tr>
                <tr>
                  <td colspan={14} className="text-left pl-4">Notes:</td>
                </tr>
                {/* <tr>
                  <th colSpan={15} className="text-left px-5">
                    WELD ON
                  </th>
                </tr> */}
                {/* {hullData.map((item, id) => (
                  <Chart4DimNote
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
                ))} */}
                {/* <tr>
                  <th colSpan={15} className="text-left px-5">
                    BOLT ON
                  </th>
                </tr> */}
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default hull;
