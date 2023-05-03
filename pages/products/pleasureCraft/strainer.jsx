import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDimNotePic from "@/components/ChartNoDimNotePic";
import Image from "next/image";
import Link from "next/link";

const strainerData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/236061676-6ead2638-f6e8-4de4-8599-534dfa0123eb.png",
    znCode: "SZ-1",
    znLb: "0.55 lb",
    znKg: "(0.25 kg)",
    alCode: "ASZ1",
    alLb: "0.21 lb",
    alKg: "(0.1 kg)",
    notes: '1 1/2" (38 mm) x 3 7/8" (98 mm) x 1/2" (13 mm)',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/236061678-b1a50852-f023-4b77-8d5f-9d8ef6dcf8b5.png",
    znCode: "DOKA (656934)",
    znLb: "0.33 lb",
    znKg: "(0.15 kg)",
    alCode: "ADOKA (656934)",
    alLb: "0.13 lb",
    alKg: "(0.06 kg)",
    notes: '1 1/4" (32 mm) x 3 3/8" (86 mm) x 7/16" (11 mm)',
  },
];

const strainer = () => {
  return (
    <div>
      <Hero heading={"Sea Strainer Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>SEA STRAINER</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {strainerData.map((item, id) => (
                  <ChartNoDimNotePic
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    notes={item.notes}
                    headerNotes="DIMENSIONS"
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

export default strainer;
