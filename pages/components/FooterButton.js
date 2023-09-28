import React from "react";

const FooterButton = () => {
  return (
    <div>
      <div>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 font-[Poppins]">
          ACERCA DE
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 font-[Poppins]">
          RESERVAS
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 font-[Poppins]">
          CARTA ONLINE
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 font-[Poppins]">
          CARTA TAKE AWAY
        </button>
        <button className="px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 font-[Poppins]">
          CONTACTO
        </button>
      </div>
    </div>
  );
};

export default FooterButton;
