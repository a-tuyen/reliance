import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
    <div className="bg-white flex flex-col justify-center">
     <Hero heading={"What is Mil-Spec?"} img={"bg-img2"}/> 
      </div>
      <main>
        <article>
          <h2>Understanding &quot;Mil-Spec: MIL-A-18001&quot;</h2>
          <p>
          In the early 1950s, the United States Naval Command joined forces with the International Zinc Institute to research and improve the performance of common zinc as a sacrificial anode.  They discovered the elimination of iron contamination to less than fourteen parts in ten thousand, coupled with the addition of controlled amounts of aluminum and cadmium, enhanced the anodes performance significantly.  The research yielded the US Naval Mil-Spec MIL-A-18001, the highest standard of anodes quality.
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
                <td>Iron (maximum)</td>
                <td>0.005%</td>
                <td>0.005%</td>
              </tr>
              <tr>
                <td>Lead (maximum)</td>
                <td>0.006%</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Copper (maximum)</td>
                <td>0.005%</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Silicon (maximum)</td>
                <td>0.125%</td>
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
                <th colSpan={"9"} className="py-4">
                  <h1>Reliance Zinc Cap Specifications</h1>
                </th>
              </tr>
              <tr className="uppercase">
                <th>Thread Size</th>
                <th colSpan={"6"}>Dimensions</th>
                <th colSpan={"2"}>Nominal Weight</th>
              </tr>
              <tr className="uppercase">
                <th>A</th>
                <th colSpan={"2"}>B</th>
                <th colSpan={"2"}>C</th>
                <th colSpan={"2"}>D</th>
                <th colSpan={"2"}></th>
              </tr>
              <tr>
                <th className="border-2 border-white text-center">
                  Reliance Zinc Cap - 6 oz
                </th>
                <th className="border-2 border-white border-r-0 text-center">
                  in
                </th>
                <th className="border-2 border-white border-l-0 text-center">
                  mm
                </th>
                <th className="border-2 border-white border-r-0 text-center">
                  in
                </th>
                <th className="border-2 border-white border-l-0 text-center">
                  mm
                </th>
                <th className="border-2 border-white border-r-0 text-center">
                  in
                </th>
                <th className="border-2 border-white border-l-0 text-center">
                  mm
                </th>
                <th className="border-2 border-white border-r-0 text-center">
                  lb
                </th>
                <th className="border-2 border-white border-l-0 text-center">
                  kg
                </th>
              </tr>

            </tbody>
          </table>
          <div className="flex mb-10">
          </div>
        </article>
      </main>
      </>
  )
}

export default milSpec