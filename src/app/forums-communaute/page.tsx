import Link from "next/link";

export default function Forums() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <Link href="/dashboard">
            <button className="flex items-center text-black">← Retour</button>
          </Link>
          <h1 className="text-3xl font-bold text-center text-black">
            Communauté
          </h1>
          <button className="bg-[#ED1C24] text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Nouveau sujet
          </button>
        </header>

        <div className="space-y-6">
          {[
            "Sujet 1",
            "Sujet 2",
            "Sujet 3",
            "Sujet 4",
            "Sujet 5",
            "Sujet 6",
          ].map((title, i) => (
            <div
              key={title}
              className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12"></div>
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Sujet de discussion {i + 1}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Par Utilisateur • 2 jours
                  </p>
                  <p className="mt-3 text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500">12 réponses</span>
                <button className="text-[#ED1C24] hover:underline">
                  Participer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
