import React from "react";
import FooterItem from "./FooterItem";
import FooterButton from "./FooterButton";
import FooterImage from "./FooterImage";
import FooterMenus from "./FooterMenus";

const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
      <FooterImage />
      <FooterMenus />
      <FooterItem />
      <FooterButton />
      <div className="pt-8 pb-8 text-sm text-center bottom-color-footer">
        <p>{year} Las Brasas Cook ⓒ | All Rights Reserved </p>
      </div>
    </div>
  );
};

export default FooterItemsContainer;
