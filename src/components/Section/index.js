import React from "react";

const Section = ({ title, content, showButton, onContactClick}) => {
    return (
        <section className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="mb-6 text-gray-700">{content}</p>
            {showButton && (
                <button
                    onClick={onContactClick}
                    className="px-5 py-2 rounded transition bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Contactar
                    </button>
            )}
        </section>
    );
};

export default Section;