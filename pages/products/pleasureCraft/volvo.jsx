import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3DimPicNote from "@/components/Chart3DimPicNote";
import Chart2DimPicNote from "@/components/Chart2DimPicNote";
import Chart3NotePic from "@/components/Chart3NotePic";
import Image from "next/image";

const volvoData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/236573202-d4f2fea1-621e-4661-9d17-c7a90cf3d8a7.png",
    znCode: "MDV-15",
    znLb: "0.36 lb",
    znKg: "(0.16 kg)",
    alCode: "AMDV-15",
    alLb: "0.14 lb",
    alKg: "(0.06 kg)",
    diaIn: '3 7/8"',
    diaMm: "(98 mm)",
    widIn: '7/16"',
    widMm: "(11 mm)",
    cDiaIn: '2"',
    cDiaMm: "(51 mm)",
    notes: "ENGINE MODEL: 100",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236573202-d4f2fea1-621e-4661-9d17-c7a90cf3d8a7.png",
    znCode: "MDV-16",
    znLb: "0.43 lb",
    znKg: "(0.2 kg)",
    alCode: "AMDV-16",
    alLb: "0.17 lb",
    alKg: "(0.08 kg)",
    diaIn: '4 1/8"',
    diaMm: "(105 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '2 1/4"',
    cDiaMm: "(57 mm)",
    notes: "ENGINE MODEL: 200",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236573202-d4f2fea1-621e-4661-9d17-c7a90cf3d8a7.png",
    znCode: "MDV-17",
    znLb: "0.63 lb",
    znKg: "(0.29 kg)",
    alCode: "AMDV-17",
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '3/8"',
    widMm: "(10 mm)",
    cDiaIn: '2 1/4"',
    cDiaMm: "(57 mm)",
    notes: "ENGINE MODEL: 250-270",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236894259-33fe6533-4b67-4483-bddf-f30d88b67800.png",
    znCode: "MDV-18 / MD-875815-3",
    znLb: "1.56 lb",
    znKg: "(0.71 kg)",
    alCode: "AMDV-18 / AMD-875815-3",
    alLb: "0.61 lb",
    alKg: "(0.28 kg)",
    diaIn: '4 3/4"',
    diaMm: "(121 mm)",
    widIn: '1 3/8"',
    widMm: "(35 mm)",
    cDiaIn: '2 3/8"',
    cDiaMm: "(60 mm)",
    notes: "ENGINE MODEL: 280-290",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895700-c10a94c1-e6fe-4238-ae5c-16168daa6dd3.png",
    znCode: "MD-358407",
    znLb: "3.54 lb",
    znKg: "(1.61 kg)",
    alCode: "AMD-358407",
    alLb: "1.38 lb",
    alKg: "(0.63 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236572632-e1856dfc-3e1c-4cef-a785-1a02ba8f58e6.png",
    znCode: "MD-823661",
    znLb: "0.32 lb",
    znKg: "(0.15 kg)",
    alCode: "AMD-823661",
    alLb: "0.13 lb",
    alKg: "(0.06 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "ENGINE MODEL: DIESEL",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236886991-463d4ee4-bf91-471f-9bce-3a5bc8183d93.png",
    znCode: "MD-832598",
    znLb: "1.88 lb",
    znKg: "(0.85 kg)",
    alCode: "AMD-832598",
    alLb: "0.73 lb",
    alKg: "(0.33 kg)",
    diaIn: '7 3/8"',
    diaMm: "(187 mm)",
    widIn: '7/8"',
    widMm: "(22 mm)",
    cDiaIn: '5 3/4"',
    cDiaMm: "(146 mm)",
    notes: "ENGINE MODEL: 250-270",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236894259-33fe6533-4b67-4483-bddf-f30d88b67800.png",
    znCode: "MD-851983",
    znLb: "1.11 lb",
    znKg: "(0.5 kg)",
    alCode: "AMD-851983",
    alLb: "0.43 lb",
    alKg: "(0.2 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '1 1/16"',
    widMm: "(27 mm)",
    cDiaIn: '3 11/16"',
    cDiaMm: "(94 mm)",
    notes: "ENGINE MODEL: 120F SAIL DRIVE",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236887284-c412e638-9fde-405e-b56b-4e4632c4f654.png",
    znCode: "MD-852835",
    znLb: "1.67 lb",
    znKg: "(0.76 kg)",
    alCode: "AMD-852835",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    diaIn: '5 1/4"',
    diaMm: "(133 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    cDiaIn: '3 3/8"',
    cDiaMm: "(86 mm)",
    notes: "ENGINE MODEL: 290",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236894259-33fe6533-4b67-4483-bddf-f30d88b67800.png",
    znCode: "MD-875812",
    znLb: "1.42 lb",
    znKg: "(0.64 kg)",
    alCode: "AMD-875812",
    alLb: "0.55 lb",
    alKg: "(0.25 kg)",
    diaIn: '4 1/4"',
    diaMm: "(108 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
    notes: "ENGINE MODEL: SAIL DRIVE",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236894259-33fe6533-4b67-4483-bddf-f30d88b67800.png",
    znCode: "MD-875821",
    znLb: "1.29 lb",
    znKg: "(0.59 kg)",
    alCode: "AMD-875821",
    alLb: "0.5 lb",
    alKg: "(0.23 kg)",
    diaIn: '4 3/8"',
    diaMm: "(111 mm)",
    widIn: '1 3/8"',
    widMm: "(35 mm)",
    cDiaIn: '3 3/8"',
    cDiaMm: "(86 mm)",
    notes: "ENGINE MODEL: 290",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236886917-05494dec-d38a-47f9-adfe-7dd1d3e12b02.png",
    znCode: "MD-838929",
    znLb: "0.09 lb",
    znKg: "(0.04 kg)",
    alCode: "AMD-838929",
    alLb: "0.04 lb",
    alKg: "(0.02 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "M8 x 1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895924-26ca1610-4f1c-46b7-83c1-15e8b3520456.png",
    znCode: "MD-3588745",
    znLb: "1.90 lb",
    znKg: "(0.86 kg)",
    alCode: "AMD-3588745",
    alLb: "0.74 lb",
    alKg: "(0.34 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '1 1/4"',
    widMm: "(32 mm)",
    cDiaIn: '3 3/8"',
    cDiaMm: "(86 mm)",
    notes: "ENGINE ANODE",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236947172-5cbbe448-efe2-4c80-8e64-4b80e48e7e00.png",
    znCode: "MD-3593881",
    znLb: "1.60 lb",
    znKg: "(0.73 kg)",
    alCode: "AMD-3593881",
    alLb: "0.63 lb",
    alKg: "(0.29 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236896056-0d5a2433-6814-4443-8eb1-1969bb597c7e.png",
    znCode: "MD-3841427",
    znLb: "2.40 lb",
    znKg: "(1.09 kg)",
    alCode: "AMD-3841427",
    alLb: "1.04 lb",
    alKg: "(0.47 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '1 3/16"',
    cDiaMm: "(30 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895886-1dee42c9-a51f-4270-90ad-2e03ac5a6ae5.png",
    znCode: "MD-3854130",
    znLb: "2.42 lb",
    znKg: "(1.1 kg)",
    alCode: "AMD-3854130",
    alLb: "0.95 lb",
    alKg: "(0.43 kg)",
    diaIn: '3 7/10"',
    diaMm: "(94 mm)",
    widIn: '3 7/10"',
    widMm: "(94 mm)",
    cDiaIn: '1 1/2"',
    cDiaMm: "(38 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236894974-27aeeb64-6119-47d6-a76a-34b0791ce7fe.png",
    znCode: "MD-3855411",
    znLb: "2.33 lb",
    znKg: "(1.06 kg)",
    alCode: "AMD-3855411",
    alLb: "0.91 lb",
    alKg: "(0.41 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "1/4-20 UNC",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895982-6c991cba-8367-4851-9a0a-4826fdf82e5c.png",
    znCode: "MD-3863206",
    znLb: "1.57 lb",
    znKg: "(0.71 kg)",
    alCode: "AMD-3863206",
    alLb: "0.77 lb",
    alKg: "(0.35 kg)",
    diaIn: '5 1/4"',
    diaMm: "(133 mm)",
    widIn: '3 1/10"',
    widMm: "(79 mm)",
    cDiaIn: '1 3/8"',
    cDiaMm: "(35 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236947685-f076c86d-be10-428b-8140-ea1f03579e23.png",
    znCode: "MD-3858399",
    znLb: "0.60 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-3858399",
    alLb: "0.3 lb",
    alKg: "(0.14 kg)",
    diaIn: '-"',
    diaMm: "(- mm)",
    widIn: '-"',
    widMm: "(- mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236896110-0a1b666f-898a-45a8-9fa0-1d82b29e5d1f.png",
    znCode: "MD-3883728",
    znLb: "2.89 lb",
    znKg: "(1.31 kg)",
    alCode: "AMD-3883728",
    alLb: "1.1 lb",
    alKg: "(0.5 kg)",
    diaIn: '6"',
    diaMm: "(152 mm)",
    widIn: '3 1/2"',
    widMm: "(89 mm)",
    cDiaIn: '1 1/10"',
    cDiaMm: "(28 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236887520-e00395da-6131-4e01-aa73-ad42fba40e6e.png",
    znCode: "MD-872139",
    znLb: "1.43 lb",
    znKg: "(0.65 kg)",
    alCode: "AMD-872139",
    alLb: "0.63 lb",
    alKg: "(0.29 kg)",
    diaIn: '5 1/4"',
    diaMm: "(133 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '1 1/8"',
    cDiaMm: "(29 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236944580-d5774d7b-5359-4849-9f25-2a747c7779f9.png",
    znCode: "MD-873395",
    znLb: "0.80 lb",
    znKg: "(0.36 kg)",
    alCode: "AMD-873395",
    alLb: "0.28 lb",
    alKg: "(0.13 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '1 5/8"',
    widMm: "(41 mm)",
    cDiaIn: '1 1/4"',
    cDiaMm: "(32 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895831-68cbcf78-56ba-40a6-86d4-24c5db3e314f.png",
    znCode: "MD-872793",
    znLb: "0.22 lb",
    znKg: "(0.1 kg)",
    alCode: "AMD-872793",
    alLb: "0.09 lb",
    alKg: "(0.04 kg)",
    diaIn: '5 1/4"',
    diaMm: "(133 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '1 1/8"',
    cDiaMm: "(29 mm)",
    notes: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895760-8734c927-d9cd-4e2d-b676-b284beb54aab.png",
    znCode: "MD-22651246",
    znLb: "3.40 lb",
    znKg: "(1.54 kg)",
    alCode: "N/A",
    alLb: "- lb",
    alKg: "(- kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '1 3/4"',
    widMm: "(44 mm)",
    cDiaIn: '-"',
    cDiaMm: "(- mm)",
    notes: "ENGINE MODEL: SAIL DRIVE",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895630-10460e8f-2f63-4288-9034-f6f2d9c26ebd.png",
    znCode: "MD-40005206 / MD-21174476",
    znLb: "10 lb",
    znKg: "(4.54 kg)",
    alCode: "AMD-40005206 / AMD-21174476",
    alLb: "3.91 lb",
    alKg: "(1.77 kg)",
    diaIn: '14"',
    diaMm: "(356 mm)",
    widIn: '3 8/25"',
    widMm: "(84 mm)",
    cDiaIn: '1 9/50"',
    cDiaMm: "(30 mm)",
    notes: '5.45" C/C',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236895630-10460e8f-2f63-4288-9034-f6f2d9c26ebd.png",
    znCode: "MD-40005875",
    znLb: "7.6 lb",
    znKg: "(3.45 kg)",
    alCode: "AMD-40005875",
    alLb: "3.4 lb",
    alKg: "(1.54 kg)",
    diaIn: '10 1/2"',
    diaMm: "(267 mm)",
    widIn: '3 8/25"',
    widMm: "(84 mm)",
    cDiaIn: '1 9/50"',
    cDiaMm: "(30 mm)",
    notes: '5.90" C/C',
  },
];

const volvoEngineData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/245292212-1b0d6b7c-19c8-4bea-b8ef-a620c7f62218.png",
    znCode: "MD-838929",
    znLb: "0.09 lb",
    znKg: "(0.04 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '11/16"',
    widMm: "(17 mm)",
    notes: "M8 ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/245292219-bdbb9793-c35c-49bf-9bd4-83667ce314bf.png",
    znCode: "MD-823661",
    znLb: "0.32 lb",
    znKg: "(0.15 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '1"',
    widMm: "(25 mm)",
    notes: "3/8-16 UNC ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/245292229-b94789bb-69c8-4fe7-8992-536a0cdbe3f9.png",
    znCode: "MD-3858995",
    znLb: "0.14 lb",
    znKg: "(0.06 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "(0 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '1/2"',
    widMm: "(13 mm)",
    notes: "3/8-16 UNC ",
  },
];

const volvoBPData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/246209052-879de792-5dec-4eec-9065-b388eeba5dad.png",
    znCode: "MALE PLUG FOR MD-838929",
    znLb: "0.09 lb",
    znKg: "(0.04 kg)",
    alCode: "",
    alLb: " lb",
    alKg: "( kg)",
    note1: '1/2" NPT"',
    note2: 'STUD THREAD M8"',
    note3: "13mm ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/246209084-7b50603a-18f3-420c-9efc-0126af9670d5.png",
    znCode: "FEMALE PLUG FOR MD-823661",
    znLb: "0.32 lb",
    znKg: "(0.15 kg)",
    alCode: "",
    alLb: " lb",
    alKg: "( kg)",
    note1: '1/2" NPT"',
    note2: 'INTERNAL THREAD 7/16" UNC"',
    note3: "13mm ",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/246209111-ac817e6e-ddd4-4201-9703-7fbf127b69fd.png",
    znCode: "BRASS PLUG FOR MD-823661",
    znLb: "0.14 lb",
    znKg: "(0.06 kg)",
    alCode: "",
    alLb: " lb",
    alKg: "( kg)",
    note1: '1" NPT"',
    note2: 'INTERNAL THREAD 3/8" UNC"',
    note3: '3/4" ',
  },
];

const volvo = () => {
  return (
    <div>
      <Hero heading={"Volvo Penta Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={7} className="py-8">
                    <h1>VOLVO</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                {volvoData.map((item, id) => (
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
                    aDim="DIAMETER"
                    bDim="THICKNESS"
                    cDim="HOLE DIAMETER"
                    notesHeading="NOTES"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>VOLVO PENTA DIESEL ENGINE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {volvoEngineData.map((item, id) => (
                  <Chart2DimPicNote
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
                    aDim="LENGTH"
                    bDim="DIAMETER"
                    notesHeading="C-PLUG THREAD INTERVAL"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>Volvo Penta Brass Plugs</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={4}>NOMINAL WEIGHT</th>
                  <th colSpan={2}>NOMINAL DIMENSIONS</th>
                </tr>
                {volvoBPData.map((item, id) => (
                  <Chart3NotePic
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
                    note3={item.note3}
                    headerNotes="SIZE"
                    headerNotes2="NOTES"
                    headerNotes3="WRENCH"
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

export default volvo;
