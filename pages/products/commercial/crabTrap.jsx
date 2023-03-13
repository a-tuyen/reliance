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
                  <th colSpan={3} className="bg-red">ZINC ANODE</th>
                  <th colSpan={3}>ALUMINUM ANODE</th>
                  <th colSpan={2}>DIAMETER</th>
                  <th colSpan={2}>WIDTH</th>
                  <th colSpan={2}>BOLT DIAMETER</th>
                </tr>
       
                <tr>
                  <th>ITEM #</th>
                  <th>lb</th>
                  <th>(kg)</th>
                  <th>ITEM #</th>
                  <th>lb</th>
                  <th>(kg)</th>
                  <th>in</th>
                  <th>(mm)</th>
                  <th>in</th>
                  <th>(mm)</th>
                  <th>in</th>
                  <th>(mm)</th>
                </tr>
                <tr>
                  <td>MDCT-3</td>
                  <td>3.00</td>
                  <td>(1.35)</td>
                  <td>AMDCT-3</td>
                  <td>1.3</td>
                  <td>(0.600)</td>
                  <td>3 1/4</td>
                  <td>(83)</td>
                  <td>1 1/4</td>
                  <td>(32)</td>
                  <td>1/2</td>
                  <td>(13)</td>
                </tr>
                <tr>
                  <td>MDCT-3 HEX</td>
                  <td>3.00</td>
                  <td>(1.35)</td>
                  <td>AMDCT-3 HEX</td>
                  <td>1.3</td>
                  <td>(0.600)</td>
                  <td>3</td>
                  <td>(76)</td>
                  <td>1 3/8</td>
                  <td>(35)</td>
                  <td>1/2</td>
                  <td>(13)</td>
                </tr>
                <tr>
                  <td>MDCT-5 HEX</td>
                  <td>5.00</td>
                  <td>(2.27)</td>
                  <td>AMDCT-5 HEX</td>
                  <td>2.53</td>
                  <td>(1.136)</td>
                  <td>3 3/4</td>
                  <td>(95)</td>
                  <td>1 1/4</td>
                  <td>(32)</td>
                  <td>1/2</td>
                  <td>(13)</td>
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
