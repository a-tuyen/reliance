import Hero from '@/components/Hero';
import React from 'react';
import Image from "next/image";

const about = () => {
  return (
    <div className="bg-white w-[100%]"> 

      <Hero heading={"About Us"} img={"bg-img3"} />
      
      <article className='flex flex-col lg:flex-row justify-center items-center w-[100%]'>
        <div className='flex flex-col items-center lg:flex-row justify-center w-[100%]'>
        <div className="w-[90%] lg:w-[50%] lg:text-3xl tracking-wide font-thin flex flex-col">
          <h2 className='p-10 lg:pb-12'>A Legacy Cast in Metal</h2>
          <p>
          Reliance Anodes was founded in 1988 by Bob, continuing a family tradition that began in 1949. Three generations later, we’re still hands-on, quality-focused, and proudly manufacturing under conditions that prioritize people, process, and precision.
          </p>
          <p className="py-4 lg:py-8">
          We don’t just make anodes—we make them right. It’s a product of experience, of high standards, and of a belief that honest work should lead to something that lasts.
          </p>
          <p className="pb-12 lg:pb-20 italic">
          For us, it’s not just corrosion protection. It’s a piece of the Canadian dream—realized through craftsmanship, care, and doing the job right.
          </p>
        </div>
        <Image
        src="/about/anode-bot.jpg"
        width="300"
        height="300"
        className="mx-[10vw] lg:mx-[5vw] my-[10vw] lg:my-[10vw] rounded-xl"
      />
        </div>
      </article>
    

    </div>
  )
}

export default about