import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimPicNote from "@/components/Chart2DimPicNote";
import Image from "next/image";

const flexofoldData = [
  {img: 'https://user-images.githubusercontent.com/77664153/236345125-9c0f2fe3-2c1e-4e32-9460-b05f95ff56fa.png',
  znCode: 'MD-FX (112)',
  znLb: '1 lb',
  znKg: '(0.45 kg)',
  alCode: 'AMD-FX (117)',
  alLb: '0.45 lb',
  alKg: '(0.2 kg)',
  diaIn: '2 5/8"',
  diaMm: '(67 mm)',
  widIn: '1 1/2"',
  widMm: '(38 mm)',
  notes: 'ALL 3 BLADE, 2 BLADE PROPELLERS & 4 BLADE UP TO 23" '},
  
  {img: 'https://user-images.githubusercontent.com/77664153/236345143-8fae48e6-ae2f-49a9-b8a7-0d1017add87a.png',
  znCode: 'MD-FX-L',
  znLb: '2.43 lb',
  znKg: '(1.1 kg)',
  alCode: 'AMD-FX-L',
  alLb: '0.9 lb',
  alKg: '(0.41 kg)',
  diaIn: '3 40/93"',
  diaMm: '(87 mm)',
  widIn: '1 8/9"',
  widMm: '(48 mm)',
  notes: 'ALL 4 BLADE PROPELLERS 25" & UP '},
   
];

const flexofold = () => {
  return (
    <div>
      <Hero heading={"Flexofold Propellor Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>FLEXOFOLD PROPELLOR</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {flexofoldData.map((item, id) => (
                  <Chart2DimPicNote
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
                    notes={item.notes}
                    width="300"
                    height="180"
                    aDim="BASE DIAMETER"
                    bDim="HEIGHT"
                    notesHeading="FITS THESE TYPES"
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

export default flexofold;
