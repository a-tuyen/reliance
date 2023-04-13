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
  znCode: 'MD-ZHC-4H / MD-DD-MINI DIVER 4x6 HEAVY',
  znLb: '2.8 lb',
  znKg: '(1.27 kg)',
  alCode: 'AMD-ZHC-4H / AMD-DD-MINI DIVER 4x6 HEAVY',
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
  
  {img: 'https://user-images.githubusercontent.com/77664153/231848189-e865544b-bc86-4627-9e9e-6633a7f89098.png',
  znCode: 'MD-103862-14',
  znLb: '14 lb',
  znKg: '(6.35 kg)',
  alCode: 'AMD-103862-14',
  alLb: '5.47 lb',
  alKg: '(2.48 kg)',
  diaIn: '7"',
  diaMm: '(178 mm)',
  widIn: '2 5/8"',
  widMm: '(- mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '2 7/8"',
  dMeasureMm: '(73 mm)',
  notes: 'DD6x6, DDH6x6 HEAVY, DDXH6x6 X-HEAVY & MD-103862-14 are popular low cost alternatives to the HJ-103862',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231893992-0fc19e3b-ae96-4a40-949b-8d2294febe44.png',
  znCode: 'MD-DD 6x12 DIVERS DELITE',
  znLb: '7.5 lb',
  znKg: '(3.4 kg)',
  alCode: 'AMD-DD 6x12 DIVERS DELITE',
  alLb: '2.95 lb',
  alKg: '(1.34 kg)',
  diaIn: '12"',
  diaMm: '(305 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(13 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-DDX 6x12 DIVERS DELUXE',
  znLb: '9.38 lb',
  znKg: '(4.25 kg)',
  alCode: 'N/A',
  alLb: '- lb',
  alKg: '(- kg)',
  diaIn: '12"',
  diaMm: '(305 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231893992-0fc19e3b-ae96-4a40-949b-8d2294febe44.png',
  znCode: 'MD-DDH 6x12 DIVERS HEAVY',
  znLb: '10.5-11.5 lb',
  znKg: '(4.76-5.22 kg)',
  alCode: 'AMD-DDH 6x12 DIVERS HEAVY',
  alLb: '5 lb',
  alKg: '(2.27 kg)',
  diaIn: '12"',
  diaMm: '(305 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/228323266-5542f35d-e4d6-40ac-9c2c-d33960daad35.png',
  znCode: 'MD-DDSH 6x12 DIVERS SUPER HEAVY',
  znLb: '20 lb',
  znKg: '(9.07 kg)',
  alCode: 'AMD-DDSH 6x12 DIVERS SUPER HEAVY',
  alLb: '8.33 lb',
  alKg: '(3.78 kg)',
  diaIn: '14"',
  diaMm: '(356 mm)',
  widIn: '2 5/8"',
  widMm: '(165 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(32 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231896018-a23ccaeb-75a1-4ce1-9f12-a11b173a1739.png',
  znCode: 'MD-Z-10 BAYLINER',
  znLb: '8.9 lb',
  znKg: '(4.04 kg)',
  alCode: 'AMD-Z-10 BAYLINER',
  alLb: '3.39 lb',
  alKg: '(1.54 kg)',
  diaIn: '12"',
  diaMm: '(305 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '4 1/2"',
  dMeasureMm: '(114 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231896613-875e7d53-535b-4c7b-a5e9-eb4578fe7786.png',
  znCode: 'MD-40005206 / MD-21174476',
  znLb: '13.5 lb',
  znKg: '(6.12 kg)',
  alCode: 'AMD-40005206 / AMD-21174476',
  alLb: '5.75 lb',
  alKg: '(2.61 kg)',
  diaIn: '16 1/2"',
  diaMm: '(419 mm)',
  widIn: '2 5/8"',
  widMm: '(98 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(38 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231896613-875e7d53-535b-4c7b-a5e9-eb4578fe7786.png',
  znCode: 'MD-40005875',
  znLb: '8.0 lb',
  znKg: '(3.63 kg)',
  alCode: 'AMD-40005875',
  alLb: '3.4 lb',
  alKg: '(1.54 kg)',
  diaIn: '10 1/2"',
  diaMm: '(267 mm)',
  widIn: '2 5/8"',
  widMm: '(98 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(38 mm)',
  dMeasureIn: '5 1/2"',
  dMeasureMm: '(140 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231897366-0ed6a1e8-08fa-4fea-a808-1d2d62e41921.png',
  znCode: 'MD-ZC-406 / MD-B-12',
  znLb: '8.35 lb',
  znKg: '(3.79 kg)',
  alCode: 'AMD-ZC-406 / AMD-B-12',
  alLb: '3 lb',
  alKg: '(1.36 kg)',
  diaIn: '8 5/8"',
  diaMm: '(219 mm)',
  widIn: '2 5/8"',
  widMm: '(108 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(25 mm)',
  dMeasureIn: '5"',
  dMeasureMm: '(127 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231897366-0ed6a1e8-08fa-4fea-a808-1d2d62e41921.png',
  znCode: 'MD-B-15',
  znLb: '9.00 lb',
  znKg: '(4.08 kg)',
  alCode: 'AMD-B-15',
  alLb: '3.52 lb',
  alKg: '(1.6 kg)',
  diaIn: '9"',
  diaMm: '(229 mm)',
  widIn: '2 5/8"',
  widMm: '(108 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(29 mm)',
  dMeasureIn: '5 1/8"',
  dMeasureMm: '(130 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231897933-c4bffbd0-d485-4808-be21-e90a3f869225.png',
  znCode: 'MD-B-19',
  znLb: '26 lb',
  znKg: '(11.79 kg)',
  alCode: 'AMD-B-19',
  alLb: '9.63 lb',
  alKg: '(4.37 kg)',
  diaIn: '12"',
  diaMm: '(305 mm)',
  widIn: '2 5/8"',
  widMm: '(152 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(48 mm)',
  dMeasureIn: '6"',
  dMeasureMm: '(152 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231899612-aab9aa7c-964b-4439-819d-f97b2b6d4b58.png',
  znCode: 'MD-M-24',
  znLb: '0.73 lb',
  znKg: '(0.33 kg)',
  alCode: 'AMD-M-24',
  alLb: '0.29 lb',
  alKg: '(0.13 kg)',
  diaIn: '4 3/4"',
  diaMm: '(121 mm)',
  widIn: '2 5/8"',
  widMm: '(51 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: '1 1/4"',
  dMeasureMm: '(32 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/231900335-deec2934-30a5-4474-ab97-5c4c782b050d.png',
  znCode: 'MD-M-25 / MD-A-25',
  znLb: '4 lb',
  znKg: '(1.81 kg)',
  alCode: 'AMD-M-25 / AMD-A-25',
  alLb: '1.62 lb',
  alKg: '(0.73 kg)',
  diaIn: '9 1/4"',
  diaMm: '(235 mm)',
  widIn: '2 5/8"',
  widMm: '(86 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(19 mm)',
  dMeasureIn: 'SEE BELOW"',
  dMeasureMm: '(SEE BELOW mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-Z-404 / A-90 / MD-900',
  znLb: '9.00 lb',
  znKg: '(4.08 kg)',
  alCode: 'AMD-Z-404 / AMD-A-90 / AMD-900',
  alLb: '3.52 lb',
  alKg: '(1.6 kg)',
  diaIn: '9 1/4"',
  diaMm: '(235 mm)',
  widIn: '2 5/8"',
  widMm: '(86 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(25 mm)',
  dMeasureIn: '-"',
  dMeasureMm: '(- mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-M-30',
  znLb: '2.10 lb',
  znKg: '(0.95 kg)',
  alCode: 'AMD-M-30',
  alLb: '0.82 lb',
  alKg: '(0.37 kg)',
  diaIn: '6 1/4"',
  diaMm: '(159 mm)',
  widIn: '2 5/8"',
  widMm: '(70 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(16 mm)',
  dMeasureIn: '4 1/2"',
  dMeasureMm: '(114 mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-M-40',
  znLb: '2.1 lb',
  znKg: '(0.95 kg)',
  alCode: 'AMD-M-40',
  alLb: '1.1 lb',
  alKg: '(0.5 kg)',
  diaIn: '7 1/2"',
  diaMm: '(191 mm)',
  widIn: '2 5/8"',
  widMm: '(64 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(13 mm)',
  dMeasureIn: '2"',
  dMeasureMm: '(51 mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-N-1',
  znLb: '2.63 lb',
  znKg: '(1.19 kg)',
  alCode: 'AMD-N-1',
  alLb: '1.03 lb',
  alKg: '(0.47 kg)',
  diaIn: '8 5/8"',
  diaMm: '(219 mm)',
  widIn: '2 5/8"',
  widMm: '(81 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(13 mm)',
  dMeasureIn: '-"',
  dMeasureMm: '(- mm)',
  notes: '',},
  
  {img: '',
  znCode: 'MD-N-1 HEAVY',
  znLb: '5 lb',
  znKg: '(2.27 kg)',
  alCode: 'AMD-N-1 HEAVY',
  alLb: '2.17 lb',
  alKg: '(0.98 kg)',
  diaIn: '8 5/8"',
  diaMm: '(219 mm)',
  widIn: '2 5/8"',
  widMm: '(81 mm)',
  cDiaIn: '3/4"',
  cDiaMm: '(25 mm)',
  dMeasureIn: '-"',
  dMeasureMm: '(- mm)',
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
