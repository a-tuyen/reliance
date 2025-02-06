import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart5Dim from "@/components/Chart5Dim";
import Image from "next/image";
import Link from "next/link";
import { IoMdTennisball } from "react-icons/io";

const fernstrumData = [
  {znCode: 'MD-1274A',
    znLb: '2.20 lb',
    znKg: '(1 kg)',
    alCode: 'AMD-1274A',
    alLb: '0.88 lb',
    alKg: '(0.4 kg)',
    diaIn: '5"',
    diaMm: '(127 mm)',
    widIn: '2"',
    widMm: '(51 mm)',
    cDiaIn: '1 1/16"',
    cDiaMm: '(27 mm)',
    dMeasureIn: '3 1/4"',
    dMeasureMm: '(83 mm)',
    eMeasureIn: '7/16"',
    eMeasureMm: '(11 mm)'},
    
    {znCode: 'MD-1874A',
    znLb: '3.4 lb',
    znKg: '(1.54 kg)',
    alCode: 'AMD-1874A',
    alLb: '1.36 lb',
    alKg: '(0.62 kg)',
    diaIn: '7"',
    diaMm: '(178 mm)',
    widIn: '2"',
    widMm: '(51 mm)',
    cDiaIn: '1 1/16"',
    cDiaMm: '(27 mm)',
    dMeasureIn: '3 1/4"',
    dMeasureMm: '(83 mm)',
    eMeasureIn: '9/16"',
    eMeasureMm: '(14 mm)'},
    
    {znCode: 'MD-2624A',
    znLb: '1.5 lb',
    znKg: '(0.68 kg)',
    alCode: 'AMD-2624A',
    alLb: '0.59 lb',
    alKg: '(0.27 kg)',
    diaIn: '5"',
    diaMm: '(127 mm)',
    widIn: '2"',
    widMm: '(51 mm)',
    cDiaIn: '13/16"',
    cDiaMm: '(21 mm)',
    dMeasureIn: '3 1/4"',
    dMeasureMm: '(83 mm)',
    eMeasureIn: '9/16"',
    eMeasureMm: '(14 mm)'},
    
    {znCode: 'MD-2874A',
    znLb: '4.2 lb',
    znKg: '(1.91 kg)',
    alCode: 'AMD-2874A',
    alLb: '1.68 lb',
    alKg: '(0.76 kg)',
    diaIn: '9"',
    diaMm: '(229 mm)',
    widIn: '2"',
    widMm: '(51 mm)',
    cDiaIn: '1 1/16"',
    cDiaMm: '(27 mm)',
    dMeasureIn: '4"',
    dMeasureMm: '(102 mm)',
    eMeasureIn: '9/16"',
    eMeasureMm: '(14 mm)'},
    
    {znCode: 'MD-3583A',
    znLb: '11 lb',
    znKg: '(4.99 kg)',
    alCode: 'AMD-3583A',
    alLb: '4.3 lb',
    alKg: '(1.95 kg)',
    diaIn: '11"',
    diaMm: '(279 mm)',
    widIn: '2 25/51"',
    widMm: '(63 mm)',
    cDiaIn: '2 2/25"',
    cDiaMm: '(53 mm)',
    dMeasureIn: '4"',
    dMeasureMm: '(102 mm)',
    eMeasureIn: '9/16"',
    eMeasureMm: '(14 mm)'},

      
    
];

const fernstrum = () => {
  return (
    <div>
      <Hero
        heading={"Fernstrum Anodes"}
        message={
          ""
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
                  <th colSpan={8} className="py-8">
                  <h1>Fernstrum</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={8}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th className="border-r-0">lb (kg)</th>
                  <th className="border-l-0">A-Length</th>
                  <th className="border-l-0">B-Width</th>
                  <th className="border-l-0">C-Thickness</th>
                  <th className="border-l-0">D-Hole Distance</th>
                  <th className="border-l-0">Hole Diameter</th>
                </tr>
                {fernstrumData.map((item, id) => (
                  <Chart5Dim
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
                    eMeasureIn={item.eMeasureIn}
                    eMeasureMm={item.eMeasureMm}

                  />
                ))}
              </tbody>
            </table>
            <div className=" flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
              <p>Fernstrum</p>
              <Image
                src="/anodes/fernstrum-drawing.png"
                alt="picture of anode"
                width="300"
                height="200"
              />
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default fernstrum;
