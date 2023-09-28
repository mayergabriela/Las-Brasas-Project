import React from "react";
import FooterButton from "./FooterButton";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white bg-yellow-500 ">
      <div className="px-4 md:flex md:justify-between md:items-center sm:px-12 py-7 md">
        <p>Copyright ⓒ {year}</p>
        <FooterButton />
      </div>
    </footer>
  );
}

export default Footer;
