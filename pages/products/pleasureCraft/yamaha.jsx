import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim2NotePic from "@/components/ChartNoDim2NotePic";
import Image from "next/image";
import Link from "next/link";

const yamahaData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/241809784-bdba9e92-e0d4-4a03-bce7-ecf04f684273.png",
    znCode: "MD-6E5-45251-00",
    znLb: "0.30 lb",
    znKg: "(0.14 kg)",
    alCode: "AMD-6E5-45251-00",
    alLb: "0.12 lb",
    alKg: "(0.05 kg)",
    note1: "115-120",
    note2: "M10 x 1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809791-377954cc-7a94-41dc-941f-0e42e88e036b.png",
    znCode: "MD-6K1-45371-00",
    znLb: "0.89 lb",
    znKg: "(0.4 kg)",
    alCode: "AMD-6K1-45371-00",
    alLb: "0.35 lb",
    alKg: "(0.16 kg)",
    note1: "90-200",
    note2: "M10 x 1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809791-377954cc-7a94-41dc-941f-0e42e88e036b.png",
    znCode: "MD-6E5-45371-01",
    znLb: "0.94 lb",
    znKg: "(0.43 kg)",
    alCode: "AMD-6E5-45371-01",
    alLb: "0.37 lb",
    alKg: "(0.17 kg)",
    note1: "90-200",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809806-4830b132-9c17-49ba-a9d5-7e12b9f1eabe.png",
    znCode: "MD-688-45371-02",
    znLb: "0.95 lb",
    znKg: "(0.43 kg)",
    alCode: "AMD-688-45371-02",
    alLb: "0.37 lb",
    alKg: "(0.17 kg)",
    note1: "40-90",
    note2: "0",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809812-99136a3e-be33-4b4c-9f33-9265f3efcb71.png",
    znCode: "MD-6J9-45371-00",
    znLb: "1.07 lb",
    znKg: "(0.49 kg)",
    alCode: "AMD-6J9-45371-00",
    alLb: "0.42 lb",
    alKg: "(0.19 kg)",
    note1: "150-200",
    note2: "0",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809819-ff406bcb-40a5-4616-9dd1-9c76107cfcc3.png",
    znCode: "MD-688-45251-01",
    znLb: "0.07 lb",
    znKg: "(0.03 kg)",
    alCode: "AMD-688-45251-01",
    alLb: "0.03 lb",
    alKg: "(0.01 kg)",
    note1: "40-90",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809828-81519fda-ba31-41a7-84b0-b65ecf0f7ec4.png",
    znCode: "MD-664-45371-01",
    znLb: "0.48 lb",
    znKg: "(0.22 kg)",
    alCode: "AMD-664-45371-01",
    alLb: "0.19 lb",
    alKg: "(0.09 kg)",
    note1: "20-50",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809834-ee9bb566-721a-445c-be08-aa0596fe44af.png",
    znCode: "MD-6H1-45251-02",
    znLb: "1.05 lb",
    znKg: "(0.48 kg)",
    alCode: "AMD-6H1-45251-02",
    alLb: "0.41 lb",
    alKg: "(0.19 kg)",
    note1: "40-90",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809849-ec3b32be-d880-45f5-a2de-277321e4a817.png",
    znCode: "MD-6G5-4525-01",
    znLb: "1.95 lb",
    znKg: "(0.88 kg)",
    alCode: "AMD-6G5-4525-01",
    alLb: "0.76 lb",
    alKg: "(0.34 kg)",
    note1: "115-300",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809859-ef4e80f0-9bb7-410c-b827-52ebde12723f.png",
    znCode: "MD-6E0-45251-11",
    znLb: "0.20 lb",
    znKg: "(0.09 kg)",
    alCode: "AMD-6E0-45251-11",
    alLb: "0.08 lb",
    alKg: "(0.04 kg)",
    note1: "",
    note2: "M6 x 1.00",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809866-2305e295-5a27-497c-a709-ee26ad460d20.png",
    znCode: "MD-61N-45251-01",
    znLb: "0.60 lb",
    znKg: "(0.27 kg)",
    alCode: "AMD-61N-45251-01",
    alLb: "0.23 lb",
    alKg: "(0.1 kg)",
    note1: "45163",
    note2: "",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809870-be6930d3-b448-4bfd-98c4-8bf4ec4d9481.png",
    znCode: "MD-61A-45371-00",
    znLb: "1.45 lb",
    znKg: "(0.66 kg)",
    alCode: "AMD-61A-45371-00",
    alLb: "0.57 lb",
    alKg: "(0.26 kg)",
    note1: "200-250",
    note2: "M10 x 1.25",
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/241809885-ac1f822a-6874-4721-b84e-1998d65fdd87.png",
    znCode: "MD-6AW-45251-00",
    znLb: "1.46 lb",
    znKg: "(0.66 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "( kg)",
    note1: "200-350",
    note2: "M10 x 1.25",
  },
];

const yamaha = () => {
  return (
    <div>
      <Hero
        heading={"yamaha Anodes"}
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
                    <h1>yamaha</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {yamahaData.map((item, id) => (
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
          </main>
        </article>
      </div>
    </div>
  );
};

export default yamaha;
