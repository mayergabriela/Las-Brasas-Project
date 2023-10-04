import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'


const Hero = () => {
    return (
        <div className='bg-[url("/hero.png")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='container mx-auto px-4 z-10'>
                <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
                    <div>
                        <Image src='/images/las_brazas_cook(light).png' width={350} height={270} alt='Logo Las Brasas Cook' />
                        <h1>Las Brasas Cook:  Descubre un lugar donde el sabor auténtico de la parrilla cobra vida.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero