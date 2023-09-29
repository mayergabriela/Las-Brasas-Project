import React from "react";

const FooterItem = ({ LOGO, INFO, Icons, Timetable }) => {
  return (
    <div>
      <ul>
        <h3 className="mb-1">{LOGO} Some Text</h3>
        <h3>{INFO}</h3>
        <li>Some text</li>
        <li>Some text</li>
      </ul>
    </div>
  );
};

export default FooterItem;
