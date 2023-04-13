import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
// import vetus25 from "../../../public/vetus25.png";
import Chart4DimPic from "@/components/Chart4DimPic";

const hullBarWeldData = [
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-2',
  znLb: '2.30 lb',
  znKg: '(1.04 kg)',
  alCode: 'AMD-ZHC-2',
  alLb: '0.9 lb',
  alKg: '(0.41 kg)',
  diaIn: '5 3/4"',
  diaMm: '(146 mm)',
  widIn: '2 5/8"',
  widMm: '(67 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-3 HEAVY',
  znLb: '3.5 lb',
  znKg: '(1.59 kg)',
  alCode: 'AMD-ZHC-3 HEAVY',
  alLb: '1.75 lb',
  alKg: '(0.79 kg)',
  diaIn: '6 1/4"',
  diaMm: '(159 mm)',
  widIn: '2 5/8"',
  widMm: '(70 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-4H (MD-DD-MINI DIVER 4x6 HEAVY)',
  znLb: '2.8 lb',
  znKg: '(1.27 kg)',
  alCode: 'AMD-ZHC-4H (AMD-DD-MINI DIVER 4x6 HEAVY)',
  alLb: '1.19 lb',
  alKg: '(0.54 kg)',
  diaIn: '6"',
  diaMm: '(152 mm)',
  widIn: '2 5/8"',
  widMm: '(102 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(14 mm)',
  dMeasureIn: '2 3/4"',
  dMeasureMm: '(70 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-5',
  znLb: '4.6 lb',
  znKg: '(2.09 kg)',
  alCode: 'AMD-ZHC-5',
  alLb: '1.84 lb',
  alKg: '(0.83 kg)',
  diaIn: '8"',
  diaMm: '(203 mm)',
  widIn: '2 5/8"',
  widMm: '(102 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '4 1/2"',
  dMeasureMm: '(114 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-5 HEAVY',
  znLb: '6.60 lb',
  znKg: '(2.99 kg)',
  alCode: 'AMD-ZHC-5 HEAVY',
  alLb: '3.3 lb',
  alKg: '(1.5 kg)',
  diaIn: '8"',
  diaMm: '(203 mm)',
  widIn: '2 5/8"',
  widMm: '(102 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(25 mm)',
  dMeasureIn: '4 1/2"',
  dMeasureMm: '(114 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589172-8346ab45-3aa0-4ee5-a5ad-a220ee0a79ca.png',
  znCode: 'MD-ZHC-6',
  znLb: '5.60 lb',
  znKg: '(2.39 kg)',
  alCode: 'AMD-ZHC-6',
  alLb: '2.39 lb',
  alKg: '(1.08 kg)',
  diaIn: '7 7/8"',
  diaMm: '(200 mm)',
  widIn: '2 5/8"',
  widMm: '(98 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(22 mm)',
  dMeasureIn: '4 3/16"',
  dMeasureMm: '(106 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589214-7754525a-a1f7-4b8f-acd7-2a6600b21795.png',
  znCode: 'MD-DD 6x6 DIVERS',
  znLb: '4.60 lb',
  znKg: '(2.15 kg)',
  alCode: 'AMD-DD 6x6 DIVERS',
  alLb: '1.85 lb',
  alKg: '(0.84 kg)',
  diaIn: '6"',
  diaMm: '(152 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(13 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589214-7754525a-a1f7-4b8f-acd7-2a6600b21795.png',
  znCode: 'MD-DDH 6x6 DIVERS HEAVY',
  znLb: '6.00 lb',
  znKg: '(2.72 kg)',
  alCode: 'AMD-DDH 6x6 DIVERS HEAVY',
  alLb: '1.90 lb',
  alKg: '(0.86 kg)',
  diaIn: '6"',
  diaMm: '(152 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589214-7754525a-a1f7-4b8f-acd7-2a6600b21795.png',
  znCode: 'MD-DDXH 6x6 DIVERS X-HEAVY',
  znLb: '8 lb',
  znKg: '(3.63 kg)',
  alCode: 'AMD-DDXH 6x6 DIVERS X-HEAVY',
  alLb: '2.96 lb',
  alKg: '(1.34 kg)',
  diaIn: '6"',
  diaMm: '(152 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231589214-7754525a-a1f7-4b8f-acd7-2a6600b21795.png',
  znCode: 'MD-103862-14',
  znLb: '14 lb',
  znKg: '(6.35 kg)',
  alCode: 'AMD-103862-14',
  alLb: '5.47 lb',
  alKg: '(2.48 kg)',
  diaIn: '7"',
  diaMm: '(178 mm)',
  widIn: '2 5/8"',

  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: '',},
  
];

const hullBarBoltData = [
 
];

const hullPlateWeldData = [
 
];

const hullPlateBoltData = [
  
];

const hullPC = () => {
  return (
    <div>
      <Hero
        heading={"Hull Anodes"}
        message={
          "These plate and streamlined bolt-on anodes are used to protect the hull and other areas of pleasure craft subject to galvanic corrosion."
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={8} className="py-8">
                    <h1>HULL ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    BAR ANODES - WELD ON
                  </th>
                </tr>

                {hullBarWeldData.map((item, id) => (
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
                    notes={item.notes}
                  />
                ))}
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    BAR ANODES - BOLT ON
                  </th>
                </tr>
                {hullBarBoltData.map((item, id) => (
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
                    notes={item.notes}
                  />
                ))}
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    PLATE ANODES - WELD ON
                  </th>
                </tr>
                {hullPlateWeldData.map((item, id) => (
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
                    notes={item.notes}
                  />
                ))}
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    PLATE ANODES - BOLT ON
                  </th>
                </tr>
                {hullPlateBoltData.map((item, id) => (
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

export default hullPC;
