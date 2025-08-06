import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Section from "./components/Section";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const sections = [
    {
      title: "Páginas Web",
      content:
        "Tu página web es un representante clave de tu marca. Hagamos que tu negocio destaque con una web profesional que refleje el valor de tus productos o servicios.",
      showButton: true,
    },
    {
      title: "Diseño Web",
      content:
        "Cada industria es única, y lo mismo debería ser tu diseño. Creamos páginas web adaptadas a tu producto y a tu mercado, con un enfoque creativo y funcional.",
    },
    {
      title: "Desarrollo Web",
      content:
        "Además del diseño visual, el desarrollo de tu página debe responder a tus necesidades funcionales. Desde formularios hasta conexiones con sistemas externos, personalizamos cada detalle.",
    },
    {
      title: "Contenido adaptable",
      content:
        "Las personas acceden desde distintos dispositivos. Nuestras páginas se ajustan para ofrecer una experiencia óptima sin importar desde dónde visiten tu sitio.",
    },
    {
      title: "Tecnología",
      content:
        "Creamos sitios personalizados y fáciles de gestionar. Usamos tecnologías como HTML5, CSS/SCSS, JavaScript, PHP, MySQL y ReactJS para adaptarnos a lo que tu proyecto necesita.",
      showButton: true,
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <main className="space-y-20 py-10 px-4 md:px-12">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            showButton={section.showButton}
            onContactClick={() => setIsModalOpen(true)}
          />
        ))}
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
