import React from "react";
import adminData from "../../data/admin";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = ({ onContactClick }) => {
    return (
        <footer className="py-6 text-center text-sm rounded shadow-2xl bg-white text-gray-800">
            <div className="flex justify-center gap-6 mb-2">
                <a href={adminData.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl hover:text-blue-700" />
                </a>
                <button onClick={onContactClick} className="text-xl hover:text-green-700">
                    <FaWhatsapp />
                </button>
                {/* <a href={adminData.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl hover:text-pink-500" />
                </a> */}
            </div>
            <p>© {new Date().getFullYear()} {adminData.businessName}. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;