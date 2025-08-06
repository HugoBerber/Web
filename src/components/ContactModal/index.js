import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import adminData from "../../data/admin";

const ContactModal = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorNombre, setErrorNombre] = useState(false);

  if (!isOpen) return null;

  const validarNombre = (value) => { // Validar que solo tenga letras
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    return soloLetras.test(value.trim());
  };

  const handleNombreChange = (e) => { // Manejar el cambio del nombre
    const value = e.target.value;
    setNombre(value);
    setErrorNombre(value.length > 0 && !validarNombre(value));
  };

  const isValid = // Validar que el  nombre tenga mas de 2 digitos y el mensaje mas de 5
    nombre.trim().length > 2 &&
    validarNombre(nombre) &&
    mensaje.trim().length > 5;

  const handleSend = () => { // Enviar mensaje por whatsapp
    const texto = `Hola, soy ${nombre}. Me interesa una página web.\n${mensaje}`;
    const mensajeCodificado = encodeURIComponent(texto);
    const url = `https://wa.me/${adminData.whatsapp}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
};

  return (
    <div className="flex fixed justify-center items-center inset-0 z-50 bg-black bg-opacity-40">
      <div className="rounded-lg shadow-lg p-6 w-full max-w-md relative bg-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={handleNombreChange}
          className={`w-full border rounded p-2 mb-2 ${
            errorNombre ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errorNombre && (
          <p className="text-red-500 text-sm mb-2">
            Ingresa solo letras (sin números ni símbolos)
          </p>
        )}
        <textarea
          placeholder="Explicanos tu proyecto"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={4}
          className="w-full border rounded p-2 mb-4 border-gray-300"
        />
        <button
          disabled={!isValid}
          onClick={handleSend}
          className={`w-full px-4 py-2 rounded text-white ${
            isValid
              ? "bg-purple-600 hover:bg-purple-700"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
