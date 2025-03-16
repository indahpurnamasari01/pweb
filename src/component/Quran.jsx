import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

function Quran() {
  const { nomorSurah } = useParams(); 
  const [dataAyat, setDataAyat] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true); 
    fetch(`https://equran.id/api/v2/surat/${nomorSurah}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        return res.json();
      })
      .then((data) => {
        setDataAyat(data.data.ayat);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [nomorSurah]);

  if (loading) return <p className="text-center text-white">📌 Loading...</p>;
  if (error) return <p className="text-center text-red-500">⚠ {error}</p>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-300 to-pink-800 text-white p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">📖 Ayat Al-Qur'an</h1>

      <div className="grid grid-cols-1 md:grid-col gap-6">
        {dataAyat.map((ayat) => (
          <div key={ayat.nomorAyat} className="bg-pink-900 p-6 rounded-lg shadow-lg text-right">
            <p className="text-2xl font-semibold">{ayat.teksArab}</p>
            <p className="text-sm italic mt-2">{ayat.teksLatin}</p>
            <p className="text-sm mt-2">{ayat.teksIndonesia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quran;
