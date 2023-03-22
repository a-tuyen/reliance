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
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "AMD-VETUS 8",
    alLb: "1 lb",
    alKg: "(0.45 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '-',
    cDiaMm: "-",
    dMeasureIn: '-',
    dMeasureMm: "-",
    notes: "",
  },
  {img: 'https://user-images.githubusercontent.com/77664153/226746467-e4daf96b-35b8-430e-a348-8d3577fd4322.png',
  znCode: 'MD-VETUS 15',
  znLb: '2 lb',
  znKg: '(0.91 kg)',
  alCode: 'AMD-VETUS 15',
  alLb: '1 lb',
  alKg: '(0.45 kg)',
  diaIn: '6.00"',
  diaMm: '(152 mm)',
  widIn: '2 1/2"',
  widMm: '(60 mm)',
  cDiaIn: '1.0"',
  cDiaMm: '(25 mm)',
  dMeasureIn: '3.125"',
  dMeasureMm: '(79 mm)',
  notes: '',},
  
  

  {img: 'https://user-images.githubusercontent.com/77664153/225975176-5ae73ef9-ef39-4e91-86f9-f0944f53b09d.png',
  znCode: 'MD-VETUS 25',
  znLb: '5.1 lb',
  znKg: '(2.313 kg)',
  alCode: 'AMD-VETUS 25',
  alLb: '2.5 lb',
  alKg: '(1.134 kg)',
  diaIn: '9 1/2"',
  diaMm: '(241 mm)',
  widIn: '2.4"',
  widMm: '(61 mm)',
  cDiaIn: '1 1/4"',
  cDiaMm: '(32 mm)',
  dMeasureIn: '7 7/8"',
  dMeasureMm: '(200 mm)',
  notes: '',},
  
  {img: 'https://user-images.githubusercontent.com/77664153/226750447-df454d69-618f-4237-a3d7-ce78fff4888c.png',
znCode: 'MD-VETUS 35',
znLb: '10 lb',
znKg: '(4.5 kg)',
alCode: 'AMD-VETUS 35',
alLb: '3.85 lb',
alKg: '(1.75 kg)',
diaIn: '13 3/4"',
diaMm: '(349 mm)',
widIn: '2 7/8"',
widMm: '(73 mm)',
cDiaIn: '1 1/4"',
cDiaMm: '(32 mm)',
dMeasureIn: '7 7/8"',
dMeasureMm: '(200 mm)',
notes: '',},

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

                  <th colSpan={2}>ITEM #</th>

                  <th className="border-r-0 ">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                    <div>lb</div>
                    <div className="px-2">(kg)</div>
                    </div>
                    </th>


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
