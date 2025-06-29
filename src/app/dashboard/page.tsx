"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const cards = [
    {
      title: "Livres",
      path: "/livres",
      color: "bg-[#ED1C24]",
      icon: "📚",
    },
    {
      title: "Vidéos",
      path: "/videos",
      color: "bg-black",
      icon: "🎬",
    },
    {
      title: "Communauté",
      path: "/forums-communaute",
      color: "bg-[#ED1C24]",
      icon: "👥",
    },
    {
      title: "Mon Compte",
      path: "/compte",
      color: "bg-black",
      icon: "👤",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const progressData = [
    {
      title: "Développement Web Avancé",
      progress: 75,
      modules: "12/16 modules",
      lastActivity: "Il y a 2 jours",
    },
    {
      title: "Design UI/UX",
      progress: 45,
      modules: "9/20 modules",
      lastActivity: "Hier",
    },
    {
      title: "Base de données SQL",
      progress: 90,
      modules: "18/20 modules",
      lastActivity: "Il y a 5 heures",
    },
    {
      title: "JavaScript Moderne",
      progress: 30,
      modules: "6/20 modules",
      lastActivity: "Il y a 1 semaine",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 pb-24 sm:pb-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-black">Tableau de bord</h1>
          <Link href="/compte">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-14 h-14 flex items-center justify-center">
                <Image
                  src={"/images/kiluazoldick.jpg"}
                  alt={"profilewallpaper"}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                ></Image>
              </div>
            </div>
          </Link>
        </header>

        {/* Section de bienvenue et statistiques */}
        <div className="mb-12 bg-gradient-to-r from-[#d85155] to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Bonjour, Kilua Zoldick !</h2>
          <p className="mb-4">
            Continuez votre apprentissage là où vous vous étiez arrêté
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">12</p>
              <p>Cours suivis</p>
            </div>
            <div>
              <p className="text-3xl font-bold">8</p>
              <p>Badges</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24h</p>
              <p>d&apos;étude</p>
            </div>
          </div>
        </div>

        {/* Cartes principales - cachées sur mobile */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <Link key={card.title} href={card.path}>
                <div
                  className={`${card.color} text-white rounded-xl p-8 text-center min-h-[200px] flex flex-col items-center justify-center hover:opacity-90 transition-opacity`}
                >
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Section progression */}
        <div className="mt-12 bg-gray-100 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">Votre progression</h2>
            <Link
              href="/mon-parcours"
              className="text-[#ED1C24] hover:underline"
            >
              Voir tout
            </Link>
          </div>

          <div className="space-y-6">
            {progressData.map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-black">{item.title}</span>
                  <span className="text-[#ED1C24] font-semibold">
                    {item.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                  <div
                    className="bg-[#ED1C24] h-2.5 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>{item.modules}</span>
                  <span>{item.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommandations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Recommandé pour vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-4 flex">
              <div className="bg-gray-200 border-2 border-dashed rounded-lg w-16 h-16 mr-4" />
              <div>
                <h3 className="font-bold text-lg text-black">React Avancé</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Hooks, Context et Redux
                </p>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-400 mr-1">★★★★☆</span>
                  <span className="text-gray-500">(24 avis)</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 flex">
              <div className="bg-gray-200 border-2 border-dashed rounded-lg w-16 h-16 mr-4" />
              <div>
                <h3 className="font-bold text-lg text-black">
                  UX Design Pratique
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  De la théorie à la pratique
                </p>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-400 mr-1">★★★★★</span>
                  <span className="text-gray-500">(18 avis)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de navigation mobile - affichée seulement sur mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="grid grid-cols-4">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.path}
                className="flex flex-col items-center justify-center py-3 hover:bg-gray-50"
              >
                <span className="text-2xl mb-1">{card.icon}</span>
                <span className="text-xs">{card.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
