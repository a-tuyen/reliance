import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"What is Mil-Spec?"} img={"bg-img2"} />
      </div>
      <main>
        <article className="bg-white flex flex-col justify-center items">
          <h2>Understanding &quot;Mil-Spec: MIL-A-18001&quot;</h2>
          <p className='mb-4'>
            In the early 1950s, the United States Naval Command joined forces with the International Zinc Institute to research and improve the performance of common zinc as a sacrificial anode.  They discovered the elimination of iron contamination to less than fourteen parts in ten thousand, coupled with the addition of controlled amounts of aluminum and cadmium, enhanced the anodes performance significantly.  The research yielded the US Naval Mil-Spec MIL-A-18001, the highest standard of anodes quality.
          </p>

          <p className='mb-4'>Prior to the mid 1950's, corrosion prevention for underwater hulls and fittings, based on zinc sacrificial anodes. was quite unreliable.  No one could explain why one vessel using these anodes would suffer little to no corrosion of its underwater metals while another similar vessel using zinc anodes that appeared to be the same would receive extensive corrosion damage.  Subsequent studies indicated that some zinc anodes did not remain electrochemically active, becoming relatively inert (passivated) over time due to a buildup of a dense, tightly adherent film on the zinc's surface.  The passivating film was mainly made of iron oxide and the source of the iron was the elemental iron present in the zinc when the anodes were manufactured.
</p>
          <p className='mb-4'>  
            These studies determined that the maximum allowable iron content for reliable sacrificial zinc anode performance was 0.0014%.  Hence, the first U.S. Military zinc anode specification, A18001A, was born.  This specification also limited several other contaminating elements such as copper and silicon, but excessive iron was the main cause of anode passivation.  To produce anodes that met the specification, manufacturers had to start with the purest grade of zinc available from the smelters (Special High Grade) and not contaminate it while producing the anodes.  This was, and is, very difficult to do.
            </p>
            <p className='mb-4'>
            Work continued on the problem over the years with metallurgists seeking an alloy that would perform as or more reliably than Super High Grade zinc and be easier to produce.  They discovered that by alloying the zinc with small amounts of certain elements and cadmium, an increased amount of iron could be tolerated.  So the sacrificial anode specification was changed to allow an increase in the iron content to 0.005%.  Zinc anodes meeting this new specification and all of the subsequent specifications form a loosely adherent film that is principally zinc oxide.  This film readily sloughs off the anode's surface to expose fresh zinc alloy to the water, allowing the anode to be continuously electrochemically active.  Thus, the zinc will not passivate.  It is only through continuously electro chemical action at its surface that a zinc anode can provide corrosion protection for the metal structure to which it is attached.  Installing zinc anodes that are not certified to meet the current U.S. Military Specification runs the risk that the anodes will be contaminated and will fail to protect the metals to which they are attached.
          </p>

          <table>
            <tbody>
              <tr>
                <th colSpan={"3"} className="border-2 border-white py-4">
                  <h1>US MIL-SPEC COMPOSITION</h1>
                </th>
              </tr>
              <tr>
                <th>MATERIAL</th>
                <th><p>ZINC ALLOY</p><p>MIL-A-18001 & ASTM B-418 - TYPE 1</p></th>
                <th><p>ALUMINUM ALLOY</p><p>MIL-A-24779</p></th>
              </tr>
              <tr>
                <td>Cadmium (Cd)</td>
                <td>0.025% - 0.07%</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Copper (Cu)</td>
                <td>0.005% MAX</td>
                <td>0.004% MAX</td>
              </tr>
              <tr>
                <td>Iron (Fe)</td>
                <td>0.005%</td>
                <td>0.09%</td>
              </tr>
              <tr>
                <td>Indium (In)</td>
                <td>-</td>
                <td>0.014% - 0.020%</td>
              </tr>
              <tr>
                <td>Lead (Pb)</td>
                <td>0.006% MAX</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Magnesium (Mg)</td>
                <td>-</td>
                <td>0.001% MAX</td>
              </tr>
              <tr>
                <td>Silicon (Si)</td>
                <td>-</td>
                <td>0.080% - 0.2%</td>
              </tr>
              <tr>
                <td>Aluminum (Al)</td>
                <td>0.1%-0.5%</td>
                <td>REMAINDER</td>
              </tr>
              <tr>
                <td>Zinc (Zn)</td>
                <td>Remainder</td>
                <td>4%-6.5%</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>-</td>
                <td>0.020% MAX</td>
              </tr>
              <tr>
                <td></td>
                <td>USE FOR SALT WATER ONLY</td>
                <td>USE FOR SALT AND BRACKISH WATER</td>
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