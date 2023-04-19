import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2Dim from "@/components/Chart2Dim";
import Chart2DimPic from "@/components/Chart2DimPic";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";

const btqData = [
  {
    znCode: "MD-BTQ-140MM",
    znLb: "0.3 lb",
    znKg: "(0.14 kg)",
    alCode: "AMD-BTQ-140MM",
    alLb: "0.12 lb",
    alKg: "(0.05 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
  },
  {
    znCode: "MD-BTQ-185MM",
    znLb: "0.6 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-BTQ-185MM",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
  },
  {
    znCode: "MD-BTQ-250MM",
    znLb: "0.80 lb",
    znKg: "(0.36 kg)",
    alCode: "AMD-BTQ-250MM",
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

const vetusData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/232910240-741345fe-4934-4b90-9911-2ce69af9ffcf.png",
    znCode: "MD-BP-129",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-129",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910238-66ba1b88-1602-48ae-a333-22a47bd43715.png",
    znCode: "MD-BP-195",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-195",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '1 5/8"',
    widMm: "(41 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910242-23bd186d-33bb-4011-94b7-0711451d947e.png",
    znCode: "MD-BP-1185",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-1185",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232910238-66ba1b88-1602-48ae-a333-22a47bd43715.png",
    znCode: "MD-BP-1210",
    znLb: "0.84 lb",
    znKg: "(0.38 kg)",
    alCode: "AMD-BP-1210",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 1/2"',
    widMm: "(38 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909896-cb6ebba8-bd59-4f89-bc7e-4113b4ec6c60.png",
    znCode: "MD-BP-1126",
    znLb: "1 lb",
    znKg: "(0.45 kg)",
    alCode: "AMD-BP-1126",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909895-976b948f-c8a5-46b3-8e0e-21718e103c50.png",
    znCode: "MD-BP-1221",
    znLb: "0.08 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-BP-1221",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '-"',
    widMm: "(- mm)",
  },
];

const sidePowerData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/232909894-7fbd521d-7847-42b4-8cab-26b5032d1e63.png",
    znCode: "MD-SM-31180",
    znLb: "0.13 lb",
    znKg: "(0.06 kg)",
    alCode: "AMD-SM-31180",
    alLb: "0.05 lb",
    alKg: "(0.02 kg)",
    diaIn: '15/16"',
    diaMm: "(24 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909903-7cd88e85-3ca5-417a-b65d-7d4646e13508.png",
    znCode: "MD-SM-71190 / MD-SM-51180",
    znLb: "0.25 lb",
    znKg: "(0.11 kg)",
    alCode: "AMD-SM-71190 / AMD-SM-51180",
    alLb: "0.1 lb",
    alKg: "(0.05 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909894-7fbd521d-7847-42b4-8cab-26b5032d1e63.png",
    znCode: "MD-SM-61180",
    znLb: "0.10 lb",
    znKg: "(0.05 kg)",
    alCode: "AMD-SM-61180",
    alLb: "0.04 lb",
    alKg: "(0.02 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '3/4"',
    widMm: "(19 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909901-10e5ebb7-dd1f-4ad0-bcfb-89fe52aafcc0.png",
    znCode: "MD-SM-201180",
    znLb: "0.60 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-SM-201180",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '1 5/8"',
    widMm: "(41 mm)",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/232909898-98df9601-8a53-4e49-877b-23de8846d40b.png",
    znCode: "MD-SM-501180",
    znLb: "2.42 lb",
    znKg: "(1.1 kg)",
    alCode: "AMD-SM-501180",
    alLb: "0.95 lb",
    alKg: "(0.43 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '2"',
    widMm: "(51 mm)",
  },
];

const keyPowerData = [
  {
    znCode: "MD-55989",
    znLb: "0.23 lb",
    znKg: "(0.1 kg)",
    alCode: "AMD-55989",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
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
                {btqData.map((item, id) => (
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
                <p className="py-4">TOP</p>
              </div>
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617088-47836f5a-1059-4856-8e49-ec7ce2ba1c3d.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                <p className="py-4">BOTTOM</p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617080-1880d126-e25d-442d-ab54-e6c4fe6968e4.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={130}
                  height={0}
                />
                <p className="py-4 text-center">
                  SIDE OF MD-BTQ-140MM / MD-BTQ-185MM
                </p>
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/232617085-40422e3d-294c-4564-a1cf-c393c905adc3.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={130}
                  height={50}
                />
                <p className="py-4 text-center">
                  SIDE OF MD-BTQ-250MM / MD-BTQ-300MM
                </p>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>VETUS BOW THRUSTERS ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {vetusData.map((item, id) => (
                  <Chart2DimPic
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
                    width="300"
                    height="180"
                    aDim="A: DIAMETER"
                    bDim="B: HEIGHT"
                  />
                ))}
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>KEY POWER BOW THRUSTER ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={5}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>lb</th>
                  <th>(kg)</th>
                </tr>
                {keyPowerData.map((item, id) => (
                  <ChartNoDim
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                  />
                ))}
              </tbody>
            </table>
            <div className=" flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
              <p>{keyPowerData[0].znCode}</p>
              <Image
                src="https://user-images.githubusercontent.com/77664153/233128270-232198c5-6eb8-400a-ae6e-89ad4be02adc.png"
                alt="pictore of anode"
                width="200"
                height="100"
              />
              <p className="font-normal">THREADED CORE: 1/2", 7/16", 1/4"</p>
              <p className="font-extrabold">
                PLEASE SPECIFY THREAD SIZE WHEN ORDERING
              </p>
            </div>

            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>SIDE POWER BOW THRUSTERS ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {sidePowerData.map((item, id) => (
                  <Chart2DimPic
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
                    width="300"
                    height="180"
                    aDim="A: DIAMETER"
                    bDim="B: HEIGHT"
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

export default bowThruster;
