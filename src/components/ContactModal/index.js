import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import adminData from "../../data/admin";

const ContactModal = ({ isOpen, onClose }) => {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");

    if (!isOpen) return null;

    const handleSend = () => {
        const url = `${adminData.whatsapp}?text=${encodeURIComponent(
            `Hola, soy ${nombre}. Me interesa una página web.\n${mensaje}`
        )}`;
        window.open(url, "_blank"); 
    };

    const isValid = nombre.trim().length > 2 && mensaje.trim().length > 5;

    return (
        <div className="flex fixed justify-center items-center inset-0 z-50 bg-black bg-opacity-40">
            <div className="rounded-lg shadow-lg p-6 w-full max-w-md relative bg-white">
               <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
                    <FaTimes />
                </button>
                <h2 className="text-xl font-semibold mb-4">Contáctanos</h2> 
                <input 
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full border rounded p-2 mb-4 border-gray-300"
                />
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
                        isValid ? "bg-blue-600 hover:bg-blue-700" : "cursor-not-allowed bg-gray-400"
                    }`}
                >
                    Enviar
                </button>
            </div> 
        </div>
    );
};

export default ContactModal;