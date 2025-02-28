import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import LoginModal from "./loginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("vente");
  const [searchParams, setSearchParams] = useState({
    location: "",
    arrival: "",
    departure: "",
  });

  return (
    <nav className="bg-white shadow-md w-full relative">
      <div className="container mx-auto flex flex-col items-center px-6 py-4">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-sky-500">
            ImmoContact
          </Link>

          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setActiveTab("vente")}
              className={`relative text-gray-700 text-md font-medium px-6 py-3 cursor-pointer transition 
                ${
                  activeTab === "vente"
                    ? "text-black font-semibold"
                    : "hover:text-black"
                }`}
            >
              Vente
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out 
                  ${activeTab === "vente" ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </button>

            <button
              onClick={() => setActiveTab("location")}
              className={`relative text-gray-700 text-md font-medium px-6 py-3 cursor-pointer transition 
                ${
                  activeTab === "location"
                    ? "text-black font-semibold"
                    : "hover:text-black"
                }`}
            >
              Location
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 rounded-full transition-transform duration-300 ease-in-out 
                  ${activeTab === "location" ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/host"
              className="text-sm font-medium text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-full transition"
            >
              Mettre mon logement sur ImmoContact
            </Link>

            <div className="relative">
              <button
                className="flex items-center space-x-2 p-2 border border-gray-300 bg-white rounded-full shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Menu className="w-5 h-5 text-gray-600" />
                <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
                  <img
                    src="utilisateur.png"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-13 w-64 bg-white shadow-lg rounded-lg py-2">
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-pointer"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => setIsSignupModalOpen(true)}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-pointer"
                  >
                    Inscription
                  </button>
                  <hr className="my-2" />
                  <Link
                    to="/host"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mettre mon logement
                  </Link>
                  <Link
                    to="/aide"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Centre d'aide
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-4 w-full max-w-xl ml-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer shadow-md px-6 py-3 w-full hover:shadow-lg transition duration-300">
            <div className="flex flex-col ">
              <span className="text-xs font-semibold">Destination</span>
              <input
                type="text"
                placeholder="Rechercher une destination"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
                className="bg-transparent outline-none text-gray-600 text-sm"
              />
            </div>
            {activeTab === "location" && (
              <>
                <span className="mx-2 border-l h-6"></span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Arrivée</span>
                  <input
                    type="date"
                    value={searchParams.arrival}
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        arrival: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-600 text-sm"
                  />
                </div>
                <span className="mx-2 border-l h-6"></span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Départ</span>
                  <input
                    type="date"
                    value={searchParams.departure}
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        departure: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-600 text-sm"
                  />
                </div>
              </>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full ml-auto cursor-pointer">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
