/***** REACT COMPONENTS  *****/
import Link from "next/link";
/***** IMAGE IMPORTED  *****/
import Image from "next/image";
import logo from "public/images/logo.png";

const FooterImage = () => {
  return (
    <div className="grid duration-300 ease-in cursor-pointer place-content-center hover:opacity-50 hover:scale-105">
      <Link href={"/"}>
        <Image src={logo} alt="logo" layout="fixed" width={200} priority />
      </Link>
    </div>
  );
};

export default FooterImage;
