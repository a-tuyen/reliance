import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import ChartNoDim from "@/components/ChartNoDim";
import Image from "next/image";

const rodData = [
  {
    znCode: '3/8" x 6\'0"',
    znLb: "2.0",
    znKg: "(0.91)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1/2" x 6\'0"',
    znLb: "3.6",
    znKg: "(0.41)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '5/8" x 78"',
    znLb: "6.2",
    znKg: "(3.01)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '3/4" x 78"',
    znLb: "9.0",
    znKg: "(4.09)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '7/8" x 78"',
    znLb: "12.2",
    znKg: "(5.55)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1" x 78"',
    znLb: "15.9",
    znKg: "(7.23)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1 1/4" x 78"',
    znLb: "24.8",
    znKg: "(11.27)",
    alCode: "-",
    alLb: "-",
    alKg: "-",
  },
  {
    znCode: '1 1/2" x 2\'0"',
    znLb: "11.0",
    znKg: "(5.00)",
    alCode: '1 1/2" x 2\'0"',
    alLb: "8.00",
    alKg: "(3.63)",
  },
  {
    znCode: '2" x 2\'0"',
    znLb: "19.9",
    znKg: "(9.05)",
    alCode: '2" x 2\'0"',
    alLb: "10.00",
    alKg: "(4.54)",
  },
  {
    znCode: '2 1/2" x 2\'0"',
    znLb: "30.6",
    znKg: "(13.91)",
    alCode: '2 1/2" x 2\'0"',
    alLb: "14.00",
    alKg: "(6.35)",
  },
  {
    znCode: '3" x 2\'0"',
    znLb: "44.1",
    znKg: "(20.05)",
    alCode: '3" x 2\'0"',
    alLb: "17.00",
    alKg: "(7.73)",
  },
  {
    znCode: '3 3/4" x 2\'0"',
    znLb: "73.5",
    znKg: "(33.41)",
    alCode: '3 3/4" x 2\'0"',
    alLb: "35.00",
    alKg: "(15.91)",
  },
  {
    znCode: '4" x 2\'0"',
    znLb: "78.4",
    znKg: "(34.64)",
    alCode: '4" x 2\'0"',
    alLb: "40.00",
    alKg: "(18.18)",
  },
  {
    znCode: '5" x 1\'0"',
    znLb: "61.3",
    znKg: "(27.86)",
    alCode: '5" x 1\'0"',
    alLb: "30.00",
    alKg: "(13.64)",
  },
];

const rod = () => {
  return (
    <div>
      <Hero heading={"rod Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={4} className="py-8">
                    <h1>ROD</h1>
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
                  <th colSpan={2}>ITEM #</th>
                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>
                </tr>
                {rodData.map((item, id) => (
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
            <div className="flex flex-col items-center pb-4">
              <Image
                src="https://user-images.githubusercontent.com/77664153/228049429-342a25b8-a01a-45c4-88dd-4b1f084b5f26.png"
                alt="picture of anode"
                className="min-w-[80px] lg:pr-8"
                width={200}
                height={100}
              />
              <p className="pt-4">RODS ARE ALSO AVAILABLE IN 12&quot; LENGTHS</p>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default rod;
