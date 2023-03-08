import Hero from '@/components/Hero'
import React from 'react'

const index = () => {
  return (
    <div className="bg-white flex flex-row md:flex-col">
      <Hero heading={"Our Products"} img={"bg-img2"} />
    </div>
  )
}

export default index