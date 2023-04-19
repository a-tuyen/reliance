import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";


const grouperData = [
    {znCode: 'MD-GROUPER',
    znLb: '6 lb',
    znKg: '(2.72 kg)',
    alCode: 'AMD-GROUPER',
    alLb: '2.34 lb',
    alKg: '(1.06 kg)',
    diaIn: '11"',
    diaMm: '(279 mm)',
    widIn: '3 3/4"',
    widMm: '(95 mm)',
    cDiaIn: '1 1/8"',
    cDiaMm: '(29 mm)'},
];

const grouper = () => {
  return (
    <div>
      <Hero
        heading={"Grouper Anode"}
        message={
          "A hanging anode that helps with general corrosion protection on and around your boat"
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
                  <th colSpan={6} className="py-8">
                    <h1>GROUPER</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">ANODE SPECIFICATIONS</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>
                    A:
                    <p className="text-sm md:text-lg">LENGTH</p>
                  </th>
                  <th>
                    B:
                    <p className="text-sm md:text-lg">DIA</p>
                  </th>
                  <th>
                    C:
                    <p className="text-sm md:text-lg">PLUG OD</p>
                  </th>
                </tr>
                {grouperData.map((item, id) => (
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
                  />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col lg:flex-row">
              {/* <div className="flex flex-col items-center justify-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/231299671-9b2dcc83-7ed5-4454-94b6-4ff7f8176d5f.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
              </div> */}
              <div className="">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/233152310-b763ce7d-1fb8-4f34-8e5b-e9843ea47052.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={300}
                  height={180}
                />
                {/* <p>Detroit Diesel Engine Replacement Anode</p> */}
              </div>
              {/* <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/231298152-9273af43-a9e3-46af-aadb-a34389bcc658.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p>Detroit Diesel Engine Brass Plug</p>
              </div> */}
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default grouper;
