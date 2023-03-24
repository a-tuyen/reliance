import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimPic from "@/components/Chart4DimPic";

const streamlinedData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/227608602-227604fe-0679-4e20-9819-a87f74068e19.png",
    znCode: "MD-Z-22",
    znLb: "23.0 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-Z-22",
    alLb: "10.0 lb",
    alKg: "(4.54 kg)",
    diaIn: '14.0"',
    diaMm: "(356 mm)",
    widIn: '6.5"',
    widMm: "(165 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "AVAILABLE WITH STEEL OR ALUMINUM STRAPS",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/227608605-1e4fd659-4e3e-457d-bfa4-519e1a8b89c0.png",
    znCode: "MD-Z-26 / MD-ZHS-26",
    znLb: "25 lb",
    znKg: "(11.34 kg)",
    alCode: "AMD-Z-26 / AMD-ZHS-26",
    alLb: "12 lb",
    alKg: "(5.44 kg)",
    diaIn: '13.25"',
    diaMm: "(337 mm)",
    widIn: '4.25"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/4"',
    cDiaMm: "(57 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "AVAILABLE WITH STEEL OR ALUMINUM STRAPS",
  },
];

const streamlined = () => {
  return (
    <div>
      <Hero
        heading={"streamlined Anodes"}
        message={
          "Used to protect hull and various areas of large vessels such as keel rudders, bottom plates, ballast tanks, bilges, cargo tanks, and structures."
        }
        img={"bg-img5"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={8} className="py-8">
                    <h1>STREAMLINED ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>

                {streamlinedData.map((item, id) => (
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
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default streamlined;
