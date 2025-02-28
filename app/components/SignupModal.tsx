// components/SignupModal.tsx
import { useState } from "react";
import { X } from "lucide-react"; // Importez une icône de fermeture
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa"; // Importez des icônes pour les champs et les boutons

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique d'inscription
    console.log("Name:", name, "Email:", email, "Password:", password);
    onClose(); // Fermer la modal après la soumission
  };

  const handleFacebookSignup = () => {
    // Ajoutez ici la logique pour l'inscription avec Facebook
    console.log("Inscription avec Facebook");
  };

  const handleGoogleSignup = () => {
    // Ajoutez ici la logique pour l'inscription avec Google
    console.log("Inscription avec Google");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fond transparent avec une teinte grise et flou */}
      <div
        className="fixed inset-0 bg-gray-500/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md h-[680px]  relative z-50 transform transition-all duration-300 ease-in-out hover:scale-105">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Inscription
        </h2>

        {/* Boutons d'inscription avec Facebook et Google */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            onClick={handleFacebookSignup}
            className="w-full flex items-center justify-center hover:shadow-lg bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer transition"
          >
            <FaFacebook className="w-5 h-5 mr-2" />
            S'inscrire avec Facebook
          </button>
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center hover:shadow-lg bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 cursor-pointer transition"
          >
            <FaGoogle className="w-5 h-5 mr-2" />
            S'inscrire avec Google
          </button>
        </div>

        {/* Séparateur */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500">ou</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ Nom */}
          <div className="relative ">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrez votre nom complet"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition"
                required
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Champ Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition"
                required
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition"
                required
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer shadow-lg hover:shadow-xl transition"
          >
            S'inscrire
          </button>

          {/* Lien pour se connecter */}
          <p className="text-center text-sm text-gray-600">
            Déjà un compte ?{" "}
            <button
              type="button"
              onClick={() => {
                onClose();
                // Ouvrir la modal de connexion (à implémenter)
              }}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Se connecter
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
