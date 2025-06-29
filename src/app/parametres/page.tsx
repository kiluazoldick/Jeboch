import Link from "next/link";

export default function Parametres() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <Link href="/compte">
            <button className="flex items-center text-black">← Retour</button>
          </Link>
          <h1 className="text-3xl font-bold text-center text-black">
            Paramètres
          </h1>
          <div className="w-6"></div>
        </header>

        <div className="space-y-8 text-black">
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">Langue</h2>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Français</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">Notifications</h2>
            <div className="space-y-4">
              {["Email", "SMS", "Notifications push"].map((type) => (
                <div key={type} className="flex justify-between items-center">
                  <span className="text-black">{type}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <span className="sr-only">{`Activer ${type}`}</span>
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ED1C24]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-black mb-4">
              Confidentialité
            </h2>
            <div className="space-y-3">
              <button className="text-[#ED1C24] hover:underline block w-full text-left">
                Politique de confidentialité
              </button>
              <button className="text-[#ED1C24] hover:underline block w-full text-left">
                Conditions d&apos;utilisation
              </button>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
