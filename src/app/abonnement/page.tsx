import Link from "next/link";

export default function Abonnement() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-3xl font-bold mb-12 text-center text-black">
        Choisissez votre abonnement
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {["Gratuit", "Premium", "Elite"].map((plan) => {
          let price;
          if (plan === "Gratuit") {
            price = "0 XAF";
          } else if (plan === "Premium") {
            price = "2500 XAF";
          } else {
            price = "5000 XAF";
          }
          return (
            <div
              key={plan}
              className="border border-gray-200 rounded-xl p-6 text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-black">{plan}</h2>
              <p className="text-4xl font-bold mb-6 text-[#ED1C24]">{price}</p>
              <ul className="mb-8 space-y-2 text-black">
                <li>Accès de base</li>
                <li>
                  {plan !== "Gratuit" ? "Contenu premium" : "Contenu limité"}
                </li>
                <li>
                  {plan === "Elite"
                    ? "Support prioritaire"
                    : "Support standard"}
                </li>
              </ul>
              <Link href="/onboarding">
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
                  Choisir
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
