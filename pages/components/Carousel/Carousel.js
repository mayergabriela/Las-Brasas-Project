import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const Carousel = () => {
  return (
    <div className="w-5/6 mx-auto border-none my-5">
      <div className="my-14 mx-auto p-8">
        <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl uppercase ">
          <span className='border-b-2 border-yellow-500 inline-block'>
            Cono
          </span>
          ce nuestras especialidades
        </h1> 
      </div>


      <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/images/Brochette-Lomo.png"
                alt='img'
                width={800}
                height={540}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/brochette de pollo.jpg"
                width={800}
                height={540}
                alt="Brochette de Pollo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/verduras-las-brasas.png"
                width={800}
                height={540}
                alt="Verduras a las brasas"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/Sandwich-de-Bondiola.jpg"
                width={800}
                height={540}
                alt="Sándwich de Bondiola"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/Asado-de-Tira.png"
                width={800}
                height={540}
                alt="Asado de tira"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/Milanesa-con-fritas.jpg"
                width={800}
                height={540}
                alt="Milanesa con fritas"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/morrones-asados.jpg"
                width={800}
                height={540}
                alt="Morrones asados"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/cafe-con-leche.png"
                width={800}
                height={540}
                alt="Café con leche"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/brownie_helado.png"
                width={800}
                height={540}
                alt="Brownie helado"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/papa-a-la-provenzal.jpg"
                width={800}
                height={540}
                alt="Papas a la provenzal"
              />
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
