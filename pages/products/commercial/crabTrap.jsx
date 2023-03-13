import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";

const crabTrap = () => {
  return (
    <div>
      <Hero heading={"Crab Trap Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <main>
          <article>
            <table>
              <tbody>
              <tr>
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                  {/* <th colSpan={3}>NOMINAL WEIGHT</th> */}
                  <th colSpan={6}>NOMINAL DIMENSIONS</th>
                </tr>
              <tr>
                  <th colSpan={3} className="bg-zinc">ZINC ANODE</th>
                  <th colSpan={3} className="bg-alum">ALUMINUM ANODE</th>
                  <th colSpan={2}>DIAMETER</th>
                  <th colSpan={2}>WIDTH</th>
                  <th colSpan={2}>BOLT DIAMETER</th>
                </tr>
       
                <tr>
                  <th className="bg-zinc">ITEM #</th>
                  <th className="bg-zinc border-r-0">lb</th>
                  <th className="bg-zinc border-l-0">(kg)</th>
                  <th className="bg-alum">ITEM #</th>
                  <th className="bg-alum border-r-0">lb</th>
                  <th className="bg-alum border-l-0">(kg)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                  <th className="border-r-0">in</th>
                  <th className="border-l-0">(mm)</th>
                </tr>
                <tr>
                  <td className="bg-zincLight">MDCT-3</td>
                  <td className="bg-zincLight border-r-0">3.00</td>
                  <td className="bg-zincLight border-l-0">(1.35)</td>
                  <td className="bg-alumLight">AMDCT-3</td>
                  <td className="bg-alumLight border-r-0">1.3</td>
                  <td className="bg-alumLight border-l-0">(0.600)</td>
                  <td className="border-r-0">3 1/4</td>
                  <td className="border-l-0">(83)</td>
                  <td className="border-r-0">1 1/4</td>
                  <td className="border-l-0">(32)</td>
                  <td className="border-r-0">1/2</td>
                  <td className="border-l-0">(13)</td>
                </tr>
                <tr>
                  <td className="bg-zincLight">MDCT-3 HEX</td>
                  <td className="bg-zincLight border-r-0">3.00</td>
                  <td className="bg-zincLight border-l-0">(1.35)</td>
                  <td className="bg-alumLight">AMDCT-3 HEX</td>
                  <td className="bg-alumLight border-r-0">1.3</td>
                  <td className="bg-alumLight border-l-0">(0.600)</td>
                  <td className="border-r-0">3</td>
                  <td className="border-l-0">(76)</td>
                  <td className="border-r-0">1 3/8</td>
                  <td className="border-l-0">(35)</td>
                  <td className="border-r-0">1/2</td>
                  <td className="border-l-0">(13)</td>
                </tr>
                <tr>
                  <td className="bg-zincLight">MDCT-5 HEX</td>
                  <td className="bg-zincLight border-r-0">5.00</td>
                  <td className="bg-zincLight border-l-0">(2.27)</td>
                  <td className="bg-alumLight">AMDCT-5 HEX</td>
                  <td className="bg-alumLight border-r-0">2.53</td>
                  <td className="bg-alumLight border-l-0">(1.136)</td>
                  <td className="border-r-0">3 3/4</td>
                  <td className="border-l-0">(95)</td>
                  <td className="border-r-0">1 1/4</td>
                  <td className="border-l-0">(32)</td>
                  <td className="border-r-0">1/2</td>
                  <td className="border-l-0">(13)</td>
                </tr>
              </tbody>
            </table>
          </article>
        </main>
      </div>
    </div>
  );
};

export default crabTrap;
