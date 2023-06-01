import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim2Note from "@/components/ChartNoDim2Note";
import Image from "next/image";
import Link from "next/link";

const plateData = [
  {
    znCode: "ZPWW-M",
    znLb: "1.70 lb",
    znKg: "(0.77 kg)",
    alCode: "APWW-M",
    alLb: "0.66 lb",
    alKg: "(0.3 kg)",
    note1: "4 1/2 x 2 1/2 x 11/16 ",
    note2: "WITH BONDING WIRE ",
  },

  {
    znCode: "ZPNW-M",
    znLb: "1.70 lb",
    znKg: "(0.77 kg)",
    alCode: "APNW-M",
    alLb: "0.66 lb",
    alKg: "(0.3 kg)",
    note1: "4 1/2 x 2 1/2 x 11/16 ",
    note2: "NO BONDING WIRE ",
  },

  {
    znCode: "ZPWW-N",
    znLb: "3.10 lb",
    znKg: "(1.41 kg)",
    alCode: "APWW-N",
    alLb: "1.21 lb",
    alKg: "(0.55 kg)",
    note1: "6 x 3 x 3/4 ",
    note2: "WITH BONDING WIRE ",
  },

  {
    znCode: "ZPNW-N",
    znLb: "3.10 lb",
    znKg: "(1.41 kg)",
    alCode: "APNW-N",
    alLb: "1.21 lb",
    alKg: "(0.55 kg)",
    note1: "6 x 3 x 3/4 ",
    note2: "NO BONDING WIRE ",
  },

  {
    znCode: "ZPWW-O",
    znLb: "3.90 lb",
    znKg: "(1.77 kg)",
    alCode: "APWW-O",
    alLb: "1.52 lb",
    alKg: "(0.69 kg)",
    note1: "6 x 4 x 3/4 ",
    note2: "WITH BONDING WIRE ",
  },

  {
    znCode: "ZPNW-O",
    znLb: "3.90 lb",
    znKg: "(1.77 kg)",
    alCode: "APNW-O",
    alLb: "1.52 lb",
    alKg: "(0.69 kg)",
    note1: "6 x 4 x 3/4 ",
    note2: "NO BONDING WIRE ",
  },

  {
    znCode: "ZPWW-P",
    znLb: "8.30 lb",
    znKg: "(3.76 kg)",
    alCode: "APWW-P",
    alLb: "3.24 lb",
    alKg: "(1.47 kg)",
    note1: "6 x 3 x 3/4 ",
    note2: "WITH BONDING WIRE ",
  },

  {
    znCode: "ZPNW-P",
    znLb: "8.30 lb",
    znKg: "(3.76 kg)",
    alCode: "APNW-P",
    alLb: "3.24 lb",
    alKg: "(1.47 kg)",
    note1: "6 x 3 x 3/4 ",
    note2: "NO BONDING WIRE ",
  },
];

const plate = () => {
  return (
    <div>
      <Hero heading={"Plate Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>PLATE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={4}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>
                  <th className="border-l-0">LENGTH x WIDTH x HEIGHT</th>
                  <th className="border-l-0">DESCRIPTION</th>
                </tr>
                {plateData.map((item, id) => (
                  <ChartNoDim2Note
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
                  />
                ))}
              </tbody>
            </table>
            <div className=" flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
              <p>PLATE ANODES</p>
              <Image
                src="https://user-images.githubusercontent.com/77664153/236056635-663ee016-fdcf-4d1a-a285-37abfc373141.png"
                alt="pictore of anode"
                width="200"
                height="100"
              />
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default plate;
