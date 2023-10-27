/***** REACT COMPONENTS  *****/
import Image from "next/image";
/***** IMAGES IMPORTED  *****/
import imageDueño2 from "public/images/aboutImage/Christian-img.png";
import imageDueño1 from "public/images/aboutImage/Chris_P_img.png";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

export default function AboutDueño() {
  const data = useContext(ThemeContext);

  const [ theme ] = data;
  return (
      
    <div className={theme}>
      <section className="grid-rows-1 gap-4 mt-20 md:grid md:grid-cols-2">

        <article className="grid place-items-center">
          <div className="sm:w-[635px] sm:h-[159px]">
            <h1 className="font-roboto text-3xl lg:text-5xl md:text-4xl font-normal leading-14 tracking-normal text-center p-[1rem]">
              EL DUEÑO
            </h1>
            <h2 className="tracking-wider text-center lg:text-5xl md:text-4xl text-3xl">
              <span className="inline-block border-b-2 border-yellow-500">
                CRIST
              </span>
              IAN PETERSEN
            </h2>
          </div>
          <div className="lg:w-[800px] w-[500px] my-5">
            <p className="p-2 lg:text-2xl text-xl font-normal text-justify font-nunito">
              Nació en 1969 en San Isidro, Buenos Aires. Su abuela Susana y su
              mamá Tatana le inculcaron el amor por la cocina.
            </p>
            <p className="p-2 lg:text-2xl text-xl font-normal text-justify font-nunito">
              Estudió con Alicia Berger y con “el Gato” Dumas, y se perfeccionó
              en el Ritz de París y en Le Cordon Bleu, Francia. Más tarde,
              completó su formación en la California Culinary Academy, Estados
              Unidos.
            </p>
            <p className="p-2 lg:text-2xl text-xl font-normal text-justify font-nunito">
              Hace asados desde su adolescencia, tanto para eventos exclusivos
              como para más de 4500 personas. Como emprendedor lidera diversos
              emprendimientos gastronómicos: El restaurant gastronómico Las
              Brasas Cook, en Buenos Aires. Durante la pandemia creó P_Milas, un
              catering de milanesas de alta calidad congeladas y, junto con
              Germán Torres, dirige la panadería de autor La Valiente. Además,
              es productor ganadero.
            </p>
            <p className="p-2 lg:text-2xl text-xl font-normal text-justify font-nunito">
              Trabaja en televisión desde hace más de veinte años (Utilísima, El
              Gourmet, Canal 13). Ganó dos premios Martín Fierro al Mejor
              Programa de Cocina por su labor televisiva.
            </p>
          </div>
        </article>
        <article className="grid place-content-center sm:flex sm:flex-col">
          <div className="flex justify-center p-1">
            <Image
              src={imageDueño2}
              alt="dueño"
              width={400}
              height={300}
              layout="fixed"
            />
          </div>
          <div className="flex justify-center p-1">
            <Image
              src={imageDueño1}
              alt="perfil"
              width={400}
              height={300}
              layout="fixed"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
