/***** REACT COMPONENTS  *****/
import Image from "next/image";
import React from "react";
/***** LIBRARIES IMPORTED  *****/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="w-5/6 h-full mx-auto my-32 border-none">
      <div className="p-8 mx-auto my-16">
        <h1 className="text-3xl font-medium text-center uppercase md:text-4xl lg:text-6xl my-14 ">
          <span className="inline-block border-b-2 border-yellow-500">
            Cono
          </span>
          ce nuestras especialidades
        </h1>
      </div>

      <div className="my-32 lg:my-38">
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
              alt="Brochette de Lomo"
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
              src="/images/Sandwich-de-Pollo.jpg"
              width={800}
              height={540}
              alt="Sandwich de Pollo"
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
              src="/images/pure-calabaza.jpg"
              width={800}
              height={540}
              alt="Puré de Calabaza"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/fideos-tuco.jpg"
              width={800}
              height={540}
              alt="Fideos con tuco"
            />
            <style jsx>{`
            Image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            `}</style>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
