import React from "react";
import adminData from "../../data/admin";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-6 mt-12 text-center text-sm bg-gray-100 text-gray-600">
            <div className="flex justify-center gap-6 mb-2">
                <a href={adminData.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl hover:text-blue-700" />
                </a>
                <a href={adminData.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-xl hover:text-green-700" /> 
                </a>
                <a href={adminData.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl hover:text-pink-500" />
                </a>
            </div>
            <p>© {new Date().getFullYear()} {adminData.businessName}. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;