import React from "react";
import FooterItem from "./FooterItem";
import FooterButton from "./FooterButton";
import { LOGO, INFO, Icons, Timetable } from "./FooterMenus";

const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
      <FooterItem Links={LOGO} title="LOGO" />
      <FooterItem Links={INFO} title="INFO" />
      <FooterItem Links={Icons} title="Icons" />
      <FooterItem Links={Timetable} title="Timetable" />
      <FooterButton />
    </div>
  );
};

export default FooterItemsContainer;
