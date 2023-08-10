import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim2NotePic from "@/components/ChartNoDim2NotePic";
import Image from "next/image";
import Link from "next/link";

const nissanData = [
  {img: '',
  znCode: 'MD-3C7602181',
  znLb: '1.77 lb',
  znKg: '(0.8 kg)',
  alCode: 'N/A',
  alLb: 'N/A',
  alKg: '',
  note2: '55321-94900',
  note1: ''},
  
];

const nissan = () => {
  return (
    <div>
      <Hero
        heading={"nissan Anodes"}
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
                    <h1>nissan</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {nissanData.map((item, id) => (
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
                    CROSS REFERENCE / ALT NAME"
                 
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

export default nissan;
