import React from "react";
import adminData from "../../data/admin";

const Navbar = ({ onContactClick }) => {
    return (
        <nav className="flex justify-between items-center p-4 md:p-6 rounded shadow-2xl bg-white">
            <h1 className="text-xl font-bold text-gray-800">{adminData.businessName}</h1>
            <button 
                onClick={onContactClick}
                className="px-4 py-2 rounded transition shadow-md bg-purple-600 text-white hover:bg-purple-700"
            >
                Contactanos
            </button>
        </nav>
    );
};

export default Navbar;