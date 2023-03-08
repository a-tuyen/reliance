import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";

const plate = () => {
  return (
    <div className="w-[100%]">
      <Hero heading={"Commercial Plate Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-row w-[100%]">
        <SideBarComm />
        <main>
          <article>
            <table>
              <tbody>
                <tr>
                  <th colSpan={3}>COMMERCIAL ZINC PLATES</th>
                </tr>
                <tr>
                  <th>NOMINAL DIMENSIONS</th>
                  <th colSpan={2}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th>inches</th>
                  <th className="border-r-0">lb</th>
                  <th className="border-l-0">(kg)</th>
                </tr>
                <tr>
                  <td>1/2&quot; x 3&quot; x 3&quot;</td>
                  <td className="border-r-0">1.25</td>
                  <td className="border-l-0">(0.57)</td>
                </tr>
                <tr>
                  <td>1/2&quot; x 3&quot; x 6&quot;</td>
                  <td className="border-r-0">2.4</td>
                  <td className="border-l-0">(1.09)</td>
                </tr>
                <tr>
                  <td>1/2&quot; x 6&quot; x 6&quot;</td>
                  <td className="border-r-0">4.75</td>
                  <td className="border-l-0">(2.16)</td>
                </tr>
                <tr>
                  <td>1/2&quot; x 6&quot; x 12&quot;</td>
                  <td className="border-r-0">9.5</td>
                  <td className="border-l-0">(4.32)</td>
                </tr>
              </tbody>
            </table>
          </article>
        </main>
      </div>
    </div>
  );
};

export default plate;
