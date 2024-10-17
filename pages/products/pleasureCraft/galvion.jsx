import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartGalvion4Dim from "@/components/ChartGalvion4Dim";
import ChartGalvionBrass3Dim from "@/components/ChartGalvionBrass3Dim";
import Image from "next/image";
import Link from "next/link";

const galvionData = [
  {
    znCode: 'MD-ZDM-625',
    znLb: '0.057 lb',
    znKg: '(0.03 kg)',
    aDiaIn: '5/8"',
    aDiaMm: '(16 mm)',
    bLengthIn: '3/4"',
    bLengthMm: '(19 mm)',
    internalThread: '12-28',
    nptIn: '1/2',
    nptMm: '(13mm)'
  },

  {
    znCode: 'MD-ZDM-825',
    znLb: '0.1 lb',
    znKg: '(0.05 kg)',
    aDiaIn: '41/50"',
    aDiaMm: '(21 mm)',
    bLengthIn: '3/4"',
    bLengthMm: '(19 mm)',
    internalThread: '12-28',
    nptIn: '3/4',
    nptMm: '(19mm)'
  },

  {
    znCode: 'MD-ZDM-1050',
    znLb: '0.17 lb',
    znKg: '(0.08 kg)',
    aDiaIn: '41/50"',
    aDiaMm: '(21 mm)',
    bLengthIn: '3/4"',
    bLengthMm: '(19 mm)',
    internalThread: '12-28',
    nptIn: '1',
    nptMm: '(25mm)'
  },

];


const galvionBrassData = [
  {
    znCode: 'MD-ZDM-625 BRASS PLUG',
    znLb: '0.57 lb',
    znKg: '(0.26 kg)',
    nptIn: '1/2"',
    nptMm: '(13 mm)',
    wrenchIn: '1"',
    wrenchMm: '(25 mm)',
    internalThread: '12-28"'
  },

  {
    znCode: 'MD-ZDM-825 BRASS PLUG',
    znLb: '0.34 lb',
    znKg: '(0.15 kg)',
    nptIn: '3/4"',
    nptMm: '(19 mm)',
    wrenchIn: '1 1/4"',
    wrenchMm: '(32 mm)',
    internalThread: '12-28"'
  },

  {
    znCode: 'MD-ZDM-1050 BRASS PLUG',
    znLb: '0.44 lb',
    znKg: '(0.2 kg)',
    nptIn: '1"',
    nptMm: '(25 mm)',
    wrenchIn: '1 1/2"',
    wrenchMm: '(38 mm)',
    internalThread: '12-28"'
  },

];


const galvion = () => {
  return (
    <div>
      <Hero
        heading={"Galvion Anodes"}
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
                  <th colSpan={7} className="py-8">
                    <h1>GALVION</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
                    <p>Not available in Aluminum</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
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
                    <p className="text-sm md:text-lg">DIAMETER</p>
                  </th>
                  <th>
                    B:
                    <p className="text-sm md:text-lg">LENGTH</p>
                  </th>
                  <th>
                    <p className="text-sm md:text-lg">BRASS PLUG NPT</p>
                  </th>
                  <th>
                    INTERNAL
                    <p className="px-2 text-sm md:text-lg">
                      THREAD
                    </p>
                  </th>
                </tr>
                {galvionData.map((item, id) => (
                  <ChartGalvion4Dim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    aDiaIn={item.aDiaIn}
                    aDiaMm={item.aDiaMm}
                    bLengthIn={item.bLengthIn}
                    bLengthMm={item.bLengthMm}
                    internalThread={item.internalThread}
                    nptIn={item.nptIn}
                    nptMm={item.nptMm}
                    
                  />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center">
                <Image
                  src="/anodes/GalvionIMG.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="mt-6">Galvion Anode</p>
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>GALVION BRASS PLUG</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
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
                    NPT
                  </th>
                  <th>WRENCH
                    <p className="text-sm md:text-lg">SIZE</p>
                  </th>
                  <th>
                    INTERNAL
                    <p className="px-2 text-sm md:text-lg">
                      THREAD
                    </p>
                  </th>
                </tr>
                {galvionBrassData.map((item, id) => (
                  <ChartGalvionBrass3Dim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    nptIn={item.nptIn}
                    nptMm={item.nptMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    wrenchIn={item.wrenchIn}
                    wrenchMm={item.wrenchMm}
                    internalThread={item.internalThread}
                  />
                ))}
              </tbody>
            </table>

            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="/anodes/GalvionBrassIMG.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="mt-6">Galvion Brass Plug</p>
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default galvion;
