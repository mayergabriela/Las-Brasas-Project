"use client";
/***** REACT COMPONENTS  *****/
import React from "react";
import { useState } from "react";
/***** IMPORTACION  LIBRERIA FLOWBITE  *****/
import { Button, Modal } from "flowbite-react";

export default function PopUpModal() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <>
      <Button
        color="mt-4 font-semibold text-center text-white duration-300 ease-out rounded-lg focus:scale-95 footerButton"
        className="mt-4 text-lg font-bold text-center text-white duration-300 ease-out bg-yellow-500 rounded-lg hover:bg-black hover:text-yellow-500 focus:scale-95 footerButton"
        onClick={() => props.setOpenModal("pop-up")}
      >
        COMPRAR AHORA
      </Button>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              ¿Usted desea confirmar la compra y finalizar la misma?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="success"
                onClick={() => props.setOpenModal(undefined)}
              >
                Si, por supuesto.
              </Button>
              <Button
                color="failure"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, gracias.
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <style jsx>{`
        button {
          background-color: var(--first-color);
          text-transform: uppercase;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        button:hover {
          background-color: #2c2c2c;
          color: var(--first-color);
        }
      `}</style>
    </>
  );
}
