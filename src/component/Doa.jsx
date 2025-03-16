import { useEffect, useState } from "react";

function Doa() {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://open-api.my.id/api/doa")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setDoaList(data);
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
      <h1 className="text-4xl font-extrabold text-center mb-6">📜 Doa Harian</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doaList.map((doa) => (
          <div
            key={doa.id}
            className="bg-pink-900 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold ">{doa.judul}</h2>
            <p className="text-3xl font-arabic my-3">{doa.arab}</p>
            <p className="text-lg italic">{doa.latin}</p>
            <p className="text-sm mt-2 ">{doa.terjemah}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doa;
