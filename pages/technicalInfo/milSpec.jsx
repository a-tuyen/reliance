import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"What is Mil-Spec?"} img={"bg-img2"} />
      </div>
      <main>
        <article className="bg-white mt-4 max-w-6xl mx-auto px-4 py-4">
          <h2>Understanding Mil-Spec: MIL-A-18001</h2>
          <h4>The Benchmark for Zinc Anode Quality</h4>
          <p className='mb-4'>
            In the early 1950s, the U.S. Naval Command partnered with the International Zinc Institute to investigate the inconsistent performance of zinc anodes in marine environments. Their research uncovered a key insight: <span className='font-bold'>even small amounts of iron contamination</span> in zinc (greater than 0.0014%) could cause <span className='font-bold'>passivation</span>—a condition where the anode becomes inactive and stops protecting the structure it’s attached to.
          </p>

          <p className='mb-4'>To address this, they developed the first U.S. military specification for zinc anodes: <span className='font-bold'>MIL-A-18001A.</span>
          </p>

          <h4>Why Anodes Used to Fail</h4>
          <p className='mb-4'>
            Before this specification, the effectiveness of sacrificial anodes was unpredictable. Two seemingly identical vessels using zinc anodes could have completely different corrosion outcomes. The issue?
          </p>
          <p className='mb-4'>
            Many zinc anodes weren’t staying electrochemically active over time. A dense film—mainly <span className='font-bold'>iron oxide</span>—would form on the surface, caused by <span className='font-bold'>excess iron in the zinc itself,</span> rendering the anode inert.
          </p>

          <h4>The Birth of MIL-A-18001</h4>
          <p className="pb-4">The new military spec required:</p>
          <ul className="list-disc pb-8">

            <li><span className='font-bold'>Maximum 0.0014% iron content</span></li>
            <li><span className='font-bold'>Strict limits on copper, silicon, and other impurities</span></li>
            <li>Use of <span className='font-bold'>Special High Grade (SHG) zinc</span>—the purest commercially available zinc</li>
            <li>Stringent manufacturing controls to prevent contamination during casting</li>
          </ul>
          <p className="pb-4">This created a reliable standard that dramatically improved the consistency and protection of zinc anodes in service.</p>

          <h4>Refinement Through Alloying</h4>
          <p className='mb-4'>
            Over time, metallurgists discovered that by <span className='font-bold'>adding controlled amounts of aluminum and cadmium,</span> anodes could tolerate slightly higher iron content—up to 0.005%—without passivating. These alloyed zinc anodes form a <span className='font-bold'>loosely adherent zinc oxide layer</span> that naturally sheds in water, exposing fresh metal and keeping the anode continuously active.
          </p>

          <h4>Why MIL-Spec Still Matters Today</h4>
          <p className='mb-4'>
            Only through continuous electrochemical activity can a zinc anode provide lasting protection. Anodes that don’t meet MIL-A-18001 risk being contaminated, underperforming, or worse—<span className='font-bold'>failing to protect your structure altogether.</span></p>
          <p className='mb-4'><span className='font-bold'>That’s why every Reliance Zinc Anode is certified to meet or exceed MIL-A-18001 standards—because when it comes to corrosion protection, there’s no room for compromise.</span></p>


          
          <table className='w-full border border-gray-300 text-gray-800 font-light">'>
            <tbody>
<tr>
  <th colspan={3} className='bg-white'><h4>US MIL-SPEC COMPOSITION</h4></th>
</tr>
              <tr>
                <th className="px-4 py-2 border-l-gray-200 bg-gray-200 text-gray-700">MATERIAL</th>
                <th className="px-4 py-2 border-b bg-gray-200 border-r-white border-l-white text-gray-700"><p>ZINC ALLOY</p><p>MIL-A-18001 & ASTM B-418 - TYPE 1</p></th>
                <th className="px-4 py-2 border-r-gray-200 bg-gray-200 text-gray-700"><p>ALUMINUM ALLOY</p><p>MIL-A-24779</p></th>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Cadmium (Cd)</td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">0.025% - 0.07%</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">Copper (Cu)</td>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">0.005% MAX</td>
                <td className="px-3 py-2 border-t border-gray-200">0.004% MAX</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Iron (Fe)</td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">0.005%</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">0.09%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">Indium (In)</td>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">-</td>
                <td className="px-3 py-2 border-t border-gray-200">0.014% - 0.020%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Lead (Pb)</td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">0.006% MAX</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">Magnesium (Mg)</td>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">-</td>
                <td className="px-3 py-2 border-t border-gray-200">0.001% MAX</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Silicon (Si)</td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">0.080% - 0.2%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">Aluminum (Al)</td>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">0.1% - 0.5%</td>
                <td className="px-3 py-2 border-t border-gray-200">REMAINDER</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Zinc (Zn)</td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">REMAINDER</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">4% - 6.5%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">Other</td>
                <td className="px-3 py-2 border-t border-gray-200 border-r-white">-</td>
                <td className="px-3 py-2 border-t border-gray-200">0.020% MAX</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white"></td>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">USE FOR SALT WATER ONLY</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">USE FOR SALT AND BRACKISH WATER</td>
              </tr>
            </tbody>
          </table>

        </article>
      </main>
    </>
  )
}

export default milSpec