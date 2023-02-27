import Hero from '@/components/Hero'
import React from 'react'

const index = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Hero heading={"Our Products"} img={"/../public/backgrounds/relianceBg3.jpeg"} />
    </div>
  )
}

export default index