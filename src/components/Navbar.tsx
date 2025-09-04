import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showForm, setShowForm] = useState(false); // modal iframe

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-start">
          {/* BOTÃO MENU (MOBILE) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <Link
              to="/"
              className="text-white hover:text-green-400 transition"
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="text-white hover:text-green-400 transition"
            >
              Sobre
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Inscrever-se Agora
            </button>
          </div>
        </div>

        {/* MENU MOBILE (DROPDOWN) */}
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4 text-center">
            <Link
              to="/"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
            >
              Inscrever-se Agora
            </button>
          </div>
        )}
      </nav>

      {/* MODAL IFRAME */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg max-w-3xl w-full mx-4 md:mx-0 shadow-lg relative">
            {/* Botão fechar */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              X
            </button>

            {/* Iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeYI-JcNW2ILA1bRSGfGCbumCh6YgD8Syr0dpORqYp97zGsFQ/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-b-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
