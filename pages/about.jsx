import Hero from '@/components/Hero';
import React from 'react';
import Image from "next/image";

const about = () => {
  return (
    <div className="bg-white flex flex-col">
      <Hero heading={"About Us"} img={"bg-img3"} />
      
      <article className='flex lg:flex-row items-center justify-center ml-[10%] mt-[10%] lg:mt-[1%]'>
        <div className="text-xl w-[90%] lg:w-[50%] lg:text-3xl tracking-widest font-thin flex flex-col">
          <h3 className='pb-4'>A Legacy Cast in Metal</h3>
          <p>
          Reliance Anodes was founded in 1988 by Bob, continuing a family tradition that began in 1949. Three generations later, we’re still hands-on, quality-focused, and proudly manufacturing under conditions that prioritize people, process, and precision.
          </p>
          <p className="pt-4">
          We don’t just make anodes—we make them right. It’s a product of experience, of high standards, and of a belief that honest work should lead to something that lasts.
          </p>
          <p className="pt-4 italic">
          For us, it’s not just corrosion protection. It’s a piece of the Canadian dream—realized through craftsmanship, care, and doing the job right.
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