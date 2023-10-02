import React from "react";

const FooterButton = () => {
  return (
    <div>
      <div>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5  ">
          Acerca de
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 ">
          Reservas
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 ">
          CARTA ONLINE
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 ">
          CARTA TAKE AWAY
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 ">
          Contacto
        </button>
      </div>
    </div>
  );
};

export default FooterButton;
