import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3NotePic from "@/components/Chart3NotePic";
import Image from "next/image";
import Link from "next/link";

const bntData = [
  {img: 'https://user-images.githubusercontent.com/77664153/246261676-262742e7-f41d-4620-b7c6-28f7de767f19.png',
  znCode: 'BNT-1',
  znLb: '0.44 lb',
  znKg: '(0.2 kg)',
  alCode: 'ABNT-1',
  alLb: '0.17 lb',
  alKg: '(0.08 kg)',
  note1: '3 3/4" (95 mm) x 1/2" (13mm)',
  note2: '1 1/2" (38mm)"',
  note3: '2 EA - 1/4-20 UNC x 1 1/4" '},
  
];

const bnt = () => {
  return (
    <div>
      <Hero heading={"BENNET ANODES "} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>BENNET</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {bntData.map((item, id) => (
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
                    headerNotes="DIMENSIONS"
                    headerNotes2="C/C"
                    headerNotes3="HARDWARE NEEDED"
                  />
                ))}
              </tbody>
            </table>

            <p className="text-center pb-4">
              Also available as a kit which includes 2ea x BNT-1 anodes and hardware.
            </p>

          </main>
        </article>
      </div>
    </div>
  );
};

export default bnt;
