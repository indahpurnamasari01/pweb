import { useEffect, useState } from "react";

function AsmaulHusna() {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://asmaul-husna-api.vercel.app/api/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        return res.json();
      })
      .then((data) => {
        setAsmaulHusna(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white">📌 Loading...</p>;
  if (error) return <p className="text-center text-red-500">⚠ {error}</p>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-300 to-pink-800 text-white p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">🌟 Asmaul Husna</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {asmaulHusna.map((item) => (
          <div key={item.urutan} className="bg-pink-900 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
          >

            
            <h2 className="text-3xl font-bold">{item.arab}</h2>
            <p className="text-xl font-semibold">{item.latin}</p>
            <p className="text-sm mt-2">{item.arti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsmaulHusna;
