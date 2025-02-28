import { useState } from "react";
import { FaHome, FaBuilding, FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  { name: "Villas", icon: <FaHome /> },
  { name: "Appartements", icon: <FaBuilding /> },
  { name: "Studios", icon: <FaDoorOpen /> },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Villas");

  return (
    <div className="flex justify-center space-x-10 py-4 px-6 bg-gray-100 relative">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
          className={`relative text-gray-700 text-md font-medium px-6 py-3 cursor-pointer transition 
            ${
              activeCategory === category.name
                ? "text-black font-semibold"
                : "hover:text-black"
            }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">{category.icon}</span>
            <span className="text-sm mt-1">{category.name}</span>
          </div>
          <span
            className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out 
              ${
                activeCategory === category.name ? "scale-x-100" : "scale-x-0"
              }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
