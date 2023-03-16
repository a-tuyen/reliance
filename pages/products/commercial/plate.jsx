import React from "react";
import Hero from "@/components/Hero";
import SideBarComm from "@/components/SideBarComm";
import ChartNoDim from "@/components/ChartNoDim";

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
      <Hero heading={"plate Anodes"} message={""} img={"bg-img5"} />
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
        <SideBarComm />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={12} className="py-8">
                    <h1>plate ANODE SPECIFICATIONS</h1>
                  </th>
                </tr>
                <tr>
                  <th colSpan={6}>NOMINAL WEIGHT</th>
                </tr>
                <tr>
                  <th colSpan={3} className="bg-zinc">
                    ZINC ANODE
                  </th>
                  <th colSpan={3} className="bg-alum">
                    ALUMINUM ANODE
                  </th>
                </tr>

                <tr>
                  <th className="bg-zinc">ITEM #</th>
                  <th className="bg-zinc border-r-0">lb</th>
                  <th className="bg-zinc border-l-0">(kg)</th>
                  <th className="bg-alum">ITEM #</th>
                  <th className="bg-alum border-r-0">lb</th>
                  <th className="bg-alum border-l-0">(kg)</th>
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
          </main>
        </article>
      </div>
    </div>
  );
};

export default plate;

// const plate = () => {
//   return (
//     <div className="w-[100%]">
//       <Hero heading={"Commercial Plate Anodes"} message={""} img={"bg-img5"} />
//       <div className="flex flex-col lg:flex-row items-center lg:justify-start w-[100%]">
//         <SideBarComm />
//         <main>
//           <article>
//             <table className="w-[100%]">
//               <tbody>
//                 <tr>
//                   <th colSpan={3}>COMMERCIAL ZINC PLATES</th>
//                 </tr>
//                 <tr>
//                   <th>NOMINAL DIMENSIONS</th>
//                   <th colSpan={2}>NOMINAL WEIGHT</th>
//                 </tr>
//                 <tr>
//                   <th>inches</th>
//                   <th className="border-r-0">lb</th>
//                   <th className="border-l-0">(kg)</th>
//                 </tr>
//                 <tr>
//                   <td>1/2&quot; x 3&quot; x 3&quot;</td>
//                   <td className="border-r-0">1.25</td>
//                   <td className="border-l-0">(0.57)</td>
//                 </tr>
//                 <tr>
//                   <td>1/2&quot; x 3&quot; x 6&quot;</td>
//                   <td className="border-r-0">2.40</td>
//                   <td className="border-l-0">(1.09)</td>
//                 </tr>
//                 <tr>
//                   <td>1/2&quot; x 6&quot; x 6&quot;</td>
//                   <td className="border-r-0">4.75</td>
//                   <td className="border-l-0">(2.16)</td>
//                 </tr>
//                 <tr>
//                   <td>1/2&quot; x 6&quot; x 12&quot;</td>
//                   <td className="border-r-0">9.50</td>
//                   <td className="border-l-0">(4.32)</td>
//                 </tr>

//                 <tr>
//                   <td>3/4&quot; x 3&quot; x 3&quot;</td>
//                   <td className="border-r-0">1.75</td>
//                   <td className="border-l-0">(0.80)</td>
//                 </tr>
//                 <tr>
//                   <td>3/4&quot; x 3&quot; x 6&quot;</td>
//                   <td className="border-r-0">3.50</td>
//                   <td className="border-l-0">(1.59)</td>
//                 </tr>
//                 <tr>
//                   <td>3/4&quot; x 6&quot; x 6&quot;</td>
//                   <td className="border-r-0">7.00</td>
//                   <td className="border-l-0">(3.18)</td>
//                 </tr>
//                 <tr>
//                   <td>3/4&quot; x 6&quot; x 12&quot;</td>
//                   <td className="border-r-0">14.00</td>
//                   <td className="border-l-0">(6.36)</td>
//                 </tr>

//                 <tr>
//                   <td>1&quot; x 3&quot; x 3&quot;</td>
//                   <td className="border-r-0">2.25</td>
//                   <td className="border-l-0">(1.02)</td>
//                 </tr>
//                 <tr>
//                   <td>1&quot; x 3&quot; x 6&quot;</td>
//                   <td className="border-r-0">4.50</td>
//                   <td className="border-l-0">(2.05)</td>
//                 </tr>
//                 <tr>
//                   <td>1&quot; x 6&quot; x 6&quot;</td>
//                   <td className="border-r-0">9.00</td>
//                   <td className="border-l-0">(4.09)</td>
//                 </tr>
//                 <tr>
//                   <td>1&quot; x 6&quot; x 12&quot;</td>
//                   <td className="border-r-0">18.00</td>
//                   <td className="border-l-0">(8.18)</td>
//                 </tr>
//               </tbody>
//             </table>
//           </article>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default plate;
