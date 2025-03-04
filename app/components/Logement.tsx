import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Pour les animations
import { FaHome, FaImages, FaCheckCircle } from "react-icons/fa"; // Icônes modernes
import { Link } from "react-router-dom";
export default function AirbnbOnboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Commencer sur ImmoContact, c'est facile
        </motion.h1>
        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-8">
          <Step
            number={1}
            title="Parlez-nous de votre logement"
            description="Donnez-nous quelques informations de base, par exemple indiquez-nous où il se trouve et combien de voyageurs il peut accueillir."
            icon={<FaHome className="w-8 h-8 text-blue-600" />}
          />
          <Step
            number={2}
            title="Faites en sorte de vous démarquer"
            description="Ajoutez au moins 5 photos, un titre et une description. Nous allons vous aider."
            icon={<FaImages className="w-8 h-8 text-purple-600" />}
          />
          <Step
            number={3}
            title="Terminez et publiez"
            description="Choisissez un prix de départ, vérifiez quelques détails, puis publiez votre annonce."
            icon={<FaCheckCircle className="w-8 h-8 text-green-600" />}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Link to="/etape1">
              <Button className="bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 transform hover:scale-105">
                Commencer
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode; // Utilisation d'une icône au lieu d'une image
};

function Step({ number, title, description, icon }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center space-x-6 border-b pb-6 last:border-0"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
