import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Image from "next/image";

const referenceData = [
  {
    znCode: 'MD-RZG-1',
    znLb: '0.15 lb',
    znKg: '(0.07 kg)',
    alCode: 'AMD-RZG-1',
    alLb: '0.09 lb',
    alKg: '(0.04 kg)',
    diaIn: '3/4"',
    diaMm: '(19 mm)',
    widIn: '3/4"',
    widMm: '(19 mm)'
  },
  {
    znCode: 'MD-RZG-2-21',
    znLb: '0.9 lb',
    znKg: '(0.41 kg)',
    alCode: 'AMD-RZG-2-21',
    alLb: '0.35 lb',
    alKg: '(0.16 kg)',
    diaIn: '3/4"',
    diaMm: '(19 mm)',
    widIn: '3/4"',
    widMm: '(19 mm)'
  },
  {
    znCode: 'MD-RZG-2-25',
    znLb: '0.15 lb',
    znKg: '(0.07 kg)',
    alCode: 'AMD-RZG-2-25',
    alLb: '0.06 lb',
    alKg: '(0.03 kg)',
    diaIn: '3/4"',
    diaMm: '(19 mm)',
    widIn: '7/8"',
    widMm: '(22 mm)'
  },
  {
    znCode: 'MD-RZG-2-27.5',
    znLb: '0.17 lb',
    znKg: '(0.08 kg)',
    alCode: 'AMD-RZG-2-27.5',
    alLb: '0.07 lb',
    alKg: '(0.03 kg)',
    diaIn: '3 3/4"',
    diaMm: '(95 mm)',
    widIn: '1 1/8"',
    widMm: '(29 mm)'
  },

];

const reference = () => {
  return (
    <div>
      <Hero
        heading={"reference Anodes "}
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
                  <th colSpan={11} className="py-8">
                    <h1>REFERENCE ANODE SPECIFICATIONS</h1>
                    {/* <p>SPECIFICATIONS</p> */}
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={5}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: LENGTH</th>
                  <th>B: WIDTH</th>
                </tr>
                {referenceData.map((item, id) => (
                  <Chart2Dim
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
                  />
                ))}
              </tbody>
            </table>
            <div className="flex flex-row w-[100%] justify-evenly">
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="/anodes/Reference-1-IMG.png"
                  alt="picture of anode"
                  className="min-w-[80px] pt-4"
                  width={300}
                  height={120}
                />
                <p className="text-center">
                  MD-RGZ-1
                </p>
              </div>

              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="/anodes/Reference-2-IMG.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={300}
                  height={120}
                />
                <p className="text-center">
                  MD-RGZ-2-21
                </p>
                <p className="text-center">
                  MD-RGZ-2-25
                </p>
                <p className="text-center">
                  MD-RGZ-2-27.5
                </p>
              </div>
            </div>

          </main>
        </article>
      </div>
    </div>
  );
};

export default reference;
