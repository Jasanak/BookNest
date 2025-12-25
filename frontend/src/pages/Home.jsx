import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, TrendingUp, Clock } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Vast Collection",
      description: "Access thousands of books across various genres and topics",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Easy Management",
      description: "Simple and intuitive interface for members and librarians",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Track Progress",
      description: "Monitor your reading history and borrowing activities",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "24/7 Access",
      description: "Browse and manage your account anytime, anywhere",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to BookNest</h1>
          <p className="text-xl mb-8">
            Your modern library management system for seamless book borrowing
            and management
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              to="/books"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose BookNest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 rounded-lg p-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10,000+</h3>
            <p className="text-gray-700">Books Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600 mb-2">5,000+</h3>
            <p className="text-gray-700">Active Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600 mb-2">98%</h3>
            <p className="text-gray-700">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Reading Journey?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of readers and explore our vast collection today!
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Create Free Account
        </Link>
      </div>
    </div>
  );
};

export default Home;
