import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-black">
          Bienvenue sur JeBoch !
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((step) => (
            <div key={step} className="p-6 border border-gray-200 rounded-xl">
              <div className="bg-[#ED1C24] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                {step}
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">
                Étape {step}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>

        <Link href="/dashboard">
          <button className="bg-[#ED1C24] text-white px-10 py-4 rounded-lg text-xl font-medium hover:bg-red-700">
            Commencer l&apos;aventure
          </button>
        </Link>
      </div>
    </div>
  );
}
