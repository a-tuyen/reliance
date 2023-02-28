import Hero from '@/components/Hero'
import React from 'react'
import SideBarPC from '@/components/SideBarPC'

const pleasureCraft = () => {
  return (
    <div className="bg-white flex flex-col justify-center">
      <Hero heading={"Pleasure Craft Anodes"} img={"bg-img1"} />
      <SideBarPC />
    </div>
  )
}

export default pleasureCraft