import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";

const plate = () => {
  return (
    <div className="w-[100%]">
      <Hero heading={"Commercial Plate Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <main>
          <article>
            <table className="w-[100%]">
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
                  <td className="border-r-0">2.40</td>
                  <td className="border-l-0">(1.09)</td>
                </tr>
                <tr>
                  <td>1/2&quot; x 6&quot; x 6&quot;</td>
                  <td className="border-r-0">4.75</td>
                  <td className="border-l-0">(2.16)</td>
                </tr>
                <tr>
                  <td>1/2&quot; x 6&quot; x 12&quot;</td>
                  <td className="border-r-0">9.50</td>
                  <td className="border-l-0">(4.32)</td>
                </tr>

                <tr>
                  <td>3/4&quot; x 3&quot; x 3&quot;</td>
                  <td className="border-r-0">1.75</td>
                  <td className="border-l-0">(0.80)</td>
                </tr>
                <tr>
                  <td>3/4&quot; x 3&quot; x 6&quot;</td>
                  <td className="border-r-0">3.50</td>
                  <td className="border-l-0">(1.59)</td>
                </tr>
                <tr>
                  <td>3/4&quot; x 6&quot; x 6&quot;</td>
                  <td className="border-r-0">7.00</td>
                  <td className="border-l-0">(3.18)</td>
                </tr>
                <tr>
                  <td>3/4&quot; x 6&quot; x 12&quot;</td>
                  <td className="border-r-0">14.00</td>
                  <td className="border-l-0">(6.36)</td>
                </tr>

                <tr>
                  <td>1&quot; x 3&quot; x 3&quot;</td>
                  <td className="border-r-0">2.25</td>
                  <td className="border-l-0">(1.02)</td>
                </tr>
                <tr>
                  <td>1&quot; x 3&quot; x 6&quot;</td>
                  <td className="border-r-0">4.50</td>
                  <td className="border-l-0">(2.05)</td>
                </tr>
                <tr>
                  <td>1&quot; x 6&quot; x 6&quot;</td>
                  <td className="border-r-0">9.00</td>
                  <td className="border-l-0">(4.09)</td>
                </tr>
                <tr>
                  <td>1&quot; x 6&quot; x 12&quot;</td>
                  <td className="border-r-0">18.00</td>
                  <td className="border-l-0">(8.18)</td>
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
