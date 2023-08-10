import FaqItem from "@/components/FaqItem";
import Hero from "@/components/Hero";
import React from "react";

const faqData = [
  {
    question: "Are all zinc anodes the same?",
    answer:
      "No all zinc anodes are not the same.  The chemical make-up of the alloy (or lack of alloy), has a significant effect on the anodes ability to protect a vessel.",
  },
  {
    question: "Which zinc is best?",
    answer:
      'The best zinc to use is the "MIL-Spec" alloy, which was developed by the US Navy back in the 1950\'s and has continued to this day with the most recent specification A-18001-K.',
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
    question: "How can the anodes avoid becoming passivated?",
    answer:
      "By insisting on Military Specification A-18001-K, you are insuring proper protection for your boat, as the alloy limits impurities and adds elements that allow the anode to properly scarifice itself at optimum efficiency.",
  },
  {
    question:
      "Certain Manufacturers claim the anodes they produce are 99.99% pure Zinc.  Does that make sense? ",
    answer:
      "No, it  does not.  The fact is Mil Spec Anodes Zinc are not 99.99% pure zinc.  Mil Spec Zinc are constructed with the <Link href='https://blog.bitsrc.io/double-quotes-vs-single-quotes-vs-backticks-in-javascript-3cab5aaea55'></Link>"

  },
  {
    question: "What would happen if I didn't use Mil-Spec zinc?",
    answer:
      'If Mil Spec zinc is not used on your vessel, you are risking components on your boat becoming "anodes", hence sacrificing themselves because of contamination in the zinc that\'s being used.  The US Navy has too much of an investment, as you do, to take a chance with a product that may or may not get the job done.  Their research has given them the proper alloy to consistently provide adequate protection and predictable results.',
  },
  {
    question:
      "Some Anode manufacturers claim that their anodes last longer than all others.  Does that make sense?",
    answer:
      "No, it does not.  For Anodes to work properly they must be consumed.  If Anodes do not sacrifice themselves they are not functioning correctly.  If Anodes are passivated, serious corrosion damage could occur to the metal hull or other metal parts of the boat or ship causing several thousand dollars in damage.  The last thing a boat owner should want is for their anodes to last a long time.  The fact is, the anodes life span is governed by its weight.  If the consumption of the anode is slower, there is a considerable risk that the minimum voltage relative to the most susceptible metal component on the hull, may not be met, resulting in corrosion.",
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
      <Hero heading={"Frequently Asked Questions"} message={"This is a test"} img={"bg-img4"} />
      <div className="flex flex-col ml-[20%] mr-[20%]">
      {/* <FaqItem /> */}
      {faqData.map((item, id) => (
        <FaqItem key={id} question={item.question} answer={item.answer} />
      ))}
      </div>

    </div>
  );
};

export default faq;
