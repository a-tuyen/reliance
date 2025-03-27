import Hero from '@/components/Hero';
import React from 'react';
import Image from "next/image";

const about = () => {
  return (
    <div className="bg-white flex flex-col">
      <Hero heading={"About Us"} img={"bg-img3"} />
      
      <article className='flex lg:flex-row items-center justify-center ml-[10%] mt-[10%] lg:mt-[5%]'>
        <div className="text-xl w-[90%] lg:w-[50%] lg:text-3xl tracking-widest font-thin flex flex-col">
          <p>
            Reliance Anodes is a brand of Metal Distributors, a metal fabrication company that has been in operation since 1949. In 1988, we started our Pressure Die-casting Division, called Reliance Anodes, producing sacrificial anodes in Aluminum and Zinc Alloys. Since then, Reliance Anodes has earned a reputation for our high quality die-casting and machined components.
          </p>
          <p className="pt-4">
            We proudly manufacture our anodes in Canada and only source our raw materials reputable sources. All our anodes meet Mil-Spec standards and are crafted with care and precision. By choosing Reliance Anodes, you can trust that your investment is properly protected.
          </p>
        </div>
        <Image
        src="/about/anode-bot.jpg"
        width="300"
        height="300"
        className="mx-[10vw] my-[10vw] lg:mx-[5vw] lg:my-[10vw] rounded-xl"
      />
      </article>

    </div>
  )
}

export default about