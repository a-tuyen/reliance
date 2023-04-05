import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
const engine = () => {
  return (
    <div>
      <Hero
        heading={"Engine Anodes"}
        message={
          "Reliance MDE Series of Engine Anodes comes complete with an anode and a brass plug attached or as a replacement of just an anode without brass plug"
        }
        img={"bg-img2"}
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main >
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
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A:
                    <p className="text-sm">LENGTH</p>
                  </th>
                  <th>B:
                  <p className="text-sm">DIA</p>
                  </th>
                  <th>C:
                  <p className="text-sm">PLUG OD (NPT)</p>
                  </th>
                  <th>
                  
                      C: PLUG<p className="px-2 text-sm">(Thread Interval)</p>
                
                  </th>
                </tr>
                <tr>
                  <td className="bg-zinc text-white border-l-0 px-1">ZN</td>
                  <td className="bg-zincLight pl-1">MDE-00Z -<p className="text-sm">REPLACEMENT</p></td>
                  <td className="bg-zincLight border-r-0">
                    <div className="flex flex-col md:flex-row justify-center items-center px-1">
                      <div>0.05</div>
                      <div className="pl-2">(0.023)</div>
                    </div>
                  </td>
                  <td className="border-b-0">2&quot;</td>

                  <td className="border-b-0">1/4&quot;</td>
                  <td className="border-b-0">1/8&quot;</td>
                  <td rowSpan={2} className="border-b-0">
                    1/4 - 20 NC
                  </td>
                </tr>
                <tr>
                  <td className="bg-zinc text-white border-l-0 px-1">ZN</td>

                  <td className="bg-zincLight pl-1">MDE-00C - <p className="text-sm">COMPLETE</p></td>
                  <td className="bg-zincLight border-r-0">
                    <div className="flex flex-col md:flex-row justify-center items-center px-1">
                      <div>0.05</div>
                      <div className="pl-2">(0.023)</div>
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
