import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import ChartWNote from "@/components/ChartWNote";

const heaterTreaterData = [
  {
    znCode: "TREATER Z321",
    znLb: "39",
    znKg: "(17.70)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "21.5",
    diaMm: "(546)",
    widIn: "3.00",
    widMm: "(76)",
    cDiaIn: "1.0, 1.5",
    cDiaMm: "(25, 38)",
    notes: "THREADED",
  },
  {
    znCode: "TREATER Z321A",
    znLb: "39",
    znKg: "(17.70)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "21.5",
    diaMm: "(546)",
    widIn: "3.00",
    widMm: "(76)",
    cDiaIn: "4.0",
    cDiaMm: "(102)",
    notes: "THREADED",
  },

  {
    znCode: "TREATER Z330",
    znLb: "56",
    znKg: "(25.40)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "30.",
    diaMm: "(762)",
    widIn: "300",
    widMm: "(76)",
    cDiaIn: "1.0, 1.5",
    cDiaMm: "(25, 38)",
    notes: "THREADED",
  },

  {
    znCode: "TREATER Z330A",
    znLb: "56",
    znKg: "(25.40)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
    diaIn: "4.0",
    diaMm: "(102)",
    widIn: "1.25",
    widMm: "(32)",
    cDiaIn: "4.0",
    cDiaMm: "(102)",
    notes: "THREADED",
  },
];

const heaterTreater = () => {
  return (
    <div>
      <Hero heading={"Heater Treater Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={13} className="py-8">
                    <h1>HEATER TREATER ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
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
                  <th>MOUNTING</th>
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
                  <th></th>
                </tr>
                {heaterTreaterData.map((item, id) => (
                  <ChartWNote
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

export default heaterTreater;
