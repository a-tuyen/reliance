import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Image from "next/image";

const referenceData = [
  {
    znCode: 'MDR-1',
    znLb: '0.23 lb',
    znKg: '(0.1 kg)',
    alCode: 'AMDR-1',
    alLb: '0.09 lb',
    alKg: '(0.04 kg)',
    diaIn: '1 7/8"',
    diaMm: '(48 mm)',
    widIn: '1/4"',
    widMm: '(6 mm)'
  },
  {
    znCode: 'MDR-2',
    znLb: '0.9 lb',
    znKg: '(0.41 kg)',
    alCode: 'AMDR-2',
    alLb: '0.35 lb',
    alKg: '(0.16 kg)',
    diaIn: '1 7/8"',
    diaMm: '(48 mm)',
    widIn: '1/4"',
    widMm: '(6 mm)'
  },
  {
    znCode: 'MDR-2',
    znLb: '0.9 lb',
    znKg: '(0.41 kg)',
    alCode: 'AMDR-2',
    alLb: '0.35 lb',
    alKg: '(0.16 kg)',
    diaIn: '2 13/16"',
    diaMm: '(71 mm)',
    widIn: '1/2"',
    widMm: '(13 mm)'
  },
  {
    znCode: 'MDR-3',
    znLb: '1.57 lb',
    znKg: '(0.71 kg)',
    alCode: 'AMDR-3',
    alLb: '0.61 lb',
    alKg: '(0.28 kg)',
    diaIn: '3 3/4"',
    diaMm: '(95 mm)',
    widIn: '1/2"',
    widMm: '(13 mm)'
  },
  {
    znCode: 'MDR-3 HEAVY',
    znLb: '2.6 lb',
    znKg: '(1.18 kg)',
    alCode: 'AMDR-3 HEAVY',
    alLb: '1.02 lb',
    alKg: '(0.46 kg)',
    diaIn: '4"',
    diaMm: '(102 mm)',
    widIn: '5/8"',
    widMm: '(16 mm)'
  },
  {
    znCode: 'MDR-4',
    znLb: '3.54 lb',
    znKg: '(1.61 kg)',
    alCode: 'AMDR-4',
    alLb: '1.38 lb',
    alKg: '(0.63 kg)',
    diaIn: '5"',
    diaMm: '(127 mm)',
    widIn: '5/8"',
    widMm: '(16 mm)'
  },
  {
    znCode: 'MDR-5',
    znLb: '4.83 lb',
    znKg: '(2.19 kg)',
    alCode: 'AMDR-5',
    alLb: '1.89 lb',
    alKg: '(0.86 kg)',
    diaIn: '5 1/8"',
    diaMm: '(130 mm)',
    widIn: '7/8"',
    widMm: '(22 mm)'
  },
  {
    znCode: 'MDR-7',
    znLb: '9.17 lb',
    znKg: '(4.16 kg)',
    alCode: 'AMDR-7',
    alLb: '3.58 lb',
    alKg: '(1.62 kg)',
    diaIn: '6 1/2"',
    diaMm: '(165 mm)',
    widIn: '7/8"',
    widMm: '(22 mm)'
  },
  {
    znCode: 'MDR-8',
    znLb: '6.6 lb',
    znKg: '(2.99 kg)',
    alCode: 'AMDR-8',
    alLb: '2.58 lb',
    alKg: '(1.17 kg)',
    diaIn: '7 1/2"',
    diaMm: '(191 mm)',
    widIn: '1"',
    widMm: '(25 mm)'
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
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
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
            <div className="flex flex-row items-center">
              <Image
                src="https://user-images.githubusercontent.com/77664153/229620612-c8c88126-eebc-4af5-9a44-db20f29795f5.png"
                alt="picture of anode"
                className="min-w-[80px]"
                width={200}
                height={100}
              />
              <Image
                src="https://user-images.githubusercontent.com/77664153/229620615-99191688-b720-4b87-833b-bc72dd0891be.png"
                alt="picture of anode"
                className="min-w-[80px]"
                width={200}
                height={100}
              />
            </div>
            <p className="py-4 text-center lg:w-[80%]">
              Rudder Anodes come with 2 halves and stainless steel
              hardware. Nuts are set into the anode and slot head screws come
              standard. Socket cap screws are available upon request.
            </p>
            <div className="flex flex-col items-center lg:pr-10">
              <Image
                src="https://user-images.githubusercontent.com/77664153/229620617-42a28340-8ea3-414d-a5f1-885ae732842d.png"
                alt="picture of anode"
                className="min-w-[80px] pt-4"
                width={200}
                height={100}
              />
              <p className="py-4 text-center">
                Also available as Halves with nut set into anode. Screw is not included.
              </p>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default reference;
