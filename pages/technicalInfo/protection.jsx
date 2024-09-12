import Hero from '@/components/Hero'
import React from 'react'

const milSpec = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center">
        <Hero heading={"Boat Protection Basics"} img={"bg-img3"} />
      </div>
      <main>
        <article className="bg-white flex flex-col justify-center items-center">
          <h2>Considerations for Boat Protection</h2>
          <div>
            <h4>GALVANIC CORROSION</h4>
            <p className='mb-4'>
              When two or more dissimiliar metals are in contact with each other and immersed in an electroyte (a liquid that can conduct electricity), the more electrically active metal (less noble) will sacrifice itself by electron flow from the more negatively charged metal (the anode) to the more positively charged metal (the cathode).  Hence, for protection of metal fittings on boats as well as hulls and drive units, a comprehensive plan of protection needs to be employed.
            </p>

            <p className='mb-4'>By utilizing sacrificial anodes, these components will be protected because they are not corroding themselves with the loss of material as is the anode.  For example, on a steel hulled boat with brass fittings submerged underwater, the two metals provide the anode (steel) and cathode (brass).  The water completes the circuit just like a battery.  In this arrangement, the steel will deteriorate as it is less noble than the brass.  To protect both metals, a third metal is introduced that is less noble than the other two.  The metals widely used for this cathodic production are zinc, aluminum and magnesium.  Each element has characteristics that make them suitable for certain applications.</p>
            <p className='mb-4'>Factors that affect galvanic corrosion are the salinity of water, the pollutants present, the water flow rate, cavitation, oxygen content, temperature, etc.
            </p>
            <p className='mb-4'>
              Anodes are supplied in varying weights and sizes.  The surface area determines the amperage (current), which governs the amount of protection, and the weight determines the service life of the anodes.
            </p>

            <p className='mb-4'>
              As mentioned before, a metal that is more electrically active is less noble.  On the Noble Scale these are the approximate negative voltages from Least to Most Noble (referenced with a silver/silver chloride half cell):</p>
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

          <div className=''>Example:  If a zinc was protecting a brass fitting, the &quot;driving&quot; (or protecting) voltage would be:
            <p className='flex justify-center mt-1 mb-4'>( -1050 Zinc) - (-450 Brass) = -600 mV or -0.6 V.</p>
          </div>

          <p className='mb-6'>A general rule of thumb for cathodic protection is to provide a negative voltage that is at a minimum of -0.2V(-200mV) relative to the least noble metal being protected.  There is, however, the posiblity of over protection as well as under protection in certain situations.

            Over protection can cause damage in the form of alkali corrosion to aluminum, delignification to wooden hull (the breakdown of the fibres), and hull coatings (blistering).  This can occur, for example, if a magnesium anode is used on aluminum, in water that is polluted, brackish (in between fresh and seawater) or seawater resulting in too much voltage. Another cause is stray DC current from defective wiring or equipment.</p> 

          <h4>APPROXIMATE RECOMMENDED RANGE OF CATHODIC PROTECTION</h4>
          <ul className='mb-4'>
            <li>Wood Hull: -500 to -600 mV</li>
            <li>Fibreglass Hull: -550 to -900 mV</li>
            <li>Steel Hull: -800 to -1050 mV</li>
            <li>Non-metallic with Aluminum Drive: -900 to -1050 mV</li>
            <li>Aluminum Hull: -900 to -1100 mV</li>
          </ul>

          <p className='mb-4'>
            The ability to attain the -200 mv negative shift is dependent on the amount of current (amperage) the anode generates in relationship to the area of coverage.  This is determined by the anodes surface area and proximity to the metal being protected.

            Factors that cause current requirements to be higher are exposed areas (uncoated), water speed, and water temperature.  Pure zinc has a theoretical capacity of 372 Ampere Hours per pound.  That means at 1 amp, it would take 372 hours to consume a pound of zinc.  Now, zinc operates at about 95% efficiency so it would actually be approximately 353 Ampere Hours.

            On a steel hull, the current requirements for protection could be between .3 ma (milliamp) and 6 ma. per sq. ft. for submerged protection depending on coating quality or lack thereof and very little water flow.

            For aluminum hulls, this range could be between .5 ma. and 8 ma.

            So an example would be a Z26 (25lbs) putting out 2 amps would last approx. (25lbs x 353 amphrs/ 2 amps/24hrs) or 8825/2=4412.5/24 = 183.8 days.  Keep in mind that this is all theoretical and has many variables involved.  A good rule of thumb is to be ready to change the anode when it reaches 50% consumption.
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
                  <p>- Can be used with Fibreglass or Steel Hulls with Inboard Drives or Wood, Fibreglass, Aluminum and Steel Hulls with Outdrives.</p></td>
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
            A potentially serious problem can arise with a boat at dockside using shore power to the vessel.  The ground wire will connect all boats galvanically.  This means, if a boat alongside yours is also connected to shore power and he doesn't have anodes on his boat, then your boat will protect his as well.  After the anodes are consumed, the metal components which are higher on the Galvanic Scale will now start being consumed.  A galvanic isolator will remedy this by blocking the low voltage DC current flow that leads to this condition. (Attaches to the ground wire).
          </p>
          <h4>STRAY CURRENT</h4>
          <p className='mb-4'>It is recommended to test your boat for DC voltage leaks stray currents can emanate from within a boat (faulty or exposed wiring), from shore side fittings and / or cables, or from neighboring boats.  A leak can have a devastating effect because of accelerated electron flow.  Extreme causes can destroy hardware in a matter of hours.  It doesn't take much current to overwhelm the low level protection of the cathodic system.

            Basically, any metal that is feeding a current into the water will be ruined.  Wiring systems cannot have a path back to the source of power.

            Keep DC wires above water level in the bilge to avoid stray current and AC wires to avoid a shock hazard.

            Bonding system-to help prevent stray currents, all electrical and underwater metal components should be connected to the battery's negative terminal or it's bus thus equalizing the voltage between them.</p>
          <p className='mb-4'></p>
          <p className='mb-4'></p>


        </article>
      </main>
    </>
  )
}

export default milSpec