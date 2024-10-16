import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim2NotePic from "@/components/ChartNoDim2NotePic";
import Image from "next/image";
import Link from "next/link";

const omcData = [
  //0
  {
    img: "https://user-images.githubusercontent.com/77664153/242035185-27a1544d-27b5-46e5-9a0e-b4d17d93801f.png",
    znCode: "MD-5031705",
    znLb: "0.04 lb",
    znKg: "(0.02 kg)",
    alCode: "AMD-5031705",
    alLb: "0.02 lb",
    alKg: "(0.01 kg)",
    note1: "0.75",
    note2: "1/4-20 UNC",
  },
  //1
  {
    img: "https://user-images.githubusercontent.com/77664153/242034457-196fe390-d2e1-4041-928c-6fd52bcc8269.png",
    znCode: "MD-367",
    znLb: "0.97 lb",
    znKg: "(0.44 kg)",
    alCode: "AMD-367",
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    note1: "7.625",
    note2: "",
  },
  //2
  {
    img: "https://user-images.githubusercontent.com/77664153/242034482-ffdab9a3-91df-4c30-9ad3-c66ac1c3ffe1.png",
    znCode: "MD-123009",
    znLb: "0.15 lb",
    znKg: "(0.07 kg)",
    alCode: "AMD-123009",
    alLb: "0.06 lb",
    alKg: "(0.03 kg)",
    note1: "Threaded",
    note2: "10-24 UNC",
  },
  //3
  {
    img: "https://user-images.githubusercontent.com/77664153/242034482-ffdab9a3-91df-4c30-9ad3-c66ac1c3ffe1.png",
    znCode: "MD-327606",
    znLb: "0.15 lb",
    znKg: "(0.07 kg)",
    alCode: "AMD-327606",
    alLb: "0.06 lb",
    alKg: "(0.03 kg)",
    note1: "UNTHREADED",
    note2: "",
  },
  //4
  {
    img: "https://user-images.githubusercontent.com/77664153/242034509-fce4ddb1-5033-4bd1-bcb5-d604b7c95201.png",
    znCode: "MD-393023",
    znLb: "0.44 lb",
    znKg: "(0.2 kg)",
    alCode: "AMD-393023",
    alLb: "0.17 lb",
    alKg: "(0.08 kg)",
    note1: "1.5",
    note2: "",
  },
  //5
  {
    img: "https://user-images.githubusercontent.com/77664153/242034531-7434722d-7a42-4516-a895-125f6e72df14.png",
    znCode: "MD-398331",
    znLb: "0.71 lb",
    znKg: "(0.32 kg)",
    alCode: "AMD-398331",
    alLb: "0.28 lb",
    alKg: "(0.13 kg)",
    note1: "2.25",
    note2: "",
  },
  //6
  {
    img: "https://user-images.githubusercontent.com/77664153/242034559-2bc237ba-d70e-4e75-ab6e-5bb530a8b47c.png",
    znCode: "MD-392462",
    znLb: "1.33 lb",
    znKg: "(0.6 kg)",
    alCode: "AMD-392462",
    alLb: "0.52 lb",
    alKg: "(0.24 kg)",
    note1: "",
    note2: "",
  },
  //7
  {
    img: "https://user-images.githubusercontent.com/77664153/242034588-9223203c-7774-40b6-9328-faa8bdaf1b01.png",
    znCode: "MD-980756",
    znLb: "2 lb",
    znKg: "(0.91 kg)",
    alCode: "AMD-980756",
    alLb: "0.78 lb",
    alKg: "(0.35 kg)",
    note1: "",
    note2: "",
  },
  //8
  {
    img: "https://user-images.githubusercontent.com/77664153/242034614-b6634759-6527-42f3-b16a-d7e814ad0b75.png",
    znCode: "MD-982277",
    znLb: "1.67 lb",
    znKg: "(0.76 kg)",
    alCode: "AMD-982277",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    note1: "",
    note2: "",
  },
  //9
  {
    img: "https://user-images.githubusercontent.com/77664153/242034683-3edef350-b788-49e4-8f66-a861a4c88f43.png",
    znCode: "MD-982438",
    znLb: "2.18 lb",
    znKg: "(0.99 kg)",
    alCode: "AMD-982438",
    alLb: "0.85 lb",
    alKg: "(0.39 kg)",
    note1: "",
    note2: "",
  },
  //10
  {
    img: "https://user-images.githubusercontent.com/77664153/242034758-2e193582-14f3-4f02-83ed-cdbab0d21bbc.png",
    znCode: "MD-392123",
    znLb: "1.67 lb",
    znKg: "(0.76 kg)",
    alCode: "AMD-392123",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    note1: "",
    note2: "",
  },
  //11
  {
    img: "https://user-images.githubusercontent.com/77664153/242034818-a8db65ad-134a-4ca7-9aca-2371866fd0ca.png",
    znCode: "MD-984513",
    znLb: "1.99 lb",
    znKg: "(0.9 kg)",
    alCode: "AMD-984513",
    alLb: "0.78 lb",
    alKg: "(0.35 kg)",
    note1: "COBRA",
    note2: "1/4-20 UNC",
  },
  //12
  {
    img: "https://user-images.githubusercontent.com/77664153/242034859-3ee25b50-9a76-4469-99be-5dbf5825e446.png",
    znCode: "MD-984547",
    znLb: "2.04 lb",
    znKg: "(0.93 kg)",
    alCode: "AMD-984547",
    alLb: "0.8 lb",
    alKg: "(0.36 kg)",
    note1: "COBRA",
    note2: "",
  },
  //13
  {
    img: "https://user-images.githubusercontent.com/77664153/242034915-62a75541-6559-4b7b-8413-23da4f392d8b.png",
    znCode: "MD-983952",
    znLb: "2.44 lb",
    znKg: "(1.11 kg)",
    alCode: "AMD-983952",
    alLb: "0.95 lb",
    alKg: "(0.43 kg)",
    note1: "COBRA",
    note2: "",
  },
  //14
  {
    img: "https://user-images.githubusercontent.com/77664153/242034943-a3ca244b-839b-43ce-bc1c-b409e25a80b3.png",
    znCode: "MD-983494",
    znLb: "1.41 lb",
    znKg: "(0.64 kg)",
    alCode: "AMD-983494",
    alLb: "0.55 lb",
    alKg: "(0.25 kg)",
    note1: "COBRA",
    note2: "1/4-20 UNC",
  },
  //15
  {
    img: "https://user-images.githubusercontent.com/77664153/242034990-9018609f-7005-4701-8373-becfdd8f6cce.png",
    znCode: "MD-397768",
    znLb: "0.65 lb",
    znKg: "(0.29 kg)",
    alCode: "AMD-397768",
    alLb: "0.25 lb",
    alKg: "(0.11 kg)",
    note1: "",
    note2: "",
  },
  //16
  {
    img: "https://user-images.githubusercontent.com/77664153/242098073-00c1b050-f5c6-45c4-ae49-a9e8ab4801e2.png",
    znCode: "MD-395780",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMD-395780",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    note1: "",
    note2: "",
  },
  //17
  {
    img: "https://user-images.githubusercontent.com/77664153/242035037-c7581d05-3e57-42ae-a8fd-dd895ebd68b9.png",
    znCode: "MD-C983191",
    znLb: "2.00 lb",
    znKg: "(0.91 kg)",
    alCode: "AMD-C983191",
    alLb: "0.78 lb",
    alKg: "(0.35 kg)",
    note1: "SEA DRIVE",
    note2: "",
  },
  //18
  {
    img: "https://user-images.githubusercontent.com/77664153/242035071-51c15d0f-d9b3-47c1-bf74-ffed16b8c186.png",
    znCode: "MD-C389999",
    znLb: "0.40 lb",
    znKg: "(0.18 kg)",
    alCode: "AMD-C389999",
    alLb: "0.16 lb",
    alKg: "(0.07 kg)",
    note1: "SAIL DRIVE",
    note2: "1/4-20 UNC",
  },
  //19
  {
    img: "https://user-images.githubusercontent.com/77664153/242035132-74518ea8-fa4e-44a2-9ab3-17c3f88e708c.png",
    znCode: "MD-431708",
    znLb: "0.67 lb",
    znKg: "(0.3 kg)",
    alCode: "AMD-431708",
    alLb: "0.26 lb",
    alKg: "(0.12 kg)",
    note1: "",
    note2: "",
  },
  //20
  {
    img: "https://user-images.githubusercontent.com/77664153/242035220-e242fd8d-f4b8-4a9e-9fae-47cd260a8655.png",
    znCode: "MD-398873",
    znLb: "0.33 lb",
    znKg: "(0.15 kg)",
    alCode: "AMD-398873",
    alLb: "0.13 lb",
    alKg: "(0.06 kg)",
    note1: "",
    note2: "",
  },
  //21
  {
    img: "https://user-images.githubusercontent.com/77664153/242087327-e4eaa810-3edf-41bb-88bf-0cd46fdef271.png",
    znCode: "MD-433580",
    znLb: "1.59 lb",
    znKg: "(0.72 kg)",
    alCode: "AMD-433580",
    alLb: "0.62 lb",
    alKg: "(0.28 kg)",
    note1: "",
    note2: "5/16-18 UNC",
  },
];

const omc = () => {
  return (
    <div>
      <Hero
        heading={"BRP - OMC / JOHNSON EVINRUDE Anodes"}
        message={
          "Carefully designed by our skilled technicians to fit like an OEM part"
        }
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>BRP - OMC / JOHNSON EVINRUDE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {omcData.map((item, id) => (
                  <ChartNoDim2NotePic
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
                    headerNotes="
                    HORSEPOWER"
                    headerNotes2="
                    THREAD SIZE"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th className="py-8">
                    <h1>BRP - OMC / JOHNSON EVINRUDE ANODE KITS</h1>
                    <p>Available in ZINC and ALUMINUM</p>
                    <p className="pt-2">Hardware Included</p>
                  </th>
                </tr>

                <tr>
                  <th className="bg-lightMain text-black py-2">
                    BRP OMC STRINGER KIT
                  </th>
                </tr>
                <tr>
                  <td className="bg-white ">
                    <div className="flex flex-col md:flex-row md:justify-evenly">
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[14].znCode}</p>
                        <Image src={omcData[14].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[4].znCode}</p>
                        <Image src={omcData[4].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[19].znCode}</p>
                        <Image src={omcData[19].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-lightMain text-black py-2">
                    BRP OMC COBRA KIT
                  </th>
                </tr>
                <tr>
                  <td className="bg-white ">
                    <div className="flex flex-col md:flex-row md:justify-evenly">
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[11].znCode}</p>
                        <Image src={omcData[11].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[4].znCode}</p>
                        <Image src={omcData[4].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[19].znCode}</p>
                        <Image src={omcData[19].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-lightMain text-black py-2">
                    BRP OMC 50-75HP KIT
                  </th>
                </tr>
                <tr>
                  <td className="bg-white ">
                    <div className="flex flex-col md:flex-row md:justify-evenly">
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[4].znCode}</p>
                        <Image src={omcData[4].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[6].znCode}</p>
                        <Image src={omcData[6].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-lightMain text-black py-2">
                    BRP OMC V4-V6 KIT
                  </th>
                </tr>
                <tr>
                  <td className="bg-white ">
                    <div className="flex flex-col md:flex-row md:justify-evenly">
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[4].znCode}</p>
                        <Image src={omcData[4].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                      <div className="flex flex-col items-center pb-2">
                        <p className="py-4">{omcData[10].znCode}</p>
                        <Image src={omcData[10].img} width={200} height={100} />
                        <p className="py-4">1 each</p>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

          </main>
        </article>
      </div>
    </div>
  );
};

export default omc;
