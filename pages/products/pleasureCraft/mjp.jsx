import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3DimPicNote from "@/components/Chart3DimPicNote";
import Image from "next/image";

const mjpData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/236954752-78c5e2c0-bb36-47a8-8934-f5e55ae5d4bb.png",
    znCode: "MD-MJP305-1 JET CONE ANODE (8700-026-00S)",
    znLb: "3.7 lb",
    znKg: "(1.68 kg)",
    alCode: "AMD-MJP305-1 JET CONE ANODE (8700-026-00S)",
    alLb: "1.45 lb",
    alKg: "(0.66 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    cDiaIn: '4 1/2"',
    cDiaMm: "(114 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/227376003-f3889d35-0e22-4d65-bbf8-c9b6477d130b.png",
    znCode: "MD-MJP305-2 JET BODY ANODE (8700-0037-00H)",
    znLb: "2 lb",
    znKg: "(0.91 kg)",
    alCode: "AMD-MJP305-2 JET BODY ANODE (8700-0037-00H)",
    alLb: "0.78 lb",
    alKg: "(0.35 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    cDiaIn: '1/2"',
    cDiaMm: "(13 mm)",
    notes: "MD-ZD56",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/234129242-48c7f6cf-db3d-4dd5-bab9-20325aed1909.png",
    znCode: "MD-MJP305-3 STEERING DEFLECTOR ANODE (8729-926-009)",
    znLb: "0.3 lb",
    znKg: "(0.14 kg)",
    alCode: "AMD-MJP305-3 STEERING DEFLECTOR ANODE (8729-926-009)",
    alLb: "0.12 lb",
    alKg: "(0.05 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '1 1/2"',
    widMm: "(38 mm)",
    cDiaIn: '3/8"',
    cDiaMm: "(10 mm)",
    notes: "MD-HJ112657",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/234129251-9231260b-b240-4258-a620-e750e20751bf.png",
    znCode: "MD-MJP305-4 REVERSE DEFLECTOR (8978-924-00G)",
    znLb: "0.60 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-MJP305-4 REVERSE DEFLECTOR (8978-924-00G)",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '3 1/8"',
    diaMm: "(79 mm)",
    widIn: '7/8"',
    widMm: "(22 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    notes: "MD-HJ-103359",
  },
];

const mjp = () => {
  return (
    <div>
      <Hero
        heading={"MJP ULTRAJET MARINE JET DRIVE Anodes"}
        message={""}
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
                    <h1>MJP ULTRAJET</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                {mjpData.map((item, id) => (
                  <Chart3DimPicNote
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
                    aDim="HEIGHT"
                    bDim="TOP DIAMETER"
                    cDim="BASE DIAMETER"
                    notesHeading="CROSS REFERENCE / ALTERNATE NAME"
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

export default mjp;
