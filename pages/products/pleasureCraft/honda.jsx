import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDimNote from "@/components/ChartNoDimNote";
import Image from "next/image";
import Link from "next/link";

const hondaData = [
    {img: 'https://user-images.githubusercontent.com/77664153/233170914-0b624bdc-99e5-4383-95b7-ddc85e9c07e4.png',
    znCode: 'MD-41106-935-812',
    znLb: '0.20 lb',
    znKg: '(0.09 kg)',
    alCode: 'AMD-41106-935-812',
    alLb: '0.08 lb',
    alKg: '(0.04 kg)',
    notes: '6E0-45251-11'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170915-338b5506-e6f3-452f-be1f-008e5bc997f1.png',
    znCode: 'MD-41106-ZW9-000',
    znLb: '0.10 lb',
    znKg: '(0.05 kg)',
    alCode: 'AMD-41106-ZW9-000',
    alLb: '0.04 lb',
    alKg: '(0.02 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170917-cca50c69-3e14-428c-8532-a1cd3a26b33d.png',
    znCode: '41107-ZV5-000',
    znLb: '0.48 lb',
    znKg: '(0.22 kg)',
    alCode: 'A41107-ZV5-000',
    alLb: '0.19 lb',
    alKg: '(0.09 kg)',
    notes: '664-45371-01'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170919-393f2dad-f7ed-4333-b304-bb3de676c91c.png',
    znCode: 'MD-41109-ZW1-003',
    znLb: '0.54 lb',
    znKg: '(0.24 kg)',
    alCode: 'AMD-41109-ZW1-003',
    alLb: '0.21 lb',
    alKg: '(0.1 kg)',
    notes: '826134'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170919-393f2dad-f7ed-4333-b304-bb3de676c91c.png',
    znCode: 'MD-41109-ZW1-B00',
    znLb: '0.49 lb',
    znKg: '(0.22 kg)',
    alCode: 'AMD-41109-ZW1-B00',
    alLb: '0.19 lb',
    alKg: '(0.09 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170907-0b09e036-2baf-4b4b-b944-6d8ef5e4122c.png',
    znCode: 'MD-06411-ZV5-000',
    znLb: '0.79 lb',
    znKg: '(0.36 kg)',
    alCode: 'AMD-06411-ZV5-000',
    alLb: '0.31 lb',
    alKg: '(0.14 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170910-da6a58ce-722b-4214-8a1a-81130e5ac129.png',
    znCode: 'MD-06411-ZW1-000',
    znLb: '1.83 lb',
    znKg: '(0.83 kg)',
    alCode: 'AMD-06411-ZW1-000',
    alLb: '0.71 lb',
    alKg: '(0.32 kg)',
    notes: '31640'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170922-ef10ec5e-b953-43ef-a63f-9bada7b30171.png',
    znCode: 'MD-41107-ZW1-003-ZA',
    znLb: '1.05 lb',
    znKg: '(0.48 kg)',
    alCode: 'AMD-41107-ZW1-003-ZA',
    alLb: '0.41 lb',
    alKg: '(0.19 kg)',
    notes: ''},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170921-f475ffdb-d938-4835-80f5-0ac0afe47a46.png',
    znCode: 'MD-12155-ZV4-A00',
    znLb: '0.06 lb',
    znKg: '(0.03 kg)',
    alCode: 'AMD-12155-ZV4-A00',
    alLb: '0.02 lb',
    alKg: '(0.01 kg)',
    notes: '688-45251-01'},
    
    {img: 'https://user-images.githubusercontent.com/77664153/233170921-f475ffdb-d938-4835-80f5-0ac0afe47a46.png',
    znCode: 'MD-12155-ZV5-000',
    znLb: '0.06 lb',
    znKg: '(0.03 kg)',
    alCode: 'AMD-12155-ZV5-000',
    alLb: '0.02 lb',
    alKg: '(0.01 kg)',
    notes: '6E0-45251-11'},
    
];

const honda = () => {
  return (
    <div>
      <Hero heading={"Honda Anode"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>HONDA</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {/* <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr> */}
                {hondaData.map((item, id) => (
                  <ChartNoDimNote
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    notes={item.notes}
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

export default honda;
