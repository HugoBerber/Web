import React from "react";
import adminData from "../../data/admin";

const Navbar = ({ onContactClick }) => {
    return (
        <nav className="flex justify-between items-center p-4 md:p-6 bg-white shadow-md">
            <h1 className="text-xl font-bold text-gray-800">{adminData.businessName}</h1>
            <button 
                onClick={onContactClick}
                className="px-4 py-2 rounded transition bg-blue-500 text-white hover:bg-blue-700"
            >
                Contactanos
            </button>
        </nav>
    );
};

export default Navbar;