export default function FormularioContacto() {
  return (
    <div>
      <div className="text-white text-center py-4">
        <h1 className="text-xl font-bold pb-4">Envianos un mensaje</h1>
        <p className="font-thin ">Nos encantaría saber que tenes para decirnos</p>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" type="text" placeholder="Nombre y Apellido"></input>
        </div>
        <div className="flex flex-col py-2">
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" type="email" placeholder="Email"></input>
        </div> 
        <div className="flex flex-col py-2">
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" type="text" placeholder="Asunto"></input>
        </div>
        <div className="flex flex-col py-2">
          <textarea className="border-2 rounded-lg p-3 flex border-gray-300 text-sm text-black" rows={5} placeholder="Mensaje"></textarea>
        </div>
        <button className=" text-white bg-[#EBAA10] hover:bg-[#2c2c2c] hover:text-[#EBAA10] font-bold w-full mt-4 rounded-full text-md md:text-xl px-6 py-2">ENVIAR</button>
      </form>
    </div>
    
  );    
};
