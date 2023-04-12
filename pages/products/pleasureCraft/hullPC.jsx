import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
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

const hullPlateWeldData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228328490-8bd460a8-1d57-4c5f-a419-87ee27c56a87.png",
    znCode: "MD-Z2/ MD-ZHS-23 /MD-ZHS-10/ MD-ZMA-1126",
    znLb: "23.0 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-Z2/ AMD-ZHS-23 /AMD-ZHS-10/ AMD-ZMA-1126",
    alLb: "10.0 lb",
    alKg: "(4.54 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1.25"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228328490-8bd460a8-1d57-4c5f-a419-87ee27c56a87.png",
    znCode: "MD-ZHS-47",
    znLb: "45 lb",
    znKg: "(20.41 kg)",
    alCode: "AMD-ZHS-47",
    alLb: "26 lb",
    alKg: "(11.79 kg)",
    diaIn: '27.0"',
    diaMm: "(686 mm)",
    widIn: '5.0"',
    widMm: "(127 mm)",
    cDiaIn: '1.75"',
    cDiaMm: "(44 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228309334-2d71391f-7f41-4532-925a-1cc2a2d07012.png",
    znCode: "MD-661",
    znLb: "9.0 lb",
    znKg: "(4.08 kg)",
    alCode: "AMD-661",
    alLb: "3.86 lb",
    alKg: "(1 3/4 kg)",
    diaIn: '6.0"',
    diaMm: "(152 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228312824-3aee9489-ddf0-44bc-b786-49cea2d9f4fc.png",
    znCode: "MD-2431",
    znLb: "3.08 lb",
    znKg: "(1.4 kg)",
    alCode: "AMD-2431",
    alLb: "1.30 lb",
    alKg: "(3/5 kg)",
    diaIn: '4.0"',
    diaMm: "(102 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228312824-3aee9489-ddf0-44bc-b786-49cea2d9f4fc.png",
    znCode: "MD-2631",
    znLb: "4.50 lb",
    znKg: "(2.04 kg)",
    alCode: "AMD-2631",
    alLb: "1.90 lb",
    alKg: "(6/7 kg)",
    diaIn: '6.0"',
    diaMm: "(152 mm)",
    widIn: '3.0"',
    widMm: "(76 mm)",
    cDiaIn: '1"',
    cDiaMm: "(25 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228051830-67c5c6b0-7a2d-4a93-b05a-44141b81a033.png",
    znCode: "MD-Z-519",
    znLb: "35.0 lb",
    znKg: "(15.88 kg)",
    alCode: "AMD-Z-519",
    alLb: "13.46 lb",
    alKg: "(6 1/9 kg)",
    diaIn: '19.0"',
    diaMm: "(483 mm)",
    widIn: '5.0"',
    widMm: "(127 mm)",
    cDiaIn: '1 3/4"',
    cDiaMm: "(44 mm)",
    dMeasureIn: '-"',
    dMeasureMm: "(- mm)",
    notes: "BOLT HOLES CAN BE ADDED ON STRAPS AS REQUIRED",
  },
];

const hullPlateBoltData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-Z-1 / MD-ZHC-23/ MD-B-9/ MD-TH-24",
    znLb: "23.0 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-Z-1 / AMD-ZHC-23/ AMD-B-9/ AMD-TH-24",
    alLb: "9.7 lb",
    alKg: "(4.4 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1.25"',
    cDiaMm: "(32 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-ZHC-24",
    znLb: "23.0 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-ZHC-24",
    alLb: "8.52 lb",
    alKg: "(3.86 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1.5"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '6.5"',
    dMeasureMm: "(165 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-ZHC-47",
    znLb: "44.0 lb",
    znKg: "(19.96 kg)",
    alCode: "AMD-ZHC-47",
    alLb: "19.8 lb",
    alKg: "(8.98 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '2.5"',
    cDiaMm: "(64 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-H20B",
    znLb: "18.9 lb",
    znKg: "(8.57 kg)",
    alCode: "AMD-H20B",
    alLb: "8.0 lb",
    alKg: "(3.63 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1.3"',
    cDiaMm: "(33 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228321144-cb6af4bd-c143-4dec-bb77-f485d3e87161.png",
    znCode: "MD-Z-24B",
    znLb: "20.0 lb",
    znKg: "(9.07 kg)",
    alCode: "AMD-Z-24B",
    alLb: "9.0 lb",
    alKg: "(4 kg)",
    diaIn: '14.0"',
    diaMm: "(356 mm)",
    widIn: '6.5"',
    widMm: "(165 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '5.0"',
    dMeasureMm: "(127 mm)",
    notes: "SLOTTED WITH ALUMINUM INSERT",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228323266-5542f35d-e4d6-40ac-9c2c-d33960daad35.png",
    znCode: "MD-ZHC-22",
    znLb: "21.0 lb",
    znKg: "(9.53 kg)",
    alCode: "AMD-ZHC-22",
    alLb: "7.78 lb",
    alKg: "(3 1/2 kg)",
    diaIn: '17.0"',
    diaMm: "(432 mm)",
    widIn: '4.0"',
    widMm: "(102 mm)",
    cDiaIn: '2"',
    cDiaMm: "(51 mm)",
    dMeasureIn: '8.0"',
    dMeasureMm: "(203 mm)",
    notes:
      'SLOTTED WITH ALUMINUM INSERT. E - INNER DIAMETER OF 3.18" (80mm). MADE FOR "VIKING" BOATS AND MORE',
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-ZHC-24",
    znLb: "23.0 lb",
    znKg: "(10.43 kg)",
    alCode: "AMD-ZHC-24",
    alLb: "8.52 lb",
    alKg: "(3 6/7 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    dMeasureIn: '6.5"',
    dMeasureMm: "(165 mm)",
    notes: "",
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-ZHC-42",
    znLb: "42.0 lb",
    znKg: "(19.05 kg)",
    alCode: "AMD-ZHC-42",
    alLb: "15.5 lb",
    alKg: "(7 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: 'MOUNTING HOLES ARE ROUND NOT SLOTTED. 5/8" - 6" C/C',
  },
  {
    img: "https://user-images.githubusercontent.com/77664153/228302018-5540aba7-127d-41c1-a831-e446f233a185.png",
    znCode: "MD-ZHC-44",
    znLb: "44.0 lb",
    znKg: "(19.96 kg)",
    alCode: "AMD-ZHC-44",
    alLb: "16.3 lb",
    alKg: "(7 2/5 kg)",
    diaIn: '12.0"',
    diaMm: "(305 mm)",
    widIn: '6.0"',
    widMm: "(152 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
    dMeasureIn: '6.0"',
    dMeasureMm: "(152 mm)",
    notes: 'SLOTTED WITH ALUMINUM INSERT. 5/8" TO 1 1/4"',
  },
];

const hullPC = () => {
  return (
    <div>
      <Hero
        heading={"Hull Anodes"}
        message={
          "These plate and streamlined bolt-on anodes are used to protect the hull and other areas of pleasure craft subject to galvanic corrosion."
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
                <tr>
                  <th colSpan={15} className="text-center text-2xl py-1">
                    PLATE ANODES - WELD ON
                  </th>
                </tr>
                {hullPlateWeldData.map((item, id) => (
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
                    PLATE ANODES - BOLT ON
                  </th>
                </tr>
                {hullPlateBoltData.map((item, id) => (
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

export default hullPC;
