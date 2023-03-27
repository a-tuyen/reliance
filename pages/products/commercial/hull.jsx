import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart4DimNote from "@/components/Chart4DimNote";
// import bg4 from "../public/backgrounds/relianceBg4.jpeg";
// import vetus25 from "../../../public/vetus25.png";
import Chart4DimPic from "@/components/Chart4DimPic";

const hullBarWeldData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228078024-fbe33d62-5658-4eca-a11a-d0ddd665bca9.png",
    znCode: "MD-ZHS-50",
    znLb: "48.0 lb",
    znKg: "(21.77 kg)",
    alCode: "AMD-ZHS-50",
    alLb: "21.0 lb",
    alKg: "(9.53 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '2.0"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228080284-2f60268d-6aa5-480b-bc05-b3ca0668583e.png",
    znCode: "MD-ZMA-2204",
    znLb: "37.0 lb",
    znKg: "(16.78 kg)",
    alCode: "AMD-ZMA-2204",
    alLb: "20.0 lb",
    alKg: "(9.07 kg)",
    diaIn: '20.0"',
    diaMm: "(508 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '2.0"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228078024-fbe33d62-5658-4eca-a11a-d0ddd665bca9.png",
    znCode: "MD-ZMA-2244",
    znLb: "48.0 lb",
    znKg: "(21.77 kg)",
    alCode: "AMD-ZMA-2244",
    alLb: "24.0 lb",
    alKg: "(10.89 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '2.0"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228080284-2f60268d-6aa5-480b-bc05-b3ca0668583e.png",
    znCode: "MD-ZMA-2248",
    znLb: "310.0 lb",
    znKg: "(140.62 kg)",
    alCode: "AMD-ZMA-2248",
    alLb: "120.0 lb",
    alKg: "(54.43 kg)",
    diaIn: '48.0"',
    diaMm: "(1219 mm)",
    widIn: '5.0"',
    widMm: "(127 mm)",
    cDiaIn: '5.0"',
    cDiaMm: "(127 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228080284-2f60268d-6aa5-480b-bc05-b3ca0668583e.png",
    znCode: "MD-ZMA-3305",
    znLb: "71.5 lb",
    znKg: "(32.43 kg)",
    alCode: "AMD-ZMA-3305",
    alLb: "30 lb",
    alKg: "(13.61 kg)",
    diaIn: '30.0"',
    diaMm: "(762 mm)",
    widIn: '5.0"',
    widMm: "(127 mm)",
    cDiaIn: '3.0"',
    cDiaMm: "(76 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228080284-2f60268d-6aa5-480b-bc05-b3ca0668583e.png",
    znCode: "MD-ZMA-3365",
    znLb: "88.0 lb",
    znKg: "(39.92 kg)",
    alCode: "AMD-ZMA-3365",
    alLb: "37.0 lb",
    alKg: "(16.78 kg)",
    diaIn: '36.0"',
    diaMm: "(914 mm)",
    widIn: '5.0"',
    widMm: "(127 mm)",
    cDiaIn: '3.0"',
    cDiaMm: "(76 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228080284-2f60268d-6aa5-480b-bc05-b3ca0668583e.png",
    znCode: "MD-ZMA-4545",
    znLb: "207.0 lb",
    znKg: "(93.89 kg)",
    alCode: "AMD-ZMA-4545",
    alLb: "87.0 lb",
    alKg: "(39.46 kg)",
    diaIn: '54.5"',
    diaMm: "(1384 mm)",
    widIn: '4.5"',
    widMm: "(114 mm)",
    cDiaIn: '3.75"',
    cDiaMm: "(95 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
];

