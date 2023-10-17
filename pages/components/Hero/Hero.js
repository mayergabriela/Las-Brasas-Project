/***** REACT COMPONENTS  *****/
import React from "react";
/***** IMAGES IMPORTED  *****/
import Image from "next/image";
/*****  COMPONENTS  *****/
import Button from "../footer/Button";


const Hero = () => {
  return (
    <div className='bg-[url("/hero.png")] w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container max-w-[1240px] w-full h-full px-4 z-10 flex justify-center items-center">
        <div className="max-w-[60%] md:max-w-[70%] lg:max-w-[650px] mx-200 text-white text-center flex flex-col py-2">
          <div>
            <Image
              src="/images/logo.png"
              width={350}
              height={250}
              alt="Logo Las Brasas Cook"
              className="m-auto max-w-[100%]"
            />
            <h1 className="py-6 mt-6 tracking-wider text-md md:text-xl lg:text-2xl">
              Las Brasas Cook: Descubre un lugar donde el sabor auténtico de la
              parrilla cobra vida.
            </h1>
          </div>
          <div className="pt-6 m-2">
            <Button link="#" text="RESERVAR" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
