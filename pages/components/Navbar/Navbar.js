
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import logo from 'public/images/logo.png'


function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed bg-black/75 top-0 w-full h-20 z-[100]'>
            <div className='container mx-auto w-full h-full flex justify-between items-center px-2 2xl:px-16 py-4'> 
                <Link href={"/"} className='opacity-90 hover:opacity-50'>
                    <Image 
                        src={logo}
                        width={60} 
                        height={60} 
                        alt='Logo Las Brasas Cook' 
                    />
                </Link> 
                <div>
                    <ul className='hidden lg:flex gap-10 tracking-wider text-white opacity'>
                        <Link href={"/acercaDe"}>
                            <li className='opacity-90 hover:opacity-50'>ACERCA DE</li>
                        </Link>
                        <Link href={"/reservas"}>
                            <li className='opacity-90 hover:opacity-50'>RESERVAS</li>
                        </Link>
                        <Link href={"/cartaOnline"}>
                            <li className='opacity-90 hover:opacity-50'>CARTA ONLINE</li>
                        </Link>
                        <Link href={"/cartaTakeAway"}>
                            <li className='opacity-90 hover:opacity-50'>CARTA TAKE AWAY</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className='opacity-90 hover:opacity-50'>CONTACTO</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden md:flex justify-between items-center gap-3 px-4 py-1 opacity-90'>
                    <div className='flex items-center justify-between px-6 my-4 w-full gap-6'>
                        <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10]  p-2 cursor-pointer  hover:opacity-50 hover:scale-105 ease-in duration-300'>
                            <AiOutlineSearch fill='white'/> 
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2  cursor-pointer hover:opacity-50 hover:scale-105 ease-in duration-300'>
                            <BiSolidUser fill='white'/> 
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:opacity-50 hover:scale-105 ease-in duration-300'>
                            <FaShoppingCart fill='white'/> 
                        </div>   
                    </div>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu fill='white' size={25} />
                </div>
            </div>

            {/* Responsive Menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={logo}
                                width={60} 
                                height={60} 
                                alt='Logo Las Brasas Cook' 
                            />
                            <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer'>
                                <AiOutlineClose fill='white' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='py-8 flex flex-col '>
                        <ul className='py-4 uppercase'>
                            <Link href={"/acercaDe"}>
                                <li className='py-4 text-mg text-white opacity-90 hover:opacity-50'>ACERCA DE</li>
                            </Link>
                            <Link href={"/reservas"}>
                                <li className='py-4 text-mg text-white opacity-90 hover:opacity-50'>RESERVAS</li>
                            </Link>
                            <Link href={"/cartaOnline"}>
                                <li className='py-4 text-mg text-white opacity-90 hover:opacity-50'>CARTA ONLINE</li>
                            </Link>
                            <Link href={"/cartaTakeAway"}>
                                <li className='py-4 text-mg text-white opacity-90 hover:opacity-50'>CARTA TAKE AWAY</li>
                            </Link>
                            <Link href={"/contacto"}>
                                <li className='py-4 text-mg text-white opacity-90 hover:opacity-50'>CONTACTO</li>
                            </Link>
                        </ul>
                        <div className='p-30 mt-20'>
                            <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineSearch fill='white'/> 
                                </div>
                                <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BiSolidUser fill='white'/> 
                                </div>
                                <div className='rounded-full shadow-md shadow-gray-600 bg-[#EBAA10] p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaShoppingCart fill='white'/> 
                                </div>   
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Navbar