import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";
import Link from "next/link";

const frigoboatData = [
  {
    znCode: "E51525",
    znLb: "0.09 lb",
    znKg: "(0.04 kg)",
    alCode: "AE51525",
    alLb: "0.04 lb",
    alKg: "(0.02 kg)",
  },
];

const frigoboat = () => {
  return (
    <div>
      <Hero heading={"Frigoboat Anodes"} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={5} className="py-8">
                    <h1>FRIGOBOAT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
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
                {frigoboatData.map((item, id) => (
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
              <p className="pb-4">FRIGOBOAT E51525</p>
              <Image
                src="https://user-images.githubusercontent.com/77664153/236066388-417f3f56-720a-4989-b81e-afd4cb4747a8.png"
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

export default frigoboat;
