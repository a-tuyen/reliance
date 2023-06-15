import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3NotePic from "@/components/Chart3NotePic";
import Image from "next/image";
import Link from "next/link";

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

const volvoBP = () => {
  return (
    <div>
      <Hero heading={"Volvo Penta Brass Plugs"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
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

export default volvoBP;
