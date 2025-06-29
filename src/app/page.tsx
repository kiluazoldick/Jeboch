import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto text-center items-center p-8">
        <Image
          src="/images/logo.jpg"
          alt="JeBoch Logo"
          width={240}
          height={240}
          className="mx-auto mb-3 rounded-full"
        />
        <h1 className="text-5xl font-bold mb-6 text-black">JeBoch</h1>
        <p className="text-xl mb-12 text-gray-700">
          Votre plateforme d&#39;éducation et de formation
        </p>

        <div className="flex gap-6 justify-center">
          <Link href="/inscription">
            <button className="bg-[#ED1C24] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition">
              S&#39;inscrire
            </button>
          </Link>
          <Link href="/connexion">
            <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition">
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
