import Image from "next/image";
import logo from 'public/images/logo.png'
 
const FooterImage = () => {
  return (
    <div className="grid place-content-center w-[200px]">
      <Image
      src={logo}
      alt="logo"
      layout="responsive"
      priority
      />
    </div>
  );
};

export default FooterImage;
