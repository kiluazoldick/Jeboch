import Link from "next/link";

export default function Parcours() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <Link href="/compte">
            <button className="flex items-center text-black">← Retour</button>
          </Link>
          <h1 className="text-3xl font-bold text-center text-black">
            Mon Parcours
          </h1>
          <div className="w-6"></div>
        </header>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-black font-medium">Progression globale</span>
            <span className="text-[#ED1C24] font-bold">65%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#ED1C24] h-4 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Formation {item}
                  </h3>
                  <p className="text-gray-600 mt-2">10 cours • 5 heures</p>
                </div>
                <span className="bg-[#ED1C24] text-white px-3 py-1 rounded-full text-sm">
                  {item * 25}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-black h-2.5 rounded-full"
                  style={{ width: `${item * 25}%` }}
                ></div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="border border-black text-black py-2 rounded-lg hover:bg-gray-100">
                  Voir les détails
                </button>
                <button className="bg-[#ED1C24] text-white py-2 rounded-lg hover:bg-red-700">
                  Continuer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
