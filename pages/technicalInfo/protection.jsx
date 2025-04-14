import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"Boat Protection Basics"} img={"bg-img3"} />
      </div>
      <main>
        <article className="bg-white flex flex-col justify-center items-center mt-4 max-w-6xl mx-auto px-4 py-4">
          <h2>Considerations for Boat Protection</h2>
          <div>
            <h4 className="flex justify-center mt-4">Galvanic Corrosion: What It Is</h4>
            <p className='mb-4'>
              Galvanic corrosion is an electrochemical reaction that occurs when <span className='font-bold'>two or more dissimilar metals</span> are in contact and submerged in an <span className='font-bold'>electrolyte</span>—such as seawater or brackish water. This creates a galvanic cell, where electrical current flows between the metals.
            </p>
            <h4>How It Works</h4>
            <p className='mb-4'>In this system, the <span className='font-bold'>less noble</span> (more electrically active) metal becomes the <span className='font-bold'>anode</span> and sacrifices itself by corroding. It releases electrons that flow toward the <span className='font-bold'>more noble</span> metal, the <span className='font-bold'>cathode</span>, which is protected from corrosion.</p>

            <h4>Why It Matters for Boats</h4>
            <p className='mb-4'>Boats often contain a mix of metals—steel hulls, brass fittings, aluminum drives, etc.—all of which are at risk when submerged. Without proper protection, the less noble components will corrode quickly.
            </p>

            <h4>Sacrificial Anodes to the Rescue</h4>
            <p className='mb-4'>
              By installing <span className='font-bold'>sacrificial anodes</span> —typically made of <span className='font-bold'>zinc, aluminum, or magnesium</span> —the corrosion is redirected to the anode instead of valuable components.
            </p>

            <h4>Example:</h4>
            <p className='mb-4'>
              A <span className='font-bold'>steel hull</span> with <span className='font-bold'>brass fittings</span> in water will cause the steel to corrode. But with a zinc anode installed (which is less noble than both), the zinc corrodes instead, preserving both the steel and brass.
            </p>

            <h4>Choosing the Right Anode Material</h4>

            <ul className="list-disc pb-8">
              <p className='mb-4'>Each material has unique properties suited to specific marine environments.</p>
              <li><span className='font-bold'>Zinc</span> &rarr; Saltwater</li>
              <li><span className='font-bold'>Aluminum</span> &rarr; Salt or brackish water</li>
              <li><span className='font-bold'>Magnesium</span> &rarr; Freshwater only</li>
            </ul>

            <h4>Factors That Influence Corrosion</h4>

            <ul className="list-disc pb-8">
              <li>Water salinity</li>
              <li>Pollution levels</li>
              <li>Flow rate or turbulence</li>
              <li>Oxygen concentration</li>
              <li>Temperature</li>
              <li>Metal surface area and coatings</li>
            </ul>

            <h4>Anode Size & Lifespan</h4>
            <ul className="list-disc pb-8">
              <p className='mb-4'>Choosing the right size and number of anodes ensures long-term protection for your vessel’s components.</p>
              <li><span className='font-bold'>Surface area </span>determines how much protective current the anode provides.</li>
              <li><span className='font-bold'>Weight</span> determines how long the anode will last.</li>
            </ul>
            <h4>Understanding the Noble Scale</h4>
            <p className='mb-4'>
              The <span className='font-bold'>Noble Scale</span> ranks metals based on their electrochemical activity in an electrolyte (like seawater), using a <span className='font-bold'>silver/silver chloride half cell</span> as the reference point.</p>
            <p className='mb-4'>
              Metals that are <span className='font-bold'>more negative</span> on the scale are <span className='font-bold'>less noble</span> and more likely to corrode. Those that are <span className='font-bold'>more noble</span> (closer to 0 mV or positive) are less reactive and more resistant to corrosion.
            </p>
          </div>

          <table className='min-w-full border border-gray-300'>
            <tbody>
              <tr>
                <th colSpan={"2"} className="border-2 border-white py-4 bg-white">
                  <h3>NOBLE SCALE</h3>
                  <p>LEAST TO MOST NOBLE</p>
                </th>
              </tr>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border-b border-gray-200  text-gray-700">MILLIVOLTS</th>
                <th className="px-4 py-2 bg-gray-200 border-b border-gray-200  text-gray-700">METAL OR ALLOY</th>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-1580</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Magnesium</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">-1100</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  Aluminum with Indium
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-1050</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Zinc</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">-860</td>
                <td className="px-4 py-2 border-b border-gray-200">Cadmium</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-790</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Mild Steel</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">-750</td>
                <td className="px-4 py-2 border-b border-gray-200">Aluminum Stern Drive</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-500</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Tin</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">-450</td>
                <td className="px-4 py-2 border-b border-gray-200">Naval Brass</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-340</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Copper</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">-240</td>
                <td className="px-4 py-2 border-b border-gray-200">Lead</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">-80</td>
                <td className="px-4 py-2 border-b border-gray-200 bg-white">Silver</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-200">0</td>
                <td className="px-4 py-2 border-b border-gray-200">Gold</td>
              </tr>
            </tbody>
          </table>


          <h4>How to Read It</h4>
          <ul className="list-disc pb-8">
            <p className='mb-4'></p>
            <li>The more negative the value, the <span className='font-bold'>less noble</span> the metal—and the more likely it will corrode.</li>
            <li>The <span className='font-bold'>anode</span> should always be <span className='font-bold'>less noble</span> than the metal it’s protecting.</li>
          </ul>

          <h4>Voltage Example</h4>
          <p className='mb-4'>If you’re using <span className='font-bold'>zinc (-1050 mV)</span>  to protect <span className='font-bold'>brass (-450 mV)</span>:</p>
          <p className='mb-4 font-bold'> Zinc (-1050) – Brass (-450) = -600 mV</p>
          <p className='mb-4'>This <span className='font-bold'>-600 mV differential</span> is what drives cathodic protection, causing the zinc to corrode and the brass to remain untouched.</p>

          <h4>Target Voltage for Cathodic Protection</h4>
          <p className='mb-4'>To effectively protect metal components from galvanic corrosion, a <span className='font-bold'>negative voltage shift of at least -200 mV (or -0.2 V)</span> relative to the least noble metal in the system is generally required.</p>
          <p className='mb-4'>This ensures that current flows away from the protected metal and into the sacrificial anode.</p>

          <h4>The Risk of Overprotection</h4>
          <p className='mb-4'>Too much voltage can be just as harmful as too little. <span className='font-bold'>Overprotection</span> may lead to:</p>
          <ul className="list-disc pb-8">
            <li><span className='font-bold'>Alkali corrosion </span> in aluminum components</li>
            <li><span className='font-bold'>Delignification </span> in wooden hulls (breakdown of wood fibers)</li>
            <li><span className='font-bold'>Blistering</span> of protective coatings</li>
          </ul>
          <p className='mb-4'>One common cause is using a <span className='font-bold'>magnesium anode</span> in brackish or saltwater, where it generates too high a voltage. Another is <span className='font-bold'>stray DC current</span> from faulty wiring or equipment onboard or at the dock.</p>

          <div className="max-w-6xl mx-auto px-4 py-10">
            <h4 className="mb-4">Recommended Cathodic Protection Ranges</h4>

            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr>
                  <th className="px-4 py-2 bg-gray-200 border-b border-gray-200  text-gray-700">Hull or Component Type</th>
                  <th className="px-4 py-2 bg-gray-200 border-b border-gray-200  text-gray-700">Target Range (mV)</th>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Wood Hull</td>
                  <td className="px-4 py-2 border-b border-gray-200 bg-white">–500 to –600</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-t border-gray-200">Fibreglass Hull</td>
                  <td className="px-3 py-2 border-t border-gray-200">–550 to –900</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Steel Hull</td>
                  <td className="px-4 py-2 border-b border-gray-200 bg-white">–800 to –1050</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-t border-gray-200">Non-metallic Hull with Aluminum Drive</td>
                  <td className="px-3 py-2 border-t border-gray-200">–900 to –1050</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 border-r-white bg-white">Aluminum Hull</td>
                  <td className="px-4 py-2 border-b border-gray-200 bg-white">–900 to –1100</td>
                </tr>
              </tbody>
            </table>
          </div>


          <h4>What Determines Voltage Shift?</h4>
          <p className='mb-4'>Achieving proper protection depends on the amount of current the anode provides in relation to the <span className='font-bold'>area of metal exposed</span>. This is affected by:</p>
          <ul className="list-disc pb-8">
            <li><span className='font-bold'>Anode surface area</span> (which determines amperage)</li>
            <li><span className='font-bold'>Proximity</span> to the protected metal</li>
            <li><span className='font-bold'>Coating quality</span> on the hull</li>
            <li><span className='font-bold'>Water temperature and speed</span></li>
          </ul>

          <h4>Anode Capacity & Lifespan</h4>
          <p className='mb-4'>Pure zinc has a theoretical capacity of <span className='font-bold'>372 amp-hours per pound</span>, but in practice it runs at about <span className='font-bold'>95% efficiency</span> giving <span className='font-bold'>~353 Ah/lb.</span></p>
          <ul className="list-disc pb-8">
            <p className='mb-1 font-bold'>Example:</p>
            <p className='mb-2'>A 25 lb zinc anode (e.g., Z26) delivering 2 amps would last:</p>
            <li>25 lbs × 353 Ah = <span className='font-bold'>8,825 Ah</span></li>
            <li>8,825 Ah ÷ 2 amps = <span className='font-bold'>4,412.5 hours</span></li>
            <li>4,412.5 hours ÷ 24 = <span className='font-bold'>~184 days</span></li>
          </ul>

          <h4>Rule of Thumb:</h4>
          <p className='mb-4'>Be prepared to <span className='font-bold'>replace anodes when they reach 50% consumption </span>to maintain effective protection.</p>


          <section className="max-w-6xl mx-auto px-4 py-4">
            <h4>Types of Anodes & Best Applications</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-light text-gray-800">

              <div className="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 className="text-lg font-semibold mb-2 tracking-wide uppercase">Magnesium</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Most active on the Galvanic Scale</li>
                  <li>Best for <span className="font-medium">freshwater only</span></li>
                  <li>Inboard drives on fiberglass or steel hulls</li>
                  <li>Outdrives on wood, fiberglass, aluminum, or steel</li>
                  <li>Freshwater with stainless steel props</li>
                </ul>
                <p className="mt-3 text-orange-500 italic">⚠ May overprotect in salt or brackish water</p>
              </div>


              <div className="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 className="text-lg font-semibold mb-2 tracking-wide uppercase">Zinc</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Reliable in <span className="font-medium">saltwater</span></li>
                  <li>Preferred on wood hulls with inboards</li>
                  <li>Compatible with outboards and outdrives</li>
                  <li>Best when vessel stays in saltwater</li>
                </ul>
                <p className="mt-3 text-green-500 italic">✔ Traditional marine standard</p>
              </div>


              <div className="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 className="text-lg font-semibold mb-2 tracking-wide uppercase">Aluminum</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Versatile in <span className="font-medium">salt, brackish & freshwater</span></li>
                  <li>Ideal for aluminum sterndrives</li>
                  <li>Recommended for aluminum props in freshwater</li>
                  <li>Works with stainless steel props</li>
                </ul>
                <p className="mt-3 text-green-500 italic">✔ Long lifespan & wide compatibility</p>
              </div>

            </div>
          </section>


          <h4>Docked Vessels & Shore Power Corrosion</h4>
          <p className='mb-4 font-thin'>
            When a boat is connected to shore power, the <span className='font-bold'>ground wire</span> creates a shared electrical pathway between your vessel and others on the dock. If nearby boats aren’t properly protected with anodes, your boat’s system can end up doing the work—<span className='font-bold'>protecting theirs at the expense of your own</span>.
          </p>
          <p>Over time, this causes your anodes to deplete faster. Once they’re consumed, your boat’s underwater metals—especially those higher on the galvanic scale—are left vulnerable to corrosion.</p>


          <h4>How to Prevent It</h4>
          <p className='mb-4 font-thin'>
            The most effective solution is to install a <span className='font-bold'>galvanic isolator</span> on the shore power ground wire. This device blocks <span className='font-bold'>low-voltage DC current</span>, which is responsible for dockside galvanic corrosion, while still maintaining the essential safety grounding required for your electrical system.
          </p>
          <p>With a galvanic isolator in place, your anodes will continue protecting your vessel—and only your vessel.</p>

          <h4 className='mt-6'>Stray Current Corrosion: A Hidden Threat</h4>
          <p className='mb-4'>Stray current corrosion is one of the most aggressive and destructive forms of marine corrosion. Unlike galvanic corrosion, it doesn’t require two dissimilar metals—it happens when <span className='font-bold'> unintended electrical current enters the water</span> and begins to attack any nearby metal.</p>
          <p className='mb-4'>Even a small DC voltage leak can completely <span className='font-bold'>override your anode system.</span> In severe cases, stray current can destroy metal hardware in a matter of hours.</p>

          <h4>Common Sources of Stray Current</h4>
            <ul className="list-disc pb-8">
              <li>Faulty or exposed DC wiring inside the boat</li>
              <li>Improperly grounded shore power systems</li>
              <li>Electrical leaks from neighboring vessels or marina infrastructure</li>
            </ul>

            <h4>How to Protect Against It</h4>
            <ul className="list-disc pb-8">
              <li>Test your boat regularly for <span className='font-bold'>DC voltage leaks</span></li>
              <li>Keep <span className='font-bold'>DC wiring above the bilge</span> to prevent water contact</li>
              <li>Ensure <span className='font-bold'>AC systems</span> are properly insulated to reduce the risk of electric shock</li>
              <li>Use a proper <span className='font-bold'>bonding system</span>:
                <p>All electrical and underwater metal components should be connected to the <span className='font-bold'>battery&apos;s negative terminal or its ground bus</span>, equalizing voltage across the system and minimizing current flow into the water</p>
              </li>
            </ul>

        </article>
      </main>
    </>
  )
}

export default milSpec