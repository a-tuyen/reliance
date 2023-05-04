import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimPicNote from "@/components/Chart2DimPicNote";
import Image from "next/image";

const varifoldData = [
  {img: 'https://user-images.githubusercontent.com/77664153/236291185-9804a51e-1db3-4ec6-9aa0-829991e6ef88.png',
  znCode: 'MD-VF3AN',
  znLb: '0.80 lb',
  znKg: '(0.36 kg)',
  alCode: 'AMD-VF3AN',
  alLb: '0.31 lb',
  alKg: '(0.14 kg)',
  diaIn: '1 3/4"',
  diaMm: '(44 mm)',
  widIn: '1 3/10"',
  widMm: '(33 mm)',
  notes: 'M16 x 2'},
  
  {img: 'https://user-images.githubusercontent.com/77664153/236291186-990eca2a-bdf4-4b4b-8797-91f5de7e173e.png',
  znCode: 'MD-VF4AN',
  znLb: '2.6 lb',
  znKg: '(1.18 kg)',
  alCode: 'AMD-VF4AN',
  alLb: '1.02 lb',
  alKg: '(0.46 kg)',
  diaIn: '2 17/27"',
  diaMm: '(67 mm)',
  widIn: '2 3/4"',
  widMm: '(70 mm)',
  notes: 'M16'},
  
  
];

const varifold = () => {
  return (
    <div>
      <Hero heading={"Varifold Propellor Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>VARIFOLD PROPELLOR</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {varifoldData.map((item, id) => (
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
                    aDim="DIAMETER"
                    bDim="HEIGHT"
                    notesHeading="THREADED MOUNTING HOLE"
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

export default varifold;
