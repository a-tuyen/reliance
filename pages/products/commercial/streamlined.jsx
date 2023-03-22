import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";

const streamlinedData = [
  {
    znCode: "Z-22",
    znLb: "23.0",
    znKg: "(10.43)",
    alCode: "AZ-22",
    alLb: "10.0",
    alKg: "(4.54)",
    diaIn: "14.0",
    diaMm: "(356)",
    widIn: "6.5",
    widMm: "(165)",
    cDiaIn: "1 1/2",
    cDiaMm: "(38)",
  },

  {
    znCode: "Z-26 / ZHS-26",
    znLb: "25.0",
    znKg: "(11.34)",
    alCode: "AZ-26 / AZHS-26",
    alLb: "12.0",
    alKg: "(5.44)",
    diaIn: "13.25",
    diaMm: "(337)",
    widIn: "4.25",
    widMm: "(108)",
    cDiaIn: "2 1/4",
    cDiaMm: "(57)",
  },
];

const streamlined = () => {
  return (
    <div>
      <Hero heading={"streamlined Anodes"} message={"Used to protect hull and various areas of large vessels such as keel rudders, bottom plates, ballast tanks, bilges, cargo tanks, and structures."} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={12} className="py-8">
                    <h1>streamlined ANODE SPECIFICATIONS</h1>
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
                {streamlinedData.map((item, id) => (
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
            <p>Available with steel or aluminum straps.</p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default streamlined;
