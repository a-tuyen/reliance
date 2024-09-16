import FaqItem from "@/components/FaqItem";
import Hero from "@/components/Hero";
import React from "react";
import Link from "next/link";

const faqData = [
  {
    question: "Are all zinc anodes the same?",
    answer:
      "No, all zinc anodes are not the same.  The chemical make-up of the alloy (or lack of alloy), has a significant effect on the anode's ability to protect a vessel.",
  },
  {
    question: "Which zinc is best?",
    answer:
      'The best zinc to use is the "MIL-Spec" alloy, which was developed by the US Navy back in the 1950\'s and has continued to this day with the most recent specification, A-18001-K.',
  },
  {
    question: "Why should I use Mil-Spec zinc?",
    answer:
      "The reason you should use Mil-Spec zinc is that it will consistently keep working by sacrificing itself so your boat's components will not corrode due to passivation.",
  },
  {
    question: "What is passivation?",
    answer:
      "Passivation means the anode stopped working or has reduced effectiveness.",
  },
  {
    question: "What causes passivation?",
    answer:
      "It is caused by a build-up of iron oxides that occur from the iron content in the anode.",
  },
  {
    question: "How can you help prevent the anodes from becoming passivated?",
    answer:
      "By insisting on Military Specification A-18001-K, you are insuring proper protection for your boat, as the alloy limits impurities and adds elements that allow the anode to properly scarifice itself at optimum efficiency.",
  },
  {
    question: "What would happen if I didn't use Mil-Spec zinc?",
    answer:
      'If Mil Spec zinc is not used on your vessel, you are risking components on your boat becoming "anodes", hence sacrificing themselves because of contamination in the zinc that\'s being used.  You, like the US Navy, have too much of an investment to take a chance with a product that may or may not get the job done.  Their research has given them the proper alloy to consistently provide adequate protection and predictable results.',
  },
  {
    question:
      "Some Anode manufacturers claim that their anodes last longer than all others.  Does that make sense?",
    answer:
      "No, it does not.  For Anodes to work properly they must be consumed.  If Anodes do not sacrifice themselves they are not functioning correctly.  If Anodes are passivated, serious corrosion damage could occur to the metal hull or other metal parts of the boat or ship causing several thousand dollars in damage.  The last thing a boat owner should want is for their anodes to last a long time.  The fact is, the anodes lifespan is governed by its weight.  If the consumption of the anode is slower, there is a considerable risk that the minimum voltage relative to the most susceptible metal component on the hull, may not be met, resulting in corrosion.",
  },
  {
    question:
      "Is it true some manufacturers use reclaimed Zinc in the production of their anodes?",
    answer:
      "Yes, apparently so.  This is not a good idea as one has no idea where the zinc originates and the manufacturer is taking great risk of producing contaminated anodes that do not perform.",
  },

];

const faq = () => {
  return (
    <div className="bg-white flex flex-col justify-center items">
      <Hero heading={"Frequently Asked Questions"} message={"Find the answers to all your corrosion questions here"} img={"bg-img4"} />

      <div className="flex flex-col ml-[20%] mr-[20%] mb-[8%]">
        {faqData.map((item, id) => (
          <FaqItem key={id} question={item.question} answer={item.answer} />
        ))}
        <div className='mt-[5%] flex flex-col justify-center items-center'>
          <h2>Certain Manufacturers claim the anodes they produce are 99.99% pure Zinc.  Does that make sense? </h2>
          <p>No, it  does not.  The fact is Anodes made with Mil Spec Zinc are not 99.99% pure zinc.  Mil Spec Zinc is alloyed to the following specifications:</p>

          <table>
            <tbody>
              <tr>
                <th colSpan={"2"} className="border-2 border-white py-4">
                  <h1>US MIL-SPEC COMPOSITION</h1>
                </th>
              </tr>
              <tr>
                <th>MATERIAL</th>
                <th><p>ZINC ALLOY</p><p>MIL-A-18001 & ASTM B-418 - TYPE 1</p></th>
              </tr>
              <tr>
                <td>Cadmium (Cd)</td>
                <td>0.025% - 0.07%</td>
              </tr>
              <tr>
                <td>Copper (Cu)</td>
                <td>0.005% MAX</td>
              </tr>
              <tr>
                <td>Iron (Fe)</td>
                <td>0.005%</td>
              </tr>
              <tr>
                <td>Lead (Pb)</td>
                <td>0.006% MAX</td>
              </tr>
              <tr>
                <td>Aluminum (Al)</td>
                <td>0.1%-0.5%</td>
              </tr>
              <tr>
                <td>Zinc (Zn)</td>
                <td>Remainder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default faq;
