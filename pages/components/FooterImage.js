import Image from "next/image";
import logo from 'public/images/las_brazas_cook(light).png'
 
const FooterImage = () => {
  return (
<<<<<<< HEAD
    <div className="grid place-content-center">
      <Image
      alt="logo"
      src={logo}
      width={100}
      height={181}
      layout="fixed"
      />
=======
    <div className="flex items-center justify-center mt-4 mb-4 ">
      <img src="/images/logo.png" layout="fill" />
      <style jsx>{`
        img {
          height: 200px;
        }
      `}</style>
>>>>>>> branch_facu
    </div>
  );
};

export default FooterImage;
