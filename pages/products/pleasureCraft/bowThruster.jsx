import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Image from "next/image";

const bowThrusterData = [
  {
    znCode: "MD-BTQ140MM",
    znLb: "0.3 lb",
    znKg: "(0.14 kg)",
    alCode: "AMD-BTQ140MM",
    alLb: "0.12 lb",
    alKg: "(0.05 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
  },
  {
    znCode: "MD-BTQ185MM",
    znLb: "0.6 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-BTQ185MM",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
  },
  {
    znCode: "MD-BTQ250MM",
    znLb: "0.80 lb",
    znKg: "(0.36 kg)",
    alCode: "AMD-BTQ250MM",
    alLb: "0.31 lb",
    alKg: "(0.14 kg)",
    diaIn: '2 3/10"',
    diaMm: "(58 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
  },
  {
    znCode: "MD-BTQ-300MM",
    znLb: "0.6 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-BTQ-300MM",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
  },
];

const bowThruster = () => {
  return (
    <div>
      <Hero heading={"Bow Thruster Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1 className="text-center pt-4">
                      QUICK BTQ / BTR THRUSTER ANODE SPECIFICATIONS
                    </h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="pl-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: INSIDE WIDTH</th>
                  <th>B: OVERALL HEIGHT</th>
                </tr>
                {bowThrusterData.map((item, id) => (
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
            <div className="flex flex-col md:flex-row md:w-[80%]">
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617087-be2f87ad-2ad6-463b-a558-fb41337d548f.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4">TOP VIEW</p>
              </div>
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617088-47836f5a-1059-4856-8e49-ec7ce2ba1c3d.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4">INSIDE VIEW</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617080-1880d126-e25d-442d-ab54-e6c4fe6968e4.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={130}
                  height={0}
                />
                <p className="py-4 text-center">SIDE VIEW OF MD-BTQ 140MM / MD-BTQ 185MM</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617085-40422e3d-294c-4564-a1cf-c393c905adc3.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={130}
                  height={50}
                />
                <p className="py-4 text-center">SIDE VIEW OF MD-BTQ 250MM / MD-BTQ 300MM</p>
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default bowThruster;
