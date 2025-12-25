import React, { useState } from "react";
import { Book } from "lucide-react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Demo books data
  const books = [
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      description: "A classic American novel about the American Dream",
      available: 3,
      quantity: 5,
      status: "available",
    },
    {
      id: 2,
      name: "1984",
      author: "George Orwell",
      year: 1949,
      description: "A dystopian social science fiction novel",
      available: 0,
      quantity: 4,
      status: "checked_out",
    },
    {
      id: 3,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      description: "A novel about racial injustice in the Deep South",
      available: 2,
      quantity: 6,
      status: "available",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Catalog</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or ISBN..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {book.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{book.author}</p>
                <p className="text-gray-500 text-sm">{book.year}</p>
              </div>
              <Book className="w-12 h-12 text-blue-600" />
            </div>

            <p className="text-gray-600 text-sm mb-4">{book.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  book.status === "available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {book.status === "available" ? "Available" : "Checked Out"}
              </span>
              <span className="text-sm text-gray-600">
                {book.available}/{book.quantity} available
              </span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                View Details
              </button>
              {book.available > 0 && (
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm">
                  Borrow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
