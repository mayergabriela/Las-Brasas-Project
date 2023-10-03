
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'


function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='fixed bg-transparent top-0 w-[100%] z-20'>
            <div className='container mx-auto flex justify-between items-center px-4 py-4'>
                <div className='flex items-center'>
                    <Link href={"/"} className='opacity-90 hover:opacity-50'>
                        <Image src='/images/las_brazas_cook(light).png' width={70} height={70} alt='Logo Las Brasas Cook' />
                    </Link>
                </div>
                <div className='hidden md:flex gap-10 tracking-wider text-white opacity'>
                    <Link href={"/acercaDe"} className='opacity-90 hover:opacity-50'>ACERCA DE</Link>
                    <Link href={"/reservas"} className='opacity-90 hover:opacity-50'>RESERVAS</Link>
                    <Link href={"/cartaOnline"} className='opacity-90 hover:opacity-50'>CARTA ONLINE</Link>
                    <Link href={"/cartaTakeAway"} className='opacity-90 hover:opacity-50'>CARTA TAKE AWAY</Link>
                    <Link href={"/contacto"} className='opacity-90 hover:opacity-50'>CONTACTO</Link>
                </div>
                <div className='hidden md:flex justify-between items-center gap-3 px-4 py-1 opacity-90 hover:opacity-50 text-white'>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} size={30} fill='white' className='md:hidden block' />
                ) : (
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} size={30} fill='white' className='md:hidden block'/>
                )} 
            </div>

            {/* Responsive Menu */}
            <div className={` duration-300md:hidden flex flex-col w-[70%] h-screen fixed bg-black/95 text-white top-[80px] ${toggle ? `left-[0]`:`left-[-100%]`} `}>
                <Link href={"/acercaDe"} className='opacity-90 hover:opacity-50 p-5'>ACERCA DE</Link>
                <Link href={"/reservas"} className='opacity-90 hover:opacity-50 p-5'>RESERVAS</Link>
                <Link href={"/cartaOnline"} className='opacity-90 hover:opacity-50 p-5'>CARTA ONLINE</Link>
                <Link href={"/cartaTakeAway"} className='opacity-90 hover:opacity-50 p-5'>CARTA TAKE AWAY</Link>
                <Link href={"/contacto"} className='opacity-90 hover:opacity-50 p-5'>CONTACTO</Link>
            </div>
        </div>
    )
}

export default Navbar