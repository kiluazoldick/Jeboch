import Link from "next/link";

export default function PasswordReset() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">
          Réinitialiser le mot de passe
        </h1>

        <form className="space-y-4  text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <button
            type="button"
            className="w-full bg-[#ED1C24] text-white py-3 rounded-lg font-medium mt-6 hover:bg-red-700"
          >
            Envoyer les instructions
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/connexion">
            <span className="text-black hover:underline">
              Retour à la connexion
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
