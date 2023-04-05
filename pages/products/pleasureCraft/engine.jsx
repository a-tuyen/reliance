import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
const engine = () => {
  return (
    <div>
      <Hero
        heading={"Engine Anodes"}
        message={
          "Reliance MDE Series of Marine Engine Anodes consists of a brass plug with anode attached"
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
                  <th colSpan={7} className="py-8">
                    <h1>ENGINE ANODES SPECIFICATIONS</h1>
                    <p>Only available in ZINC</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={4}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>lb (kg)</th>
                  <th>A: LENGTH</th>
                  <th>B: DIA</th>
                  <th>PLUG OD (NPT)</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>C-PLUG</div>
                      <div className="px-2">(Thread Interval)</div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td className="bg-zinc text-white content-start border-l-0 px-1">
                    ZN
                  </td>
                  <td className="bg-zincLight">
                    <div className="flex flex-col md:flex-row  md:justify-start justify-center items-start">
                      <div>MDE-00 - </div>
                      <div className="flex justify-center items-start">
                        COMPLETE
                      </div>
                    </div>
                  </td>
                  <td className="bg-zincLight border-r-0">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>0.05</div>
                      <div className="px-2">(0.023)</div>
                    </div>
                  </td>
                  <td className="border-b-0">2&quot;</td>

                  <td className="border-b-0">1/4&quot;</td>
                  <td className="border-b-0">1/8&quot;</td>
                  <td rowSpan={2} className="border-b-0">
                    1/4-20 NC
                  </td>
                </tr>
                <tr>
                  <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
                  <td className="bg-zincLight">
                    <div className="flex flex-col md:flex-row justify-center md:justify-start items-start">
                      <div>MDE-00 - </div>
                      <div className="flex justify-center items-start">
                        REPLACEMENT
                      </div>
                    </div>
                  </td>
                  <td className="bg-zincLight border-r-0">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>0.02</div>
                      <div className="px-2">(0.010)</div>
                    </div>
                  </td>

                  <td className="border-t-0">(50 mm)</td>
                  <td className="border-t-0">(6 mm)</td>
                  <td className="border-t-0">(3 mm)</td>
                </tr>
              </tbody>
            </table>
          </main>
        </article>
      </div>
    </div>
  );
};

export default engine;
