import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
import vetus25 from "../../../public/vetus25.png";
import Chart4DimPic from "@/components/Chart4DimPic";

const hullData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/226746464-e0af3ca3-0709-43fe-9b41-deaa932fcbe0.png",
    znCode: "MD-VETUS 8",
    znLb: "2.2",
    znKg: "(1)",
    alCode: "AMD-VETUS 8",
    alLb: "1",
    alKg: "(0.45)",
    diaIn: '1 3/4"',
    diaMm: "(44mm)",
    widIn: '1 3/4"',
    widMm: "(44mm)",
    cDiaIn: '-"',
    cDiaMm: "(-mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(-mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/226746467-e4daf96b-35b8-430e-a348-8d3577fd4322.png",
    znCode: "MD-VETUS 15",
    znLb: "2",
    znKg: "(0.91)",
    alCode: "AMD-VETUS 15",
    alLb: "1",
    alKg: "(0.45)",
    diaIn: '6.00"',
    diaMm: "(152mm)",
    widIn: '2 1/2"',
    widMm: "(60mm)",
    cDiaIn: '1"',
    cDiaMm: "(25mm)",
    dMeasureIn: '3.125"',
    dMeasureMm: "(79mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/225975176-5ae73ef9-ef39-4e91-86f9-f0944f53b09d.png",
    znCode: "MD-VETUS 25",
    znLb: "5.1",
    znKg: "(2.313)",
    alCode: "AMD-VETUS 25",
    alLb: "2.5",
    alKg: "(1.134)",
    diaIn: '9 1/2"',
    diaMm: "(241mm)",
    widIn: '2.4"',
    widMm: "(61mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/226750447-df454d69-618f-4237-a3d7-ce78fff4888c.png",
    znCode: "MD-VETUS 35",
    znLb: "10",
    znKg: "(4.5)",
    alCode: "AMD-VETUS 35",
    alLb: "3.85",
    alKg: "(1.75)",
    diaIn: '13 3/4"',
    diaMm: "(349mm)",
    widIn: '2 7/8"',
    widMm: "(73mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200mm)",
    notes: "",
  },
];

const hull = () => {
  return (
    <div>
      <Hero
        heading={"Hull Anodes"}
        message={
          "This line provides a full range of types and sizes of hull anodes for small to large commercial vessels and structures. Available in weld-on and bolt-on styles with steel or aluminum insterts cast as integral parts of the anodes."
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
                  <th colSpan={8} className="py-8">
                    <h1>HULL ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  {/* <th className="border-l-0">METAL</th> */}
                  <th colSpan={2}>ITEM #</th>

                  <th className="border-r-0">lb (kg)</th>
                  {/* <th className="border-l-0">(kg)</th> */}

                  <th>A - LENGTH</th>
                  <th>B - WIDTH</th>
                  <th>C - DEPTH</th>
                  <th>D - C/C</th>
                </tr>
                {hullData.map((item, id) => (
                  <Chart4DimPic
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

export default hull;
