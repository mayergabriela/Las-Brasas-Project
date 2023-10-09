import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

export default function FormularioContacto() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <div>
      <div className="text-white text-center py-4">
        <h1 className="text-xl font-bold pb-4">Envianos un mensaje</h1>
        <p className="font-thin ">Nos encantaría saber que tenes para decirnos</p>
      </div>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        }}
        validate={(valores) => {
          let errores = {};

          //Validación nombre:
          if (!valores.nombre) {
            errores.nombre = 'Por favor ingresá tu nombre';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios.'
          }

          //Validación email:
          if (!valores.email) {
            errores.email = 'Por favor ingresá tu email';
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = 'El email solo puede contener letras, números, puntos, guíones y guión bajo.'
          }

          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
          resetForm();
          console.log('Formulario envíado');
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 3000);
        }} 
      >
        {( { errors } ) => (
          <Form>
            <div className="flex flex-col py-2">
              <Field 
                className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black"
                id= "nombre"
                name= "nombre"
                type="text" 
                placeholder="Nombre y Apellido" 
              />
              <ErrorMessage name="nombre" component={() => (
                <div className="error text-yellow-500">{errors.nombre}</div>
              )} />
            </div>
            <div className="flex flex-col py-2">
              <Field 
                className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" 
                type="email"
                id= "email"
                name= "email"
                placeholder="Email" 
              />
              <ErrorMessage name="email" component={() => (
                <div className="error text-yellow-500">{errors.email}</div>
              )} />
            </div> 
            <div className="flex flex-col py-2">
              <Field 
                className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" 
                type="text"
                id= "asunto"
                name= "asunto"
                placeholder="Asunto" 
              />
            </div>
            <div className="flex flex-col py-2">
              <Field as= "textarea"
                className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" 
                rows={5}
                id="mensaje"
                name= "mensaje" 
                placeholder="Mensaje" 
              />
            </div>
            <button className=" text-white bg-[#EBAA10] hover:bg-[#2c2c2c] hover:text-[#EBAA10] font-bold w-full mt-4 rounded-full text-md md:text-xl px-6 py-2" type="submit">ENVIAR</button>
            {formularioEnviado && <p className="text-green-700 font-bold text-center m-4">¡Formulario envíado con éxito!</p>}
          </Form>
        )} 
      </Formik>  
    </div>
    
  );    
};
