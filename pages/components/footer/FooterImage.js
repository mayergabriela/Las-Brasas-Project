/***** IMAGE IMPORTED  *****/
import Image from "next/image";
import logo from "public/images/logo.png";

const FooterImage = () => {
  return (
    <div className="grid place-content-center">
      <Image src={logo} alt="logo" layout="fixed" width={200} priority />
    </div>
  );
};

export default FooterImage;
