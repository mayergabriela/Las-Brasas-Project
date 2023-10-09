
import React from 'react'

const Button = ({link, text}) => {
    return (
        <a href={link} className='btn text-white bg-[#EBAA10] hover:bg-[#2c2c2c] hover:text-[#EBAA10] font-bold rounded-full text-md md:text-xl px-6 py-3 text-center mr-2 mb-2 transition duration-300'>{text}</a>     
    );
};

export default Button