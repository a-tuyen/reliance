import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";

const spurData = [
    {znCode: 'SIZE A',
    znLb: '0.05 lb',
    znKg: '(0.02 kg)',
    alCode: 'SIZE A',
    alLb: '0.03 lb',
    alKg: '(0.01 kg)',
    diaIn: '10/27"',
    diaMm: '(9 mm)',
    widIn: '0.68"',
    widMm: '(17 mm)'},
    {znCode: 'SIZE B',
    znLb: '0.05 lb',
    znKg: '(0.02 kg)',
    alCode: 'SIZE B',
    alLb: '0.03 lb',
    alKg: '(0.01 kg)',
    diaIn: '2/5"',
    diaMm: '(10 mm)',
    widIn: '0.68"',
    widMm: '(17 mm)'},
    {znCode: 'SIZE C-D-E',
    znLb: '0.10 lb',
    znKg: '(0.05 kg)',
    alCode: 'SIZE C-D-E',
    alLb: '0.05 lb',
    widIn: '1.25"',
    widMm: '(32 mm)'},
    {znCode: 'SIZE F-F1',
    znLb: '0.20 lb',
    znKg: '(0.09 kg)',
    alCode: 'SIZE F-F1',
    alLb: '0.08 lb',
    alKg: '(0.04 kg)',
    diaIn: '10/27"',
    diaMm: '(9 mm)',
    widIn: '0.68"',
    widMm: '(17 mm)'},
    

];

const spur = () => {
  return (
    <div>
      <Hero heading={"Spurs Line Cutter Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <h1>SPURS LINE CUTTER ANODE SPECIFICATIONS</h1>
            <table>
              <tbody>
                <tr>
                  <th>NOMINAL WEIGHT</th>
                  <th>NOMINAL DIMENSIONS</th>
                </tr>
                {spurData.map((item, id) => (
                  <Chart2Dim
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

export default spur;