const hullBarBoltData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228083058-e286dc6a-a057-465a-8984-5d40f8f1cc88.png",
    znCode: "MD-P5B2",
    znLb: "23.5 lb",
    znKg: "(10.66 kg)",
    alCode: "AMD-P5B2",
    alLb: "10.0 lb",
    alKg: "(4.54 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.25"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '12.0"',
    dMeasureMm: "(305 mm)",
    notes:
      "SLOTTED WITH ALUMINUM OR STEEL INSERTS. PLEASE SPECIFY WHEN ORDERING.",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228083058-e286dc6a-a057-465a-8984-5d40f8f1cc88.png",
    znCode: "MD-P7B2 / ZHC-50",
    znLb: "44.5 lb",
    znKg: "(20.19 kg)",
    alCode: "AMD-P7B2 / AZHC-50",
    alLb: "19.8 lb",
    alKg: "(8.98 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '2.0"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '12.0"',
    dMeasureMm: "(305 mm)",
    notes:
      "SLOTTED WITH ALUMINUM OR STEEL INSERTS. PLEASE SPECIFY WHEN ORDERING.",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228083058-e286dc6a-a057-465a-8984-5d40f8f1cc88.png",
    znCode: "MD-ZSC-12",
    znLb: "12.0 lb",
    znKg: "(5.44 kg)",
    alCode: "AMD-ZSC-12",
    alLb: "5.0 lb",
    alKg: "(2.27 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.25"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228083058-e286dc6a-a057-465a-8984-5d40f8f1cc88.png",
    znCode: "MD-ZM-17",
    znLb: "18 lb",
    znKg: "(8.16 kg)",
    alCode: "AMD-ZM-17",
    alLb: "7.5 lb",
    alKg: "(3.4 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.125"',
    cDiaMm: "(29 mm)",
    dMeasureIn: '12.0"',
    dMeasureMm: "(305 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228083058-e286dc6a-a057-465a-8984-5d40f8f1cc88.png",
    znCode: "MD-ZM-23",
    znLb: "28 lb",
    znKg: "(12.7 kg)",
    alCode: "AMD-ZM-23",
    alLb: "12.0 lb",
    alKg: "(5.44 kg)",
    diaIn: '24.0"',
    diaMm: "(610 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1.50"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '12.0"',
    dMeasureMm: "(305 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228083916-a5f3c61d-6bd2-4893-8985-a956d46d2772.png",
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
    cDiaIn: "-",
    cDiaMm: "-",
    dMeasureIn: "-",
    dMeasureMm: "-",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084392-8823c4f6-cee5-4f22-9cfa-6fa88e0c6b52.png",
    znCode: "MD-VETUS 15",
    znLb: "2 lb",
    znKg: "(0.91 kg)",
    alCode: "AMD-VETUS 15",
    alLb: "1 lb",
    alKg: "(0.45 kg)",
    diaIn: '6.00"',
    diaMm: "(152 mm)",
    widIn: '2 1/2"',
    widMm: "(60 mm)",
    cDiaIn: '1.0"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '3.125"',
    dMeasureMm: "(79 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084747-200118bd-e073-4aa8-8aeb-0d46a9eabbc3.png",
    znCode: "MD-VETUS 25",
    znLb: "5.1 lb",
    znKg: "(2.313 kg)",
    alCode: "AMD-VETUS 25",
    alLb: "2.5 lb",
    alKg: "(1.134 kg)",
    diaIn: '9 1/2"',
    diaMm: "(241 mm)",
    widIn: '2.4"',
    widMm: "(61 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228084747-200118bd-e073-4aa8-8aeb-0d46a9eabbc3.png",
    znCode: "MD-VETUS 35",
    znLb: "10 lb",
    znKg: "(4.5 kg)",
    alCode: "AMD-VETUS 35",
    alLb: "3.85 lb",
    alKg: "(1.75 kg)",
    diaIn: '13 3/4"',
    diaMm: "(349 mm)",
    widIn: '2 7/8"',
    widMm: "(73 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '7 7/8"',
    dMeasureMm: "(200 mm)",
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
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
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
                  <th colSpan={15} className="text-center text-2xl py-1">
                    BAR ANODES - WELD ON
                  </th>
                </tr>

                {hullBarWeldData.map((item, id) => (
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
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    BAR ANODES - BOLT ON
                  </th>
                </tr>
                {hullBarBoltData.map((item, id) => (
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

export default hull;
