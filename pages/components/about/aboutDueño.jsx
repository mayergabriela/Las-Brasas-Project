import Image from "next/image";
import imageDueño2 from "public/images/aboutImage/Christian-img.png";
import imageDueño1 from "public/images/aboutImage/Chris_P_img.png";

export default function AboutDueño() {
  return (
    <>
      <section className="md:grid md:grid-cols-2 grid-rows-1 gap-4">

        <article className="grid place-items-center">
          <div className="sm:w-[635px] sm:h-[159px]">
            <h2 className="font-roboto text-2xl md:text-5xl font-normal leading-14 tracking-normal text-center p-[1rem]">
              EL DUEÑO
              <span className="border-b-2 border-yellow-500 inline-block">
                CRIST
              </span>
              IAN PETERSEN
            </h2>
          </div>
          <div className="sm:w-[500px]">
            <p className=" text-center font-nunito text-base font-normal p-2">
              Nació en 1969 en San Isidro, Buenos Aires. Su abuela Susana y su
              mamá Tatana le inculcaron el amor por la cocina.  Estudió con
              Alicia Berger y con “el Gato” Dumas, y se perfeccionó en el Ritz
              de París y en Le Cordon Bleu, Francia. Más tarde, completó su
              formación en la California Culinary Academy, Estados Unidos.  Hace
              asados desde su adolescencia, tanto para eventos exclusivos como
              para más de 4500 personas. Como emprendedor lidera diversos
              emprendimientos gastronómicos: El restaurant gastronómico Las
              Brasas Cook, en Buenos Aires. Durante la pandemia creó P_Milas,
              un catering de milanesas de alta calidad congeladas y, junto con
              Germán Torres, dirige la panadería de autor La Valiente. Además,
              es productor ganadero.  Trabaja en televisión desde hace más de
              veinte años (Utilísima, El Gourmet, Canal 13). Ganó dos premios
              Martín Fierro al Mejor Programa de Cocina por su labor televisiva.
            </p>
          </div>
        </article>
        <article className=" grid place-content-center sm:flex sm:flex-col">
          <div className="flex justify-center p-1">
            <Image
              src={imageDueño2}
              alt="dueño"
              width={300}
              height={200}
              layout="fixed"
            />
          </div>
          <div className="flex justify-center p-1">
            <Image
              src={imageDueño1}
              alt="perfil"
              width={300}
              height={200}
              layout="fixed"
            />
          </div>
        </article>
      </section>
    </>
  );
}
