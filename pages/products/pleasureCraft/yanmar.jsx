import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import ChartNoDimNotePic from "@/components/ChartNoDimNotePic";
import Image from "next/image";
import Link from "next/link";

const yanmarData = [
  {
    img: "https://user-images.githubusercontent.com/77664153/233498015-5ce7a4cd-001d-4f7d-a839-03d046b63867.png",
    znCode: "YANMAR 196420-02652",
    znLb: "1.88 lb",
    znKg: "(0.85 kg)",
    alCode: "N/A",
    alLb: "-",
    alKg: "",
    notes: '5.8"    (148 mm)',
  },

  {
    img: "https://user-images.githubusercontent.com/77664153/233498012-c5390318-ab6d-45ca-92b2-04284511da66.png",
    znCode: "YANMAR 196440-02660",
    znLb: "1.6 lb",
    znKg: "(0.73 kg)",
    alCode: "YANMAR 196440-02660A",
    alLb: "1.88 lb",
    alKg: "(0.85 kg)",
    notes: '4"    (102 mm)',
  },
];

const honda = () => {
  return (
    <div>
      <Hero
        heading={"Yanmar Anodes"}
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
                    <h1>YANMAR</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                {/* <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={3}>NOMINAL DIMENSIONS</th>
                </tr> */}
                {yanmarData.map((item, id) => (
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
                    headerNotes="LENGTH"
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
