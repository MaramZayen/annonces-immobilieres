import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HousingStep() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-semibold text-blue-700">ImmoContact</div>
        <motion.div
          whileHover={{ scale: 1.05 }} // Effet de zoom au survol
          whileTap={{ scale: 0.95 }} // Effet de rétrécissement au clic
        ></motion.div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto w-full">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-lg font-medium text-blue-500 uppercase tracking-wider">
            Étape 1
          </h2>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700"
          >
            Décrivez votre logement
          </motion.h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cette première étape consiste à nous donner des informations clés
            sur votre logement : son type, sa disponibilité et sa localisation.
            Plus votre annonce est détaillée, plus elle attirera de voyageurs.
          </p>
        </div>

        {/* Right Section - Image Card */}
        <div className="md:w-1/2 w-full">
          <Card className="shadow-sm rounded-lg overflow-hidden border border-gray-100">
            <CardContent className="p-0">
              <motion.img
                src="house.jpg" // Remplacez par le chemin de votre image
                alt="Aperçu du logement"
                className="w-full h-96 object-cover"
                initial={{ opacity: 0, scale: 0.9 }} // État initial : invisible et légèrement réduite
                animate={{ opacity: 1, scale: 1 }} // État animé : visible et taille normale
                transition={{ duration: 0.8, ease: "easeOut" }} // Durée et effet de transition
              />
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer - Navigation Buttons */}
      <footer className="flex justify-between items-center mt-8 border-t border-gray-100 pt-8">
        <motion.div
          whileHover={{ scale: 1.05 }} // Effet de zoom au survol
          whileTap={{ scale: 0.95 }} // Effet de rétrécissement au clic
        >
          <Link to="/Logement">
            <Button className="flex items-center gap-2 px-6 py-3 text-white bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-lg transition duration-200">
              <ArrowLeft className="w-5 h-5" /> Retour
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} // Effet de zoom au survol
          whileTap={{ scale: 0.95 }} // Effet de rétrécissement au clic
        >
          <Button className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Suivant <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </footer>
    </div>
  );
}
