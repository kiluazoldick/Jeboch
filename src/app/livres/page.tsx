"use client";
import Link from "next/link";
import { useState } from "react";

export default function Livres() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortOption, setSortOption] = useState("recent");

  const categories = [
    "Tous",
    "Programmation",
    "Mathématiques",
    "Sciences",
    "Littérature",
    "Histoire",
    "Philosophie",
    "Langues",
  ];

  const books = [
    {
      title: "Apprendre à coder avec Python",
      author: "Marie Dubois",
      category: "Programmation",
      pages: 320,
      rating: 4.7,
      new: true,
      description:
        "Initiation complète à la programmation avec des projets pratiques",
    },
    {
      title: "Algèbre linéaire appliquée",
      author: "Jean Martin",
      category: "Mathématiques",
      pages: 280,
      rating: 4.5,
      new: false,
      description: "Concepts fondamentaux et applications concrètes",
    },
    {
      title: "Biologie moléculaire",
      author: "Sophie Lambert",
      category: "Sciences",
      pages: 450,
      rating: 4.8,
      new: true,
      description: "Les mécanismes de la vie au niveau cellulaire",
    },
    {
      title: "Les grands penseurs du XXe siècle",
      author: "Pierre Lefèvre",
      category: "Philosophie",
      pages: 380,
      rating: 4.6,
      new: false,
      description: "De Sartre à Foucault, une analyse approfondie",
    },
    {
      title: "Histoire de la révolution numérique",
      author: "Thomas Moreau",
      category: "Histoire",
      pages: 310,
      rating: 4.4,
      new: false,
      description: "Des premiers ordinateurs à l'intelligence artificielle",
    },
    {
      title: "JavaScript moderne",
      author: "Alexandre Petit",
      category: "Programmation",
      pages: 410,
      rating: 4.9,
      new: true,
      description: "ES6+, React, Node.js et bonnes pratiques",
    },
    {
      title: "Apprendre l'anglais scientifique",
      author: "Emma Johnson",
      category: "Langues",
      pages: 250,
      rating: 4.3,
      new: false,
      description: "Vocabulaire et structures pour la recherche académique",
    },
    {
      title: "Physique quantique",
      author: "Marc Bernard",
      category: "Sciences",
      pages: 520,
      rating: 4.7,
      new: true,
      description: "Introduction accessible aux concepts fondamentaux",
    },
    {
      title: "Les classiques de la littérature française",
      author: "Julie Rousseau",
      category: "Littérature",
      pages: 360,
      rating: 4.6,
      new: false,
      description: "De Victor Hugo à Albert Camus",
    },
    {
      title: "Machine Learning pratique",
      author: "David Chen",
      category: "Programmation",
      pages: 480,
      rating: 4.8,
      new: true,
      description: "Implémentations avec Python et TensorFlow",
    },
    {
      title: "Géopolitique contemporaine",
      author: "Lucie Dubois",
      category: "Histoire",
      pages: 390,
      rating: 4.5,
      new: false,
      description: "Enjeux mondiaux et relations internationales",
    },
    {
      title: "Éthique et intelligence artificielle",
      author: "Michel Foucault",
      category: "Philosophie",
      pages: 290,
      rating: 4.7,
      new: true,
      description: "Questions morales dans l'ère numérique",
    },
  ];

  // Filtrer et trier les livres
  const filteredBooks = books
    .filter(
      (book) =>
        selectedCategory === "Tous" || book.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === "recent") return Number(b.new) - Number(a.new);
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "pages") return a.pages - b.pages;
      return 0;
    });

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header avec bouton retour et titre */}
        <header className="flex items-center justify-between mb-6 sm:mb-10">
          <Link href="/dashboard">
            <button className="flex items-center text-black text-sm sm:text-base">
              <span className="mr-1">←</span> Retour
            </button>
          </Link>
          <h1 className="text-xl sm:text-3xl font-bold text-center text-black">
            Bibliothèque académique
          </h1>
          <div className="w-6 sm:w-8"></div>
        </header>

        {/* Barre de recherche et filtres */}
        <div className="mb-8">
          <div className="relative mb-6 text-black">
            <input
              type="text"
              placeholder="Rechercher un livre, un auteur..."
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg pl-12"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* Filtres par catégorie */}
            <div className="flex-1">
              <h2 className="font-medium text-gray-700 mb-2">Catégories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-sm rounded-full ${
                      selectedCategory === category
                        ? "bg-[#ED1C24] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tri des résultats */}
            <div>
              <h2 className="font-medium text-black mb-2">Trier par</h2>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-gray-100 border-0 rounded-lg p-2 text-sm text-black"
              >
                <option value="recent">Plus récents</option>
                <option value="rating">Meilleures notes</option>
                <option value="pages">Moins de pages</option>
              </select>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
          <div className="flex flex-wrap justify-around text-center">
            <div className="px-4 py-2">
              <p className="text-2xl font-bold text-[#ED1C24]">
                {books.length}
              </p>
              <p className="text-sm text-gray-600">Livres disponibles</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-2xl font-bold text-[#ED1C24]">12</p>
              <p className="text-sm text-gray-600">Nouveautés</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-2xl font-bold text-[#ED1C24]">8</p>
              <p className="text-sm text-gray-600">Catégories</p>
            </div>
          </div>
        </div>

        {/* Résultats de recherche */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">
            {selectedCategory === "Tous"
              ? "Tous les livres"
              : `Livres de ${selectedCategory}`}
            <span className="text-gray-500 font-normal ml-2">
              ({filteredBooks.length})
            </span>
          </h2>
        </div>

        {/* Liste des livres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.title}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex">
                <div className="w-1/3 bg-gray-100 flex items-center justify-center p-4">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                    Couverture
                  </div>
                </div>

                <div className="w-2/3 p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-black text-lg line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{book.author}</p>
                    </div>
                    {book.new && (
                      <span className="bg-[#ED1C24] text-white text-xs px-2 py-1 rounded-full">
                        Nouveau
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mb-2">
                      {book.category}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {"★".repeat(Math.floor(book.rating))}
                        {"☆".repeat(5 - Math.floor(book.rating))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {book.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {book.pages} pages
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 text-sm">
                    Consulter le livre
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (visuelle) */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ED1C24] text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              ...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
