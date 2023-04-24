import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDimNotePic from "@/components/ChartNoDimNotePic";
import Image from "next/image";
import Link from "next/link";

const hjData = [
    {img: 'https://user-images.githubusercontent.com/77664153/234129247-8fb2a045-4b9d-4333-9eb7-d5e05ac50cbc.png',
    znCode: 'MD-HJ-102185',
    znLb: '2.08 lb',
    znKg: '(0.94 kg)',
    alCode: 'AMD-HJ-102185 / AMD-HJ-203123',
    alLb: '0.81 lb',
    alKg: '(0.37 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129252-45f6f4b2-e5e5-43a0-8816-5b644801fbc4.png',
    znCode: 'MD-HJ-105447',
    znLb: '0.45 lb',
    znKg: '(0.2 kg)',
    alCode: 'AMD-HJ-105447 / AMD-HJ-203125',
    alLb: '0.18 lb',
    alKg: '(0.08 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129251-9231260b-b240-4258-a620-e750e20751bf.png',
    znCode: 'MD-HJ-104634',
    znLb: '0.62 lb',
    znKg: '(0.28 kg)',
    alCode: 'AMD-HJ-104634',
    alLb: '0.24 lb',
    alKg: '(0.11 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129257-ff055be0-cccf-4fe4-8ccc-7add8df17b3c.png',
    znCode: 'MD-HJ-111593',
    znLb: '0.56 lb',
    znKg: '(0.25 kg)',
    alCode: 'AMD-HJ-111593 / AMD-HJ-203133',
    alLb: '0.46 lb',
    alKg: '(0.21 kg)',
    notes: 'M8 x 1.25'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129242-48c7f6cf-db3d-4dd5-bab9-20325aed1909.png',
    znCode: 'MD-HJ-112657',
    znLb: '0.33 lb',
    znKg: '(0.15 kg)',
    alCode: 'AMD-HJ-112657 / AMD-HJ-203131',
    alLb: '0.25 lb',
    alKg: '(0.11 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129251-9231260b-b240-4258-a620-e750e20751bf.png',
    znCode: 'MD-HJ-103359',
    znLb: '0.57 lb',
    znKg: '(0.26 kg)',
    alCode: 'AMD-HJ-103359 / AMD-HJ-203124',
    alLb: '0.35 lb',
    alKg: '(0.16 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129256-91fe5851-39a1-4577-9508-1abe09cf9181.png',
    znCode: 'MD-HJ-111059',
    znLb: '2.09 lb',
    znKg: '(0.95 kg)',
    alCode: 'AMD-HJ-111059 / AMD-HJ-203130',
    alLb: '0.82 lb',
    alKg: '(0.37 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129257-ff055be0-cccf-4fe4-8ccc-7add8df17b3c.png',
    znCode: 'MD-HJ-111644',
    znLb: '0.87 lb',
    znKg: '(0.39 kg)',
    alCode: 'AMD-HJ-111644 / AMD-HJ-203132',
    alLb: '0.55 lb',
    alKg: '(0.25 kg)',
    notes: 'M8 x 1.25'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129255-2da7d5f0-9e42-48ac-90dc-99f96cd7f437.png',
    znCode: 'MD-HJ-108582',
    znLb: '0.07 lb',
    znKg: '(0.03 kg)',
    alCode: 'AMD-HJ-108582',
    alLb: '0.03 lb',
    alKg: '(0.01 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129253-8d2bccc6-7e17-4070-85ea-3628e1521594.png',
    znCode: 'MD-HJ-107890',
    znLb: '3.80 lb',
    znKg: '(1.72 kg)',
    alCode: 'AMD-HJ-107890 / AMD-HJ-203127',
    alLb: '1.52 lb',
    alKg: '(0.69 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/234129249-cb3d0bc9-ba86-4344-a03f-1edf9624c0c5.png',
    znCode: 'MD-HJ-103862-14',
    znLb: '14.0 lb',
    znKg: '(6.35 kg)',
    alCode: 'AMD-HJ-103862-14',
    alLb: '5.47 lb',
    alKg: '(2.48 kg)',
    notes: ''},
    
    {img: '',
    znCode: 'MD-HJ-212094',
    znLb: '0.34 lb',
    znKg: '(0.15 kg)',
    alCode: 'AMD-HJ-212094',
    alLb: '0.13 lb',
    alKg: '(0.06 kg)',
    notes: ''},
    
];

const hj = () => {
  return (
    <div>
      <Hero heading={"Hamilton Jet Anodes"} message={"Carefully designed by our skilled technicians to fit like an OEM part"} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>HAMILTON JET</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {hjData.map((item, id) => (
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
                    headerNotes="notes"
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

export default hj;
