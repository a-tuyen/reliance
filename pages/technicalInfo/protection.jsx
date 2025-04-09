import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"Boat Protection Basics"} img={"bg-img3"} />
      </div>
      <main>
        <article className="bg-white flex flex-col justify-center items-center mt-4">
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

          <table className='mb-2'>
            <tbody>
              <tr>
                <th colSpan={"2"} className="border-2 border-white py-4">
                  <h1>NOBLE SCALE</h1>
                  <p>LEAST TO MOST NOBLE</p>
                </th>
              </tr>
              <tr>
                <th>MILLIVOLTS</th>
                <th>METAL OR ALLOY</th>
              </tr>
              <tr>
                <td>-1580</td>
                <td>Magnesium</td>
              </tr>
              <tr>
                <td>-1100</td>
                <td>
                  Aluminum with Indium
                </td>
              </tr>
              <tr>
                <td>-1050</td>
                <td>Zinc</td>
              </tr>
              <tr>
                <td>-860</td>
                <td>Cadmium</td>
              </tr>
              <tr>
                <td>-790</td>
                <td>Mild Steel</td>
              </tr>
              <tr>
                <td>-750</td>
                <td>Aluminum Stern Drive</td>
              </tr>
              <tr>
                <td>-500</td>
                <td>Tin</td>
              </tr>
              <tr>
                <td>-450</td>
                <td>Naval Brass</td>
              </tr>
              <tr>
                <td>-340</td>
                <td>Copper</td>
              </tr>
              <tr>
                <td>-240</td>
                <td>Lead</td>
              </tr>
              <tr>
                <td>-80</td>
                <td>Silver</td>
              </tr>
              <tr>
                <td>0</td>
                <td>Gold</td>
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

            <table className="w-full border border-gray-300 text-gray-800 font-light">
              <tbody>
                <tr className="bg-gray-100 text-left">
                  <th className="px-3 py-2 border-b border-gray-300">Hull or Component Type</th>
                  <th className="px-3 py-2 border-b border-gray-300">Target Range (mV)</th>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 border-t border-gray-200">Wood Hull</td>
                  <td className="px-3 py-2 border-t border-gray-200">–500 to –600</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 border-t border-gray-200">Fibreglass Hull</td>
                  <td className="px-3 py-2 border-t border-gray-200">–550 to –900</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 border-t border-gray-200">Steel Hull</td>
                  <td className="px-3 py-2 border-t border-gray-200">–800 to –1050</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 border-t border-gray-200">Non-metallic Hull with Aluminum Drive</td>
                  <td className="px-3 py-2 border-t border-gray-200">–900 to –1050</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 border-t border-gray-200">Aluminum Hull</td>
                  <td className="px-3 py-2 border-t border-gray-200">–900 to –1100</td>
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


          <section class="max-w-6xl mx-auto px-4 py-4">
            <h3 class="tracking-wide mb-6">Types of Anodes & Best Applications</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-light text-gray-800">


              <div class="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 class="text-lg font-semibold text-gray-700 mb-2 tracking-wide uppercase">Magnesium</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Most active on the Galvanic Scale</li>
                  <li>Best for <span class="font-medium">freshwater only</span></li>
                  <li>Inboard drives on fiberglass or steel hulls</li>
                  <li>Outdrives on wood, fiberglass, aluminum, or steel</li>
                  <li>Freshwater with stainless steel props</li>
                </ul>
                <p class="mt-3 text-xs text-yellow-700 italic">⚠ May overprotect in salt or brackish water</p>
              </div>


              <div class="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 class="text-lg font-semibold text-gray-700 mb-2 tracking-wide uppercase">Zinc</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Reliable in <span class="font-medium">saltwater</span></li>
                  <li>Preferred on wood hulls with inboards</li>
                  <li>Compatible with outboards and outdrives</li>
                  <li>Best when vessel stays in saltwater</li>
                </ul>
                <p class="mt-3 text-xs text-gray-600 italic">✔ Traditional marine standard</p>
              </div>


              <div class="border border-gray-200 p-5 rounded-md shadow-sm bg-white">
                <h3 class="text-lg font-semibold text-gray-700 mb-2 tracking-wide uppercase">Aluminum</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Versatile in <span class="font-medium">salt, brackish & freshwater</span></li>
                  <li>Ideal for aluminum sterndrives</li>
                  <li>Recommended for aluminum props in freshwater</li>
                  <li>Works with stainless steel props</li>
                </ul>
                <p class="mt-3 text-xs text-green-700 italic">✔ Long lifespan & wide compatibility</p>
              </div>

            </div>
          </section>





          <h4 className='mt-6'>TYPES OF ANODES AND APPLICATIONS</h4>
   

          <h4>DOCKED VESSELS</h4>
          <p className='mb-4'>
            A potentially serious problem can arise with a boat at dockside using shore power to the vessel.  The ground wire will connect all boats galvanically.  This means that if a boat alongside yours is also connected to shore power and he doesn&apos;t have anodes on his boat, then your boat will protect his as well.  After the anodes are consumed, the metal components which are higher on the Galvanic Scale will now start being consumed.  A galvanic isolator will remedy this by blocking the low voltage DC current flow that leads to this condition. (Attaches to the ground wire).
          </p>
          <h4>STRAY CURRENT</h4>
          <p className='mb-4'>It is recommended to test your boat for DC voltage leaks. Stray currents can emanate from within a boat (faulty or exposed wiring), from shoreside fittings and / or cables, or from neighbouring boats.  A leak can have a devastating effect because of accelerated electron flow.  Extreme cases can destroy hardware in a matter of hours.  It doesn&apos;t take much current to overwhelm the low level protection of the cathodic system.

            Basically, any metal that is feeding a current into the water will be ruined.  Wiring systems cannot have a path back to the source of power.

            Keep DC wires above water level in the bilge to avoid stray current and AC wires to avoid a shock hazard.

            Bonding system-to help prevent stray currents, all electrical and underwater metal components should be connected to the battery&apos;s negative terminal or it&apos;s bus thus equalizing the voltage between them.</p>
          <p className='mb-4'></p>
          <p className='mb-4'></p>

        </article>
      </main>
    </>
  )
}

export default milSpec