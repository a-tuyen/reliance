import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimPicNote from "@/components/Chart2DimPicNote";
import Image from "next/image";

const zfTransmissionData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/245298040-2347429c-58e6-41f1-a1b0-ff394f705764.png",
    znCode: "3217307021-01",
    znLb: "0.21 lb",
    znKg: "(0.1 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    notes: "5/16-18 UNC ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/245298138-b80431c1-697c-4bfc-a6c1-ce8dd5567988.png",
    znCode: "3217108021",
    znLb: "0.16 lb",
    znKg: "(0.07 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '5/8"',
    widMm: "(16 mm)",
    notes: "5/16-18 UNC ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/245298027-5db21791-2b75-46f7-934a-80c5d02529d2.png",
    znCode: "BRASS PLUG",
    znLb: "- lb",
    znKg: "(- kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
    notes: "5/16-18 UNC ",
  },
];

const zfTransmission = () => {
  return (
    <div>
      <Hero heading={"ZF Transmission Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>ZF TRANSMISSION</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {zfTransmissionData.map((item, id) => (
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
                    aDim="LENGTH"
                    bDim="DIAMETER"
                    notesHeading="C-PLUG THREAD INTERVAL"
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

export default zfTransmission;
