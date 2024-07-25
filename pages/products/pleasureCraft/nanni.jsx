import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimPicNote from "@/components/Chart2DimPicNote";
import Image from "next/image";

const nanniData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/245945876-841c61ff-e706-45b0-9956-a9d82239d762.png",
    znCode: "MD-N494635",
    znLb: "0.88 lb",
    znKg: "(0.4 kg)",
    alCode: "N/A",
    alLb: "N/A",
    alKg: "",
    diaIn: '5/8"',
    diaMm: "(16 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    notes: "5/18-11 UNC ",
  },
];

const nanni = () => {
  return (
    <div>
      <Hero heading={"Nanni Engine Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>NANNI ENGINE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {nanniData.map((item, id) => (
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

export default nanni;
