import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Section from "./components/Section";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="font-sans text-gray-800">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <main className="space-y-20 py-10 px-4 md:px-12 bg-main-bg">
        <Section onContactClick={() => setIsModalOpen(true)} />
      </main>
      <Footer onContactClick={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;