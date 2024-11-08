import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3NotePic from "@/components/Chart3NotePic";
import ChartNoDimNotePic from "@/components/ChartNoDimNotePic";
import Image from "next/image";
import Link from "next/link";

const bntData = [
  {
    img: '/anodes/BNT-kit.png',
    znCode: 'BNT-1 KIT',
    znLb: '0.44 lb',
    znKg: '(0.2 kg)',
    alCode: 'ABNT-1 KIT',
    alLb: '0.17 lb',
    alKg: '(0.08 kg)',
    note1: '3 3/4" (95 mm) x 1/2" (13mm)',
    note2: '1 1/2" (38mm)"',
    note3: '2 Anodes and hardware '
  },

];

const ff2Data = [
  {
    img: '/anodes/FF2-IMG.png',
    znCode: 'FF-2 PROP HUB ANODE KIT',
    znLb: '1.0 lb',
    znKg: '(0.45 kg)',
    alCode: 'AFF-2 PROP HUB ANODE KIT',
    alLb: '0.45 lb',
    alKg: '(0.20 kg)',
    notes: '2 Anodes and hardware '
  },

];

const zeusPodData = [
  {
    img: '/anodes/ZeusPod-IMG.png',
    znCode: 'ZEUS POD KIT',
    znLb: '4.6 lb',
    znKg: '(2.09 kg)',
    alCode: 'A-ZEUS POD KIT',
    alLb: '2 lb',
    alKg: '(0.91 kg)',
    note1: '6 1-4" (160 mm) x 5 3/4" (145mm)',
    note2: '1/2" (13mm)"',
    note3: '2 Anodes, no hardware '
  },

];

const indivKits = () => {
  return (
    <div>
      <Hero heading={"INDIVIDUAL ANODE KITS "} message={""} img={"bg-img2"} />
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
                      ANODE KIT SPECIFICATIONS
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
                    headerNotes3="WHAT'S INCLUDED"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>FF-2 PROP HUB</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE KIT SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {ff2Data.map((item, id) => (
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
                    headerNotes="WHAT'S INCLUDED"
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>ZEUS POD</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE KIT SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr>
                {zeusPodData.map((item, id) => (
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
                    headerNotes="DIMENSIONS ( L x W )"
                    headerNotes2="THICKNESS"
                    headerNotes3="WHAT'S INCLUDED"
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

export default indivKits;
