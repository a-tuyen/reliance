import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";
import Link from "next/link";

const arnesonData = [
    {znCode: 'MD-ARNESON-LARGE 1009358',
    znLb: '3.66 lb',
    znKg: '(1.66 kg)',
    alCode: 'AMD-ARNESON-LARGE 1009358',
    alLb: '1.59 lb',
    alKg: '(0.72 kg)'},
    
    {znCode: 'MD-ARNESON-SMALL 1009036',
    znLb: '1.2 lb',
    znKg: '(0.54 kg)',
    alCode: 'AMD-ARNESON-SMALL 1009036',
    alLb: '0.52 lb',
    alKg: '(0.24 kg)'},
    
];

const arneson = () => {
  return (
    <div>
      <Hero
        heading={"Arneson Anodes"}
        message={
          ""
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
                  <th colSpan={5} className="py-8">
                    <h1>KEY POWER BOW THRUSTER ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={5}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>
                </tr>
                {arnesonData.map((item, id) => (
                  <ChartNoDim
                    key={id}
                    img={item.img}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                  />
                ))}
              </tbody>
            </table>
            <div className=" flex flex-col items-center text-center font-extrabold tracking-wider text-xl">
              <p>ARNESON</p>
              <Image
                src="https://user-images.githubusercontent.com/77664153/236056635-663ee016-fdcf-4d1a-a285-37abfc373141.png"
                alt="pictore of anode"
                width="200"
                height="100"
              />
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default arneson;
