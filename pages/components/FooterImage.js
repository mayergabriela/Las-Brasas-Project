import Image from "next/image";
import logo from 'public/images/logo.png'
 
const FooterImage = () => {
  return (
    <div className="grid place-content-center">
      <Image
      src={logo}
      alt="logo"
      priority
      />
    </div>
  );
};

export default FooterImage;
