import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3DimPicNote from "@/components/Chart3DimPicNote";
import Image from "next/image";

const maseData = [
  {img: 'https://user-images.githubusercontent.com/77664153/245292229-b94789bb-69c8-4fe7-8992-536a0cdbe3f9.png',
  znCode: 'MD-80162',
  znLb: '0.07 lb',
  znKg: '(0.03 kg)',
  alCode: 'N/A',
  alLb: ' lb',
  alKg: '( kg)',
  diaIn: '3/4"',
  diaMm: '(19 mm)',
  widIn: '3/8"',
  widMm: '(10 mm)',
  cDiaIn: '1/4"',
  cDiaMm: '(6 mm)',
  notes: '5/16-18 UNC'},
  
];

const mase = () => {
  return (
    <div>
      <Hero
        heading={"MASE MARINE Anodes"}
        message={""}
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={7} className="py-8">
                    <h1>MASE MARINE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                {maseData.map((item, id) => (
                  <Chart3DimPicNote
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
                    aDim="LENGTH"
                    bDim="DIAMETER"
                    cDim="PLUG OD(NPT)"
                    notesHeading="C-PLUG THREAD INTERVAL"
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

export default mase;
