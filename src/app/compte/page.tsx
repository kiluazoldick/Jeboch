import Link from "next/link";
import Image from "next/image";

export default function Compte() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <Link href="/dashboard">
            <button className="flex items-center text-black mb-6">
              ← Retour
            </button>
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24">
              <Image
                src={"/images/kiluazoldick.jpg"}
                alt={"profilwallpaper"}
                width={96}
                height={96}
                className="rounded-full object-cover w-full h-full"
              ></Image>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">KiluaZoldick</h1>
              <p className="text-gray-600">kiluazoldick@gmail.com</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/mon-parcours">
            <div className="border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h2 className="text-xl font-bold text-black">Mon Parcours</h2>
            </div>
          </Link>

          <Link href="/parametres">
            <div className="border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer">
              <div className="bg-[#ED1C24] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                ⚙️
              </div>
              <h2 className="text-xl font-bold text-black">Paramètres</h2>
            </div>
          </Link>

          <Link href="/deconnexion">
            <div className="border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h2 className="text-xl font-bold text-black">Déconnexion</h2>
            </div>
          </Link>
        </div>

        <div className="mt-12 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-black mb-4">
            Informations personnelles
          </h2>
          <div className="space-y-3 text-black">
            <p>
              <strong>Nom:</strong> Utilisateur
            </p>
            <p>
              <strong>Email:</strong> utilisateur@example.com
            </p>
            <p>
              <strong>Abonnement:</strong> Premium
            </p>
            <button className="text-[#ED1C24] hover:underline mt-4">
              Modifier les informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
