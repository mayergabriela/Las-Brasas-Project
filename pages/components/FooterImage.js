import Image from "next/image";
import logo from 'public/images/las_brazas_cook(light).png'
 
const FooterImage = () => {
  return (
    <div className="grid place-content-center">
      <Image
      alt="logo"
      src={logo}
      width={100}
      height={181}
      layout="fixed"
      />
    </div>
  );
};

export default FooterImage;
