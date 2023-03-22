import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
import vetus25 from "../../../public/vetus25.png";
import Chart5DimPic from "@/components/Chart5DimPic";

const teardropWeldData = [
  {
    img: "",
    znCode: "MD-ZTS",
    znLb: "5.0 lb",
    znKg: "(2.27 kg)",
    alCode: "AMD-ZTS",
    alLb: "2.1 lb",
    alKg: "(0.95 kg)",
    mountingIn: '"',
    mountingMm: "( mm)",
    diaIn: '9.0"',
    diaMm: "(229 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.375"',
    cDiaMm: "(35 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "",
  },
  {
    img: "",
    znCode: "MD-35",
    znLb: "2.43 lb",
    znKg: "(1.1 kg)",
    alCode: "AMD-35",
    alLb: "1.10 lb",
    alKg: "(0.5 kg)",
    mountingIn: '"',
    mountingMm: "( mm)",
    diaIn: '5.0"',
    diaMm: "(127 mm)",
    widIn: '2.4"',
    widMm: "(61 mm)",
    cDiaIn: '1.375"',
    cDiaMm: "(35 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "",
  },
  {
    img: "",
    znCode: "MD-37",
    znLb: "4.85 lb",
    znKg: "(2.2 kg)",
    alCode: "AMD-37",
    alLb: "1.94 lb",
    alKg: "(0.88 kg)",
    mountingIn: '"',
    mountingMm: "( mm)",
    diaIn: '7.0"',
    diaMm: "(178 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.5"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "",
  },
];

const teardrop = () => {
  return (
    <div>
      <Hero
        heading={"Teardrop Anodes"}
        message={
          ""
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={9} className="py-8">
                    <h1>TEARDROP SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={5}>NOMINAL DIMENSIONS</th>
                </tr>

                {teardropWeldData.map((item, id) => (
                  <Chart5DimPic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    mountingIn={item.mountingIn}
                    mountingMm={item.mountingMm}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))}
                {/* <tr>
                  <th colSpan={15} className="text-left px-5">
                    WELD ON
                  </th>
                </tr> */}
                {/* <tr>
                  <th colSpan={15} className="text-left px-5">
                    BOLT ON
                  </th>
                </tr> */}
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default teardrop;
