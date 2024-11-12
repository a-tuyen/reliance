import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart4DimPic from "@/components/Chart4DimPic";
import Image from "next/image";
import Link from "next/link";

const bntData = [
  {img: 'https://user-images.githubusercontent.com/77664153/246261676-262742e7-f41d-4620-b7c6-28f7de767f19.png',
  znCode: 'BNT-1',
  znLb: '0.44 lb',
  znKg: '(0.2 kg)',
  alCode: 'ABNT-1',
  alLb: '0.17 lb',
  alKg: '(0.08 kg)',
  diaIn: '3 3/4"',
  diaMm: "(95 mm)",
  widIn: '1 1/8"',
  widMm: "(29 mm)",
  cDiaIn: '1/2"',
  cDiaMm: "(13 mm)",
  dMeasureIn: "1 1/2",
  dMeasureMm: "(38 mm)",
  notes: ''


  },
  
];

const bnt = () => {
  return (
    <div>
      <Hero heading={"BENNET ANODES "} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={7} className="py-8">
                    <h1>BENNET</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                {bntData.map((item, id) => (
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

            <p className="text-center pb-4">
              Also available as a <Link href="/products/pleasureCraft/indivKits" className="underline hover:text-zinc">kit</Link>.
            </p>

          </main>
        </article>
      </div>
    </div>
  );
};

export default bnt;
