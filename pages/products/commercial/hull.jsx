import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
import vetus25 from "../../../public/vetus25.png";
import Chart4DimPic from "@/components/Chart4DimPic";

const hullData = [
  {img: 'https://user-images.githubusercontent.com/77664153/225975176-5ae73ef9-ef39-4e91-86f9-f0944f53b09d.png',
    znCode: 'MD-VETUS25',
znLb: '5.1',
znKg: '(2.313)',
alCode: 'AMD-VETUS 25',
alLb: '2.5',
alKg: '(1.134)',
diaIn: '9.5"',
diaMm: '(241mm)',
widIn: '2.4"',
widMm: '(61mm)',
cDiaIn: '1.25"',
cDiaMm: '(32)',
dMeasureIn: '7.875"',
dMeasureMm: '(200mm)',
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
                  <th colSpan={10} className="py-8">
                    <h1>HULL ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  {/* <th colSpan={2}></th> */}
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                   <tr>
                  <th colspan={2} className="">
                    DIAGRAM
                  </th>
                  <th className="border-l-0">METAL</th>
                  <th>ITEM #</th>

                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>

                  <th>A - LENGTH</th>
                  <th>B - WIDTH</th>
                  <th>C - DEPTH</th>
                  <th>D - C/C</th>
                  {/* <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th> */}
                </tr>
                {hullData.map((item, id) => (
                  <Chart4DimPic
                    key={id}
                    img={item.img}
                    // imgAlt=
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
                {/* {hullData.map((item, id) => (
                  <Chart4DimNote
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
                    dMeasureIn={item.dMeasureIn}
                    dMeasureMm={item.dMeasureMm}
                    notes={item.notes}
                  />
                ))} */}
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
