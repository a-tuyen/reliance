import React from "react";
import Chart3Dim from "@/components/Chart3Dim";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";

const boltOnData = [
  {
    znCode: "Z-7",
    znLb: "12.5",
    znKg: "(6.000)",
    alCode: "AZ-7",
    alLb: "5.5",
    alKg: "2.500",
    diaIn: "8 1/2",
    diaMm: "(216)",
    widIn: "-",
    widMm: "-",
    cDiaIn: "7/16",
    cDiaMm: "(17)",
  },
  {
    znCode: 'ZD-56',
    znLb: '2.5',
    znKg: '(1.136)',
    alCode: 'AZD-56',
    alLb: '0.80',
    alKg: '(0.364)',
    diaIn: '4',
    diaMm: '(101)',
    widIn: '-',
    widMm: '-',
    cDiaIn: '7/16',
    cDiaMm: '(17)',


  },
  {
    znCode: 'ZD-58',
    znLb: '4.40',
    znKg: '(2.000)',
    alCode: 'AZ-58',
    alLb: '1.31',
    alKg: '(0.595)',
    diaIn: '5.9',
    diaMm: '(132)',
    widIn: '-',
    widMm: '-',
    cDiaIn: '7/16',
    cDiaMm: '(17)',


  },

];

const boltOn = () => {
  return (
    <div>
            <Hero heading={"Bolt On Anodes (Pie Anodes)"} message={""} img={"bg-img5"} />
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
                <th colSpan={2}>BOLT DIAMETER</th>
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
        </main>
      </article>
      </div>
    </div>
  );
};

export default boltOn;
