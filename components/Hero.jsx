import React from 'react'

const Hero = ({heading, message}) => {
    return (

        <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover bg-img1'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
            <div className='flex flex-col items-center p-5 text-white z-[2] mt-[10rem]'>
                <h2 className='text-6xl text-white font-boldHeading tracking-wider text-center'>{heading}</h2>
                <p className='flex justify-center w-[70%] py-10 text-3xl text-white text-center font-thin'>{message}</p>
            </div>
        </div>
    )
    
}

export default Hero;

