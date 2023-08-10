import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart2DimNotesBottom from "@/components/Chart2DimNotesBottom";
import Image from "next/image";
import Link from "next/link";

const maxPropData = [
  {
    znCode: "MAX PROP 63M",
    znLb: "0.59 lb",
    znKg: "(0.27 kg)",
    alCode: "AMAX PROP 63M",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    diaIn: '1 13/16"',
    diaMm: "(46 mm)",
    widIn: '3/4" to 1 1/8""',
    widMm: "(22mm to 28mm mm)",
    note1: "- Fits 2001 and older 63mm hubs non-circular in diameter",
    note2: "- Uses 63mm-70mm LARGE SCREW SET",
    note3: "(5mm diameter screws, 20mm long, 4mm hex wrench)",
  },

  {
    znCode: "MAX PROP 70M",
    znLb: "0.88 lb",
    znKg: "(0.4 kg)",
    alCode: "AMAX PROP 70M",
    alLb: "0.34 lb",
    alKg: "(0.15 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 1/4" to 1 3/8""',
    widMm: "(30mm to 35mm mm)",
    note1: "- Fits 2001 and older 70mm hubs non-circular in diameter",
    note2: "- Uses 63mm-70mm LARGE SCREW SET",
    note3: "(5mm diameter screws, 20mm long, 4mm hex wrench)",
  },

  {
    znCode: "MAX PROP 83M",
    znLb: "1.73 lb",
    znKg: "(0.78 kg)",
    alCode: "AMAX PROP 83M",
    alLb: "0.68 lb",
    alKg: "(0.31 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 1/2" to 1 3/4""',
    widMm: "(38mm to 44mm mm)",
    note1: "- Fits 2003 and older 83mm hubs non-circular in diameter",
    note2: "- Uses 83mm-100mm LARGE SCREW SET",
    note3: "(6mm diameter screws, 25mm long, 5mm hex wrench)",
  },
];

const maxPropUData = [
  {
    znCode: "MAX PROP 63M UNIVERSAL",
    znLb: "0.63 lb",
    znKg: "(0.29 kg)",
    alCode: "A-MAX PROP 63M UNIVERSAL",
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '2 3/8"',
    diaMm: "(60 mm)",
    widIn: '3/4", 7/8", 1", 1 1/8" and"',
    widMm: "22mm, 25mm, 28mm",
    note1:
      '- For 63mm Max Prop Hubs that use LARGE SCREWS (5mm diameter) on either 46mm (1 13/16") or 43mm (1 5/8") centers',
    note2: "- Required for all model years 2006 and later ",
    note3:
      "- Fits most other models except 2003, 2004 and 2005 that use SMALL SCREW SET",
  },

  {
    znCode: "MAX PROP 70M UNIVERSAL",
    znLb: "0.88 lb",
    znKg: "(0.4 kg)",
    alCode: "A-MAX PROP 70M UNIVERSAL",
    alLb: "0.34 lb",
    alKg: "(0.15 kg)",
    diaIn: '2 11/16"',
    diaMm: "(68 mm)",
    widIn: '1 1/4", 1 3/8" and"',
    widMm: "30mm and 35mm",
    note1:
      "- For 70mm Max Prop hubs that use either LARGE SCREWS (5mm) or SMALL (4mm) diameter mounting screws",
    note2: '- Mounting holes 20mm (2") C/C',
    note3:
      "- Uses the 63mm - 70mm LARGE SCREW SET (5mm diameter socket cap screws, 20mm long, 4mm Hex Wrench) or the 63mm - 70mm SMALL SCREW SET (4mm diameter socket cap screws, 20mm long, 3mm hex wrench)",
  },

  {
    znCode: "MAX PROP 83M UNIVERSAL",
    znLb: "1.88 lb",
    znKg: "(0.85 kg)",
    alCode: "A-MAX PROP 83M UNIVERSAL",
    alLb: "0.73 lb",
    alKg: "(0.33 kg)",
    diaIn: '3 1/8"',
    diaMm: "(79 mm)",
    widIn: '- For 1 1/2" to 1-3/4" and"',
    widMm: "30mm and 35mm",
    note1: "- For 83mm Max Prop hubs",
    note2:
      '- Small mounting holes: 55mm (2 1/8") C/C, Large Mounting holes: 60mm (2 3/8") C/C',
    note3:
      "- For 2004 and newer propellers, use smaller mounting holes with SMALL SCREW SET (5mm diameter screws, 25mm long). For 2003 and older propellers, use larger mounting holes with LARGE SCREW SET (6mm diameter screws, 25mm long",
  },
];

const benStdData = [];

const maxProp = () => {
  return (
    <div>
      <Hero heading={"Max Prop Anodes "} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>MAX PROP</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p className="pt-2"></p>
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
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>MOUNTING HOLES C/C</th>
                  <th>SHAFT DIAMETER</th>
                </tr>
                {maxPropData.map((item, id) => (
                  <Chart2DimNotesBottom
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
                    note1={item.note1}
                    note2={item.note2}
                    note3={item.note3}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex">
              <div className="flex flex-col items-center lg:pr-10">
                <p className="py-4 font-bold">MAX PROP</p>
                <Image
                  src="https://user-images.githubusercontent.com/77664153/252425802-943d15dc-77c8-4bb7-99aa-dc0157d7e285.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>MAX PROP UNIVERSAL</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {maxPropUData.map((item, id) => (
                  <Chart2DimNotesBottom
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
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    note1={item.note1}
                    note2={item.note2}
                    note3={item.note3}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex">
              <div className="flex flex-col items-center font-bold lg:pr-10">
                <p className="py-4">MAX PROP UNIVERSAL</p>
                <Image
                  src="https://user-images.githubusercontent.com/77664153/252425847-c5ffa386-a40f-482f-be20-767b6fdac787.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default maxProp;
