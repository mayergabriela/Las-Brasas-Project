import Image from "next/image";
import imageDueño2 from "public/images/aboutImage/Christian-img.png";
import imageDueño1 from "public/images/aboutImage/Chris_P_img.png";

export default function AboutDueño() {
  return (
    <section className="">
      <div>
        <h2 className="font-roboto text-2xl md:text-5xl font-normal leading-14 tracking-normal text-center p-[1rem]">
          EL DUEÑO{" "}
          <span className="border-b-2 border-yellow-500 inline-block">
            CRIST
          </span>
          IAN PETERSON
        </h2>
      </div>
      <div>
        <p className=" text-center font-nunito text-base font-normal">
          Nació en 1969 en San Isidro, Buenos Aires. Su abuela Susana y su mamá
          Tatana le inculcaron el amor por la cocina.  Estudió con Alicia Berger
          y con “el Gato” Dumas, y se perfeccionó en el Ritz de París y en Le
          Cordon Bleu, Francia. Más tarde, completó su formación en la
          California Culinary Academy, Estados Unidos.  Hace asados desde su
          adolescencia, tanto para eventos exclusivos como para más de 4500
          personas. Como emprendedor lidera diversos emprendimientos
          gastronómicos: El restaurant gastronómico Las Brasas Cook, en Buenos
          Aires. Durante la pandemia creó P_Milas, un catering de milanesas de
          alta calidad congeladas y, junto con Germán Torres, dirige la
          panadería de autor La Valiente. Además, es productor ganadero.
           Trabaja en televisión desde hace más de veinte años (Utilísima, El
          Gourmet, Canal 13). Ganó dos premios Martín Fierro al Mejor Programa
          de Cocina por su labor televisiva.
        </p>
      </div>
      <article>
        <Image src={imageDueño2}
        alt="dueño"
        />
      </article>
      <article>
        <Image src={imageDueño1}
        alt="perfil"
        />
      </article>
    </section>
  );
}
