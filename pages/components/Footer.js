import React from "react";
import FooterItemsContainer from "./FooterItemsContainer";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white bg-yellow-500 ">
      <div className="px-4 md:flex md:justify-between md:items-center sm:px-12 py-7 md">
        <FooterItemsContainer />

        <div className=" md:flex md:justify-between md:items-center sm:px-12 px-14 py-7 bottom-color-footer">
          <p>{year} Las Brasas Cook ⓒ | All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
