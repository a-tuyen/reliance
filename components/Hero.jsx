import React from 'react'
import Image from 'next/image'

const Hero = ({heading, message}) => {
    return (

        <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]'/>
            <div className='flex flex-col items-center p-5 text-white z-[2] mt-[10rem]'>
                <h2 className='text-6xl text-white font-boldHeading tracking-wider text-center'>{heading}</h2>
                {/* <div className='flex justify-center py-10'>
                <Image  src='https://user-images.githubusercontent.com/77664153/218575157-76eeb38c-3faa-40dd-ad1b-4e1b79979718.png' width="300" height="350"/>
                </div> */}
                <p className='flex justify-center w-[70%] py-10 text-3xl text-white text-center font-thin'>{message}</p>
                {/* <button className=' px-8 py-2 border'>Enter</button> */}
            </div>
        </div>
    )
    
}

export default Hero;


{/* <h2 className='text-5xl text-white'>{heading}</h2>
<div className='flex justify-center py-10'>
<Image  src='https://user-images.githubusercontent.com/77664153/218575157-76eeb38c-3faa-40dd-ad1b-4e1b79979718.png' width="300" height="350"/>
</div>
<h2 className='flex justify-center py-10 text-5xl text-white'>{message}</h2>
<button className=' px-8 py-2 border'>Enter</button> */}