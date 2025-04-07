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

          <h4>How to Read It</h4>
          <ul className="list-disc pb-8">
            <p className='mb-4'></p>
            <li>The more negative the value, the <span className='font-bold'>less noble</span> the metal—and the more likely it will corrode.</li>
            <li>The <span className='font-bold'>anode</span> should always be <span className='font-bold'>less noble</span> than the metal it’s protecting.</li>
          </ul>

          <h4>Voltage Example</h4>
            <p className='mb-4'>If you’re using <span className='font-bold'>zinc (-1050 mV)</span>  to protect <span className='font-bold'>brass (-450 mV)</span>:</p>
            <p className='mb-4 font-bold'> Zinc (-1050) – Brass (-450) = -600 mV</p>
            <p className='mb-4'>This -600 mV differential is what drives cathodic protection, causing the zinc to corrode and the brass to remain untouched.</p>


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




          <p className='mb-6'>A general rule of thumb for cathodic protection is to provide a negative voltage that is at a minimum of -0.2V(-200mV) relative to the least noble metal being protected.  There is, however, the possiblity of overprotection as well as under-protection in certain situations.

            Overprotection can cause damage in the form of alkali corrosion to aluminum, delignification to wooden hull (the breakdown of the fibres), and hull coatings (blistering).  This can occur, for example, if a magnesium anode is used on aluminum, in water that is polluted, brackish (in between fresh and seawater) or seawater resulting in too much voltage. Another cause is stray DC current from defective wiring or equipment.</p>

          <h4>APPROXIMATE RECOMMENDED RANGE OF CATHODIC PROTECTION</h4>
          <ul className='mb-4'>
            <li>Wood Hull: -500 to -600 mV</li>
            <li>Fibreglass Hull: -550 to -900 mV</li>
            <li>Steel Hull: -800 to -1050 mV</li>
            <li>Non-metallic with Aluminum Drive: -900 to -1050 mV</li>
            <li>Aluminum Hull: -900 to -1100 mV</li>
          </ul>

          <p className='mb-4'>
            The ability to attain the -200 mv negative shift is dependent on the amount of current (amperage) the anode generates in relationship to the area of coverage.  This is determined by the anode&apos;s surface area and proximity to the metal being protected.

            Factors that cause current requirements to be higher are exposed areas (uncoated), water speed, and water temperature.  Pure zinc has a theoretical capacity of 372 Ampere-Hours(Ah) per pound.  That means at 1 amp, it would take 372 hours to consume a pound of zinc.  Now, zinc operates at about 95% efficiency so it would actually be approximately 353 amp-hours.

            On a steel hull, the current requirements for protection could be between .3 ma (milliamp) and 6 ma. per sq. ft. for submerged protection depending on coating quality or lack thereof and very little water flow.

            For aluminum hulls, this range could be between .5 ma. and 8 ma.

            So an example would be a Z26 (25lbs) putting out 2 amps would last approx. (25lbs x 353 amp-hrs / 2 amps / 24hrs) or 8825 / 2 = 4412.5 / 24 = 183.8 days.  Keep in mind that this is all theoretical and has many variables involved.  A good rule of thumb is to be ready to change the anode when it reaches 50% consumption.
          </p>

          <h4 className='mt-6'>TYPES OF ANODES AND APPLICATIONS</h4>
          <table>
            <tbody>
              <tr>
                <th>ANODE TYPE</th>
                <th>BEST USES</th>
              </tr>
              <tr>
                <td className=' font-bold'>MAGNESIUM ANODES</td>
                <td className='text-left p-1'><p>- These are the most active anodes on the Galvanic Scale (least Noble) and are recommended only for use in pure fresh water. They can easily overprotect in any other kind of water.</p>
                  <p>- Can be used with Fibreglass or Steel Hulls with Inboard Drives or Wood, Fibreglass, Aluminum and Steel Hulls with Outdrives.</p>
                  <p>- <span className="font-bold">In fresh water with Stainless Steel Propeller</span> - Either Magnesium or Aluminum Anodes work</p></td>
              </tr>
              <tr>
                <td className=' font-bold'>ZINC AND ALUMINUM ANODES</td>
                <td className='text-left p-1'><p>- These are generally suitable for all water conditions but there are preferences depending on hull/drive type:</p>
                  <p>- <span className="font-bold">Wood Hull with Inboard</span> - Zinc Anodes are preferable</p>
                  <p>- <span className="font-bold">Wood Hull with Outdrive or Outboard</span> - Either Zinc or Aluminum Anodes work</p>
                  <p>- <span className="font-bold">Aluminum Sterndrives </span> - Aluminum Anodes preferred. The type of aluminum in the anodes is less noble than the aluminum in the Sterndrive.</p>
                  <p>- <span className="font-bold">In fresh water with Aluminum Propeller</span> - Aluminum anodes preferred. </p>
                  <p>- <span className="font-bold">In fresh water with Stainless Steel Propeller</span> - Either Magnesium or Aluminum Anodes work</p>
                </td>
              </tr>
            </tbody>
          </table>

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