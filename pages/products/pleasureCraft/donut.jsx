import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";

const donutData = [

];

const donut = () => {
  return (
    <div>
      <Hero
        heading={"Donut Anodes"}
        message={
          "Reliance Donut Anodes mount to the shaft with stainless steel slot head screws. Socket cap screws available upon request"
        }
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
                  <th>A: LENGTH</th>
                  <th>B:WIDTH</th>
                  <th>C: THICKNESS</th>
                </tr>
                {donutData.map((item, id) => (
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
