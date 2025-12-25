import React from "react";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="w-6 h-6" />
            <span className="text-lg font-semibold">BookNest</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 BookNest Library Management System
            </p>
            <p className="text-gray-400 text-sm">
              Developed by Sanjil & Macarena
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
