import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import ChartNoDim from "@/components/ChartNoDim";

const rodData = [
  {
    znCode: '3/8" x 6\'0"',
    znLb: "2.0",
    znKg: "(0.91)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1/2" x 6\'0"',
    znLb: "3.6",
    znKg: "(0.41)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '5/8" x 78"',
    znLb: "6.2",
    znKg: "(3.01)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '3/4" x 78"',
    znLb: "9.0",
    znKg: "(4.09)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '7/8" x 78"',
    znLb: "12.2",
    znKg: "(5.55)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1" x 78"',
    znLb: "15.9",
    znKg: "(7.23)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1 1/4" x 78"',
    znLb: "24.8",
    znKg: "(11.27)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1 1/2" x 2\'0"',
    znLb: "11.0",
    znKg: "(5.00)",
    alCode: '1 1/2" x 2\'0"',
    alLb: "8.00",
    alKg: "(3.63)",
  },
  {
    znCode: '2" x 2\'0"',
    znLb: "19.9",
    znKg: "(9.05)",
    alCode: '2" x 2\'0"',
    alLb: "10.00",
    alKg: "(4.54)",
  },
  {
    znCode: '2 1/2" x 2\'0"',
    znLb: "30.6",
    znKg: "(13.91)",
    alCode: '2 1/2" x 2\'0"',
    alLb: "14.00",
    alKg: "(6.35)",
  },
  {
    znCode: '3" x 2\'0"',
    znLb: "44.1",
    znKg: "(20.05)",
    alCode: '3" x 2\'0"',
    alLb: "17.00",
    alKg: "(7.73)",
  },
  {
    znCode: '3 3/4" x 2\'0"',
    znLb: "73.5",
    znKg: "(33.41)",
    alCode: '3 3/4" x 2\'0"',
    alLb: "35.00",
    alKg: "(15.91)",
  },
  {
    znCode: '4" x 2\'0"',
    znLb: "78.4",
    znKg: "(34.64)",
    alCode: '4" x 2\'0"',
    alLb: "40.00",
    alKg: "(18.18)",
  },
  {
    znCode: '5" x 1\'0"',
    znLb: "61.3",
    znKg: "(27.86)",
    alCode: '5" x 1\'0"',
    alLb: "30.00",
    alKg: "(13.64)",
  },
];

const rod = () => {
  return (
    <div>
      <Hero heading={"rod Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={12} className="py-8">
                    <h1>ROD ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={3} className="bg-zinc">
                    ZINC ANODE
                  </th>
                  <th colSpan={3} className="bg-alum">
                    ALUMINUM ANODE
                  </th>
                </tr>

                <tr>
                  <th className="bg-zinc">ITEM #</th>
                  <th className="bg-zinc border-r-0">lb</th>
                  <th className="bg-zinc border-l-0">(kg)</th>
                  <th className="bg-alum">ITEM #</th>
                  <th className="bg-alum border-r-0">lb</th>
                  <th className="bg-alum border-l-0">(kg)</th>
                </tr>
                {rodData.map((item, id) => (
                  <ChartNoDim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
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

export default rod;
