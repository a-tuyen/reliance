import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart4DimPic from "@/components/Chart4DimPic";
import Image from "next/image";

const teardropPCData = [
    {znCode: 'MD-T-20',
    znLb: '0.4 lb',
    znKg: '(0.18 kg)',
    alCode: 'AMD-T-20',
    alLb: '0.14 lb',
    alKg: '(0.06 kg)',
    diaIn: '3 3/8"',
    diaMm: '(86 mm)',
    widIn: '1 3/4"',
    widMm: '(44 mm)',
    cDiaIn: '1/2"',
    cDiaMm: '(13 mm)',
    dMeasureIn: '1 1/4"',
    dMeasureMm: '(32 mm)'},
    
    
];

const teardropPC = () => {
  return (
    <div>
      <Hero
        heading={"Teardrop Anodes "}
        message={
          "Reliance Teardrop Anodes are streamlined types for use on large surfaces of pleasure craft"
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
                    <h1>TEARDROP ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
               
                {teardropPCData.map((item, id) => (
                  <Chart4DimPic
                    key={id}
                    img={item.img}
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

export default teardropPC;
