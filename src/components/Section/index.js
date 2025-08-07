import React from "react";

const sections = [
  {
    title: "Páginas Web",
    content:
      "Tu página web es un representante clave de tu marca. Hagamos que tu negocio destaque con una web profesional que refleje el valor de tus productos o servicios.",
    iframe:
      "https://lottie.host/embed/10a2e392-8ec1-4339-ba2d-59061923510f/d6yUhOQ4Xr.lottie",
    showButton: true,
  },
  {
    title: "Diseño Web",
    content:
      "Cada industria es única, y lo mismo debería ser tu diseño. Creamos páginas web adaptadas a tu producto y a tu mercado, con un enfoque creativo y funcional.",
    iframe:
      "https://lottie.host/embed/53a100d6-995c-4881-bf33-b95588fac375/MW3RcLs1QU.lottie",
  },
  {
    title: "Desarrollo Web",
    content:
      "Además del diseño visual, el desarrollo de tu página debe responder a tus necesidades funcionales. Desde formularios hasta conexiones con sitios externos, personalizamos cada detalle.",
    iframe:
      "https://lottie.host/embed/78bf0859-99c5-40e1-b656-6f1eb15ea7d4/EvopAqSCK0.lottie",
  },
  {
    title: "Contenido adaptable",
    content:
      "Las personas acceden desde distintos dispositivos. Nuestras páginas se ajustan para ofrecer una experiencia óptima sin importar desde dónde visiten tu sitio.",
    iframe:
      "https://lottie.host/embed/f7452a0f-c8d1-4192-8a53-9efe7153fbcd/MQD5dXKwwX.lottie",
  },
  {
    title: "Tecnología",
    content:
      "Creamos sitios personalizados y fáciles de gestionar. Usamos tecnologías como HTML5, React, JavaScript, CSS/Tailwind, y Firebase para adaptarnos a lo que tu proyecto necesita.",
    iframe:
      "https://lottie.host/embed/81aa5158-aef0-438e-90b3-6ebe4de90df5/oWGdoZzeqo.lottie",
    showButton: true,
  },
];

const Section = ({ onContactClick }) => {
  return (
    <>
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0"
          >
            {/* Lottie */}
            <div className={`w-full md:w-1/2 ${isEven ? "" : "md:order-2"}`}>
              <iframe
                src={section.iframe}
                className="w-full h-[300px] md:h-[400px]"
                allowFullScreen
              ></iframe>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
              <p className="mb-6 text-gray-700">{section.content}</p>
              {section.showButton && (
                <button
                  onClick={onContactClick}
                  className="px-5 py-2 rounded transition shadow-xl bg-purple-600 text-white hover:bg-purple-700"
                >
                  Contactar
                </button>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Section;
