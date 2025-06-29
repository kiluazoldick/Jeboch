"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Deconnexion() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md text-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-black">
          Déconnexion réussie
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Vous avez été déconnecté avec succès. Redirection vers
          l&apos;accueil...
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="bg-[#ED1C24] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700">
              Retour à l&apos;accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
