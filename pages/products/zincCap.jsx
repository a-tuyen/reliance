import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const zincCap = () => {
  return (
    <div className="w-[100%]">
      <Hero
        heading={"Zinc Anode Caps"}
        message={
          "Reliance Zinc Anode Caps provide targeted cathodic protection for underground and submerged threads, bolts, and nuts on glands, flanges, and mechanical fittings. Designed for use on buried pipelines, in water treatment plants, weirs, lock gates, and other structures with exposed metal threads, these caps help prevent corrosion where it matters most."
        }
        img={"bg-img3"}
      />

      <main>
        <article>
          <h2>Why Reliance Zinc Anode Caps Outperform the Rest</h2>
          <p>
          Not all anode caps are created equal. At Reliance, we don&quot;t cut corners—we cast with purpose. Here&quot;s what sets our zinc caps apart:
          </p>

          <table>
            <tbody>
              <tr>
                <th colSpan={"3"} className="border-2 border-white py-4">
                  <h1>SHG ZINC COMPOSITION</h1>
                </th>
              </tr>
              <tr>
                <th>MATERIAL</th>
                <th>MIL-A-18001J SPECIFICATIONS</th>
                <th>ASTM B418-80 SPECIFICATIONS</th>
              </tr>
              <tr>
                <td>Aluminum</td>
                <td>0.10 - 0.50%</td>
                <td>0.10 - 0.4%</td>
              </tr>
              <tr>
                <td>Cadmium</td>
                <td>0.025 - 0.15%</td>
                <td>0.03 - 0.10%</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>0.005% MAX</td>
                <td>0.005% MAX</td>
              </tr>
              <tr>
                <td>Lead</td>
                <td>0.006% MAX</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Copper</td>
                <td>0.005% MAX</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Silicon</td>
                <td>0.125% MAX</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Zinc</td>
                <td>Remainder</td>
                <td>Remainder</td>
              </tr>
            </tbody>
          </table>

          <h2>How Zinc Anode Caps Work</h2>
          <p className="">
            Corrosion is an electrochemical process in which metal parts form a
            galvanic cell when they are in contact with moisture. Using the
            common battery as an example, moisture becomes the electrolyte while
            the different metals in the system (such as bolts, nuts, fittings
            etc.) become the positive and negative ends of the battery. The
            &quot;more negative&quot; component loses material thru corrosion
            while protecting the &quot;positive&quot; component, which becomes
            shielded. Zinc being much more negative than most other materials,
            the protected &quot;positive&quot; component is essentially immune
            to corrosion as long as there is Zinc remaining to consume. Zinc
            Anode Caps offer protection for system components made of steel,
            cast iron, ductile iron, brass and copper. The quantity of Zinc
            Anode Caps used determines the service life of the protected
            component. Zinc Anode Caps should be installed on all exposed bolts
            of pipeline fittings depending on soil conditions.
          </p>

          <h3>These anodes are suitable for:</h3>
          <ul className="list-disc pb-8">
            <li>Pipeline installers and manufacturers</li>
            <li>Pipeline flange manufacturers and suppliers</li>
            <li>Dredging companies</li>
            <li>Submersible pump manufacturers and suppliers</li>
            <li>Water boards and Utility providers</li>
            <li>Councils, water and sewage departments</li>
            <li>Corrosion engineering</li>
            <li>Wharf and jetty construction companies </li>
          </ul>

          <table>
            <tbody>
              <tr>
                <th colSpan={"5"} className="py-4">
                  <h1>Reliance Zinc Cap Specifications</h1>
                </th>
              </tr>
              <tr className="uppercase">
                <th>Thread Size</th>
                <th colSpan={"3"}>Dimensions</th>
                <th colSpan={"1"}>Nominal Weight</th>
              </tr>
              <tr className="uppercase">
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th></th>
              </tr>
              <tr>
                <th className="border-2 border-white text-center">
                  Reliance Zinc Cap - 6 oz
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>lb</div>
                    <div className="pl-2">(kg)</div>
                  </div>
                </th>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  1/2&quot; x 13 UNC
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>1.5&quot;</div>
                    <div className="pl-2">(38.1 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className=" border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>0.98&quot;</div>
                    <div className="pl-2">(24.9 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>1.69&quot;</div>
                    <div className="pl-2">(42.95 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>0.4 lb</div>
                    <div className="pl-2">(0.15 kg)</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  5/8&quot; x 11 UNC
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  3/4&quot; x 10 UNC
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  7/8&quot; x 9 UNC
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  1&quot; x 8 UNC
                </td>
              </tr>
              <tr>
                <th className="border-2 border-white text-center">
                  Reliance Zinc Cap - 14 oz
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>in</div>
                    <div className="pl-2">(mm)</div>
                  </div>
                </th>
                <th className="">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>lb</div>
                    <div className="pl-2">(kg)</div>
                  </div>
                </th>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  1 1/8&quot; x 7 UNC
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>1.5&quot;</div>
                    <div className="pl-2">(38.1 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className=" border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>0.98&quot;</div>
                    <div className="pl-2">(24.9 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>1.69&quot;</div>
                    <div className="pl-2">(42.95 mm)</div>
                  </div>
                </td>
                <td rowSpan={5} className="border-2 border-white text-center">
                  <div className="flex flex-col md:flex-row justify-center items-center px-1">
                    <div>0.4 lb</div>
                    <div className="pl-2">(0.15 kg)</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  1 1/4&quot; x 7 UNC
                </td>
              </tr>
              <tr>
                <td className="border-2 border-white text-center">
                  1 1/2&quot; x 7 UNC
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center mb-10">
            <Image src="/anodes/zn-cap.png" width={625} height="375" ></Image>
            <p className="text-center mt-2 w-[100%]">We offer Reliance branded zinc caps as well as
            private label caps. <Link href="/contact" className="underline hover:text-zinc">Contact us</Link>  today to talk about your corrosion needs</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default zincCap;
