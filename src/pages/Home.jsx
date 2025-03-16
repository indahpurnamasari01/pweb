import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-pink-600 text-white text-center">
      <h1 className="text-4xl font-extrabold drop-shadow-lg mb-4 flex items-center">
        📖 LUMAQUR'AN
      </h1>
      <p className="text-lg mb-6 italic">
        "Mari membaca dan memahami Al-Qur'an dengan mudah"
      </p>

      <NavLink
        to="/ayat"
        className="bg-white text-pink-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition-all duration-300 transform hover:scale-110"
      >
        📜 Buka Daftar Ayat
      </NavLink>
      <NavLink to="/asmaulhusna" className="bg-white text-pink-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition-all duration-300 transform hover:scale-110 mt-6">
      🌟 Asmaul Husna
      </NavLink>
      <NavLink
      to="/doa"
     className="bg-white text-pink-700 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition-all duration-300 transform hover:scale-110 mt-6"
>
     🤲 Doa Harian
      </NavLink>

      <p className="mt-10 text-sm italic"> 
        web by @indhprnamasari01_
      </p>
    </div>
  );
}

export default Home;
