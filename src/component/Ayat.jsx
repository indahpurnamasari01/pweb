import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Ayat() {
  const [surah, setSurah] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-300 to-pink-800 text-white p-6">
    
      <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
        📖 Daftar Surah
      </h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surah.map((surat) => (
          <div
            key={surat.nomor}
            className="bg-pink-900 hover:bg-pink-700 hover:scale-105 transition transform duration-300 rounded-lg p-6 shadow-lg text-center cursor-pointer"
            onClick={() => navigate(`/quran/${surat.nomor}`)} 
          >
            <h2 className="text-2xl font-semibold ">{surat.nama}</h2>
            <p className="text-lg font-medium text-white">{surat.namaLatin}</p>
            <p className="text-sm text-gray-300 mt-2">
              📍 {surat.tempatTurun} | 📝 {surat.jumlahAyat} Ayat
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ayat;
