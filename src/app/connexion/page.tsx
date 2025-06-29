import Link from "next/link";

export default function Connexion() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">
          Connexion
        </h1>

        <form className="space-y-4  text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <button
            type="button"
            className="w-full bg-black text-white py-3 rounded-lg font-medium mt-6 hover:bg-gray-800"
          >
            <Link href="/dashboard">Se connecter</Link>
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/mot-de-passe-oublie">
            <span className="text-[#ED1C24] hover:underline block mb-2">
              Mot de passe oublié ?
            </span>
          </Link>
          <Link href="/inscription">
            <span className="text-black hover:underline">Créer un compte</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
