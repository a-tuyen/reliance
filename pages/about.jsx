import Hero from '@/components/Hero'
import React from 'react'

const about = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Hero heading={"About Us"} img={"/../public/backgrounds/relianceBg2.jpeg"} />
    </div>
  )
}

export default about