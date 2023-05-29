import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim2NotePic from "@/components/ChartNoDim2NotePic";
import Image from "next/image";
import Link from "next/link";

const suzukiData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/241778617-19170f19-cd56-494b-bf04-a31c19c86a64.png",
    znCode: "MD-55321-87J00",
    znLb: "0.04 lb",
    znKg: "(0.02 kg)",
    alCode: "AMD-55321-87J00",
    alLb: "0.02 lb",
    alKg: "(0.01 kg)",
    note1: "",
    note2: "1/4-20 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241778624-71438312-f59f-483f-b749-05651fd81930.png",
    znCode: "MD-55320-95310",
    znLb: "0.20 lb",
    znKg: "(0.09 kg)",
    alCode: "AMD-55320-95310",
    alLb: "0.08 lb",
    alKg: "(0.04 kg)",
    note1: "55-140",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241778621-484949e8-7a3f-4e43-9f40-a5efc690e1d2.png",
    znCode: "MD-55125-96310",
    znLb: "0.27 lb",
    znKg: "(0.12 kg)",
    alCode: "AMD-55125-96310",
    alLb: "0.11 lb",
    alKg: "(0.05 kg)",
    note1: "20-30",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241778622-fc8722d6-f223-4b55-9de7-a3af914d1830.png",
    znCode: "MD-55125-87D00",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-55125-87D00",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    note1: "150-200",
    note2: "M10x1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241778620-cc1cdc01-1adc-40ea-a70f-aa6bb6568c1d.png",
    znCode: "MD-55321-94900 / MD-3C760-2181",
    znLb: "1.77 lb",
    znKg: "(0.8 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    note1: "",
    note2: "",
  },
];

const suzuki = () => {
  return (
    <div>
      <Hero
        heading={"suzuki Anodes"}
        message={
          "Carefully designed by our skilled technicians to fit like an OEM part"
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
                    <h1>SUZUKI</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {suzukiData.map((item, id) => (
                  <ChartNoDim2NotePic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    note1={item.note1}
                    note2={item.note2}
                    headerNotes="
                    HORSEPOWER"
                    headerNotes2="
                    THREAD SIZE"
                  />
                ))}
              </tbody>
            </table>
            {/* <table>
              <tbody>
                <tr>
                  <th className="py-8">
                    <h1>SUZUKI ANODE KITS</h1>
                    <p>Available in ZINC and ALUMINUM</p>
                    <p>Hardware Included</p>
                  </th>
                </tr>
                <tr>
                  <th className="bg-lightMain text-black py-2">
                    HBF4050 ANODE KIT
                  </th>
                </tr>
                <tr className="">
                  <td className="bg-white flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[2].znCode}</p>
                      <Image src={suzukiData[2].img} width={200} height={100} />
                      <p className="py-4">1 each</p>
                    </div>
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[5].znCode}</p>
                      <Image src={suzukiData[5].img} width={200} height={100} />
                      <p className="py-4">1 each</p>
                    </div>
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[4].znCode}</p>
                      <Image src={suzukiData[4].img} width={200} height={100} />
                      <p className="py-4">2 each</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-lightMain text-black py-2">
                    HBF35225 ANODE KIT
                  </th>
                </tr>
                <tr>
                  <td className="bg-white flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[2].znCode}</p>
                      <Image src={suzukiData[2].img} width={200} height={100} />
                      <p className="py-4">1 each</p>
                    </div>
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[5].znCode}</p>
                      <Image src={suzukiData[5].img} width={200} height={100} />
                      <p className="py-4">1 each</p>
                    </div>
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[4].znCode}</p>
                      <Image src={suzukiData[4].img} width={200} height={100} />
                      <p className="py-4">2 each</p>
                    </div>
                    <div className="flex flex-col items-center pb-4">
                      <p className="py-4">{suzukiData[9].znCode}</p>
                      <Image src={suzukiData[9].img} width={200} height={100} />
                      <p className="py-4">2 each</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </main>
        </article>
      </div>
    </div>
  );
};

export default suzuki;
