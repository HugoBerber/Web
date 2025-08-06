import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import adminData from "../../data/admin";

const ContactModal = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorNombre, setErrorNombre] = useState(false);

  if (!isOpen) return null;

  const validarNombre = (value) => { // solo letras y espacios
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    return soloLetras.test(value.trim());
  };

  const handleNombreChange = (e) => { // Validar nombre en tiempo real
    const value = e.target.value;
    setNombre(value);
    setErrorNombre(value.length > 0 && !validarNombre(value));
  };

  const isValid = // Validar antes de enviar
    nombre.trim().length > 2 &&
    validarNombre(nombre) &&
    mensaje.trim().length > 5;

  const handleSend = () => { // Enviar mensaje pro whatsapp
    const texto = `Hola, soy ${nombre}. Me interesa una página web.\n${mensaje}`;
    const url = `${adminData.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const handleClose = () => {
    setNombre("");
    setMensaje("");
    setErrorNombre(false);
    onClose();
  }

  return (
    <div className="flex fixed justify-center items-center inset-0 z-50 bg-black bg-opacity-40">
      <div className="rounded-lg shadow-lg p-6 w-full max-w-md relative bg-white">
        <button
          onClick={handleClose}
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
          placeholder="Mensaje breve"
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
              ? "bg-blue-600 hover:bg-blue-700"
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
