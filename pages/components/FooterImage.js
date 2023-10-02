import React from "react";

const FooterImage = () => {
  return (
    <div className="flex items-center justify-center mt-4 mb-4 ">
      <img src="/images/logo.png" layout="fill" />
      <style jsx>{`
        img {
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default FooterImage;
