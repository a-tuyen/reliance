import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";

const plateData = [
  {
    znCode: '1/2" x 3" x 3"',
    znLb: "1.25",
    znKg: "(0.57)",
    alCode: '1/2" x 3" x 3"',
    alLb: "0.49",
    alKg: "(0.22)",
  },
  {
    znCode: '1/2" x 3" x 6"',
    znLb: "2.40",
    znKg: "(1.09)",
    alCode: '1/2" x 3" x 6"',
    alLb: "0.94",
    alKg: "(0.43)",
  },
  {
    znCode: '1/2" x 6" x 6"',
    znLb: "4.75",
    znKg: "(2.16)",
    alCode: '1/2" x 6" x 6"',
    alLb: "1.86",
    alKg: "(0.84)",
  },
  {
    znCode: '1/2" x 6" x 12"',
    znLb: "9.50",
    znKg: "(4.32)",
    alCode: '1/2" x 6" x 12"',
    alLb: "3.71",
    alKg: "(1.68)",
  },
  {
    znCode: '3/4" x 3" x 3"',
    znLb: "1.75",
    znKg: "(0.80)",
    alCode: '3/4" x 3" x 3"',
    alLb: "0.68",
    alKg: "(0.31)",
  },
  {
    znCode: '3/4" x 3" x 6"',
    znLb: "3.50",
    znKg: "(1.59)",
    alCode: '3/4" x 3" x 6"',
    alLb: "1.37",
    alKg: "(0.62)",
  },
  {
    znCode: '3/4" x 6" x 6"',
    znLb: "7.00",
    znKg: "(3.18)",
    alCode: '3/4" x 6" x 6"',
    alLb: "2.73",
    alKg: "(1.24)",
  },
  {
    znCode: '3/4" x 6" x 12"',
    znLb: "14.00",
    znKg: "(6.36)",
    alCode: '3/4" x 6" x 12"',
    alLb: "5.47",
    alKg: "(2.48)",
  },
  {
    znCode: '1" x 3" x 3"',
    znLb: "4.50",
    znKg: "(2.05)",
    alCode: '1" x 3" x 3"',
    alLb: "1.76",
    alKg: "(0.8)",
  },
  {
    znCode: '1" x 3" x 6"',
    znLb: "2.25",
    znKg: "(1.02)",
    alCode: '1" x 3" x 6"',
    alLb: "0.88",
    alKg: "(0.4)",
  },
  {
    znCode: '1" x 6" x 6"',
    znLb: "9.00",
    znKg: "(4.09)",
    alCode: '1" x 6" x 6"',
    alLb: "3.52",
    alKg: "(1.6)",
  },
  {
    znCode: '1" x 6" x 12"',
    znLb: "18.00",
    znKg: "(8.18)",
    alCode: '1" x 6" x 12"',
    alLb: "7.03",
    alKg: "(3.19)",
  },
];

const plate = () => {
  return (
    <div>
      <Hero heading={"commercial plate Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={12} className="py-8">
                    <h1>PLATE</h1>
                    <p className="font-boldHeading text-2xl tracking-wider pb-4">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                <th colSpan={2}>NOMINAL DIMENSIONS</th>
                  <th colSpan={2}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={2} className="">ITEM #</th>
                  <th className="border-r-0">lb</th>
                  <th className= "border-l-0">(kg)</th>
                </tr>
                {plateData.map((item, id) => (
                  <ChartNoDim
                    key={id}
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
            <div className="flex flex-col items-center pb-6">
              <Image
                src="https://user-images.githubusercontent.com/77664153/228350506-05ba5a7c-ba42-4711-9424-f07f0920ac19.png"
                alt="picture of anode"
                className="min-w-[80px] lg:pr-8"
                width={200}
                height={100}
              />
              {/* <p>*Plates also available in Aluminum Alloy</p> */}
              <p className="pt-4">*Bonding Wire available for 1/2” Plates</p>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default plate;
