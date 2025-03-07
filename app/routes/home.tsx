import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Navbar from "app/components/Navbar";
import CategoryFilters from "app/components/CategoryFilter";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef } from "react";

const Home = () => {
  const [numListings, setNumListings] = useState(12);

  const handleShowMore = () => {
    setNumListings(numListings + 8);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar fixe */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Conteneur principal avec padding-top ajusté */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-35">
        {/* Nouvelle div pour "Trouver votre logement de rêve" */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl mb-8 text-center shadow-lg border border-blue-100 mt-16">
          <div className="max-w-2xl mx-auto">
            {/* Icône ou illustration */}
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>

            {/* Titre */}
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Trouvez votre logement de rêve
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6">
              Explorez notre sélection exclusive de propriétés et découvrez
              celle qui correspond parfaitement à vos attentes.
            </p>

            {/* Bouton d'action */}
            <Link
              to="/listings"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Explorer les annonces
            </Link>
          </div>
        </div>

        {/* Section principale */}
        <section className="py-16 pt-4">
          {/* CategoryFilters avec un espacement réduit */}
          <div className="mt-0">
            <CategoryFilters />
          </div>

          {/* Grille des annonces */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: numListings }, (_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src="/dar.png"
                  alt="Maison"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Maison de luxe</h3>
                  <p className="text-gray-500 text-sm">Paris, France</p>
                  <p className="text-blue-500 font-bold mt-2">€750,000</p>
                  <div className="flex justify-between mt-4">
                    <Link
                      to="/details"
                      className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-lg text-sm"
                    >
                      Voir Détails
                    </Link>
                    <button className="text-gray-600 cursor-pointer hover:text-red-500">
                      <FaHeart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton "Afficher plus" */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-800 font-medium">
              Poursuivez l'exploration des logements
            </p>
            <button
              onClick={handleShowMore}
              className="mt-4 bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md transition hover:bg-gray-800 cursor-pointer"
            >
              Afficher plus
            </button>
          </div>
        </section>

        {/* Section Call to Action */}
        <section className="bg-gradient-to-r rounded-lg from-blue-700 to-blue-500 text-white py-20 text-center border-">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="text-5xl font-extrabold tracking-tight">
              Louez ou vendez votre propriété en toute simplicité
            </h2>
            <p className="mt-5 text-xl opacity-90">
              Rejoignez des milliers de propriétaires satisfaits et trouvez vos
              futurs locataires ou acheteurs dès aujourd’hui.
            </p>
            <Link
              to="/Logement" // Lien vers la page Logement
              className="mt-8 inline-block bg-white text-blue-950 font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 text-lg"
            >
              Mettre mon logement
            </Link>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-700 text-sm py-8 border-t">
        <div className="max-w-7xl mx-auto px-6">
          {/* Liens principaux */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">À propos</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/about" className="hover:underline">
                    Notre histoire
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Carrières
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/help" className="hover:underline">
                    Centre d'aide
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/safety" className="hover:underline">
                    Sécurité
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Légal</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:underline">
                    Politique des cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Suivez-nous</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to="#" className="hover:text-blue-600 transition">
                  <i className="fab fa-facebook text-xl"></i>
                </Link>
                <Link to="#" className="hover:text-blue-400 transition">
                  <i className="fab fa-twitter text-xl"></i>
                </Link>
                <Link to="#" className="hover:text-pink-600 transition">
                  <i className="fab fa-instagram text-xl"></i>
                </Link>
                <Link to="#" className="hover:text-red-600 transition">
                  <i className="fab fa-youtube text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Séparation */}
          <hr className="my-6 border-gray-300" />

          {/* Bas du footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center md:text-left text-gray-500">
              © 2025 ImmoContact, Inc. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <span className="cursor-pointer hover:underline flex items-center">
                🌍 Français (FR)
              </span>
              <span className="cursor-pointer hover:underline flex items-center">
                💰 € EUR
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
