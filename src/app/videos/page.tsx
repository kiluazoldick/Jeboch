import Link from "next/link";

export default function Videos() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <Link href="/dashboard">
            <button className="flex items-center text-black">← Retour</button>
          </Link>
          <h1 className="text-3xl font-bold text-center text-black">Vidéos</h1>
          <div className="w-6"></div> {/* Spacer */}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: "video-1" },
            { id: "video-2" },
            { id: "video-3" },
            { id: "video-4" },
            { id: "video-5" },
            { id: "video-6" },
          ].map((video, i) => (
            <div
              key={video.id}
              className="bg-gray-100 rounded-xl overflow-hidden"
            >
              <div className="bg-gray-300 border-2 border-dashed w-full h-48" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-black mb-2">
                  Tutoriel {i + 1}
                </h3>
                <p className="text-gray-600 mb-4">Description de la vidéo...</p>
                <button className="bg-[#ED1C24] text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Regarder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
