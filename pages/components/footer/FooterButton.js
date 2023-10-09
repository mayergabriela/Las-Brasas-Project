const FooterButton = () => {
  return (
    <div>
      <div>
        <button className="my-3 px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 h-10 w-48">
          Acerca de
        </button>
      </div>
      <div>
        <button className="my-3 px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 h-10 w-48">
          Reservas
        </button>
      </div>
      <div>
        <button className="my-3 px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 h-10 w-48 ">
          CARTA ONLINE
        </button>
      </div>
      <div>
        <button className="my-3 px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 h-10 w-48">
          CARTA TAKE AWAY
        </button>
      </div>
      <div>
        <button className="my-3 px-5 duration-300 footerButton hover:bg-yellow-500 py-2.5 h-10 w-48">
          Contacto
        </button>
      </div>
      <style jsx>{`
        .footerButton {
          // width: 300px;
          // height: 40px;
          color: var(--white-color);
          background: var(--first-color);
          border-radius: 8px;
          border: none;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          outline: none;
        }

        button:hover {
          background-color: #2c2c2c;
          color: var(--first-color);
        }
      `}</style>
    </div>
  );
};

export default FooterButton;
