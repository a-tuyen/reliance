import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";

const heaterTreaterData = [
  {znCode: 'TREATER Z321',
znLb: '39 lb',
znKg: '(17.70 kg)',
alCode: '-',
alLb: '-',
alKg: '',
diaIn: '21.5"',
diaMm: '(546 mm)',
widIn: '3.00"',
widMm: '(76 mm)',
cDiaIn: '1.0", 1.5"',
cDiaMm: '(25 mm, 38 mm)',},

{znCode: 'TREATER Z321A',
znLb: '39 lb',
znKg: '(17.70 kg)',
alCode: '-',
alLb: '-',
alKg: '',
diaIn: '21.5"',
diaMm: '(546 mm)',
widIn: '3.00"',
widMm: '(76 mm)',
cDiaIn: '4.0"',
cDiaMm: '(102 mm)',},

{znCode: 'TREATER Z330',
znLb: '56 lb',
znKg: '(25.40 kg)',
alCode: '-',
alLb: '-',
alKg: '',
diaIn: '30."',
diaMm: '(762 mm)',
widIn: '300"',
widMm: '(76 mm)',
cDiaIn: '1.0", 1.5"',
cDiaMm: '(25 mm, 38 mm)',},

{znCode: 'TREATER Z330A',
znLb: '56 lb',
znKg: '(25.40 kg)',
alCode: '-',
alLb: '-',
alKg: '',
diaIn: '4.0"',
diaMm: '(102 mm)',
widIn: '1.25"',
widMm: '(32 mm)',
cDiaIn: '4.0"',
cDiaMm: '(102 mm)',},


];

const heaterTreater = () => {
  return (
    <div>
      <Hero heading={"Heater Treater Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={13} className="py-8">
                    <h1>HEATER TREATER ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                 <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                  <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>DIAMETER</th>
                  <th>WIDTH</th>
                  <th>C-DEPTH</th>
                </tr>
                {heaterTreaterData.map((item, id) => (
                  <Chart3Dim
                    key={id}
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
                  />
                ))}
              </tbody>
            </table>
          </main>
          <Image
                src="https://user-images.githubusercontent.com/77664153/228016568-a9612d1e-093d-49da-a19b-551c30324842.png"
                alt="picture of anode"
                className="min-w-[80px]"
                width={200}
                height={100}
              />
              <p className="py-4">MOUNTINGS ARE THREADED</p>
        </article>
      </div>
    </div>
  );
};

export default heaterTreater;
