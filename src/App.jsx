import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuranPage from "./pages/QuranPage";
import Home from "./pages/Home";
import AsmaulHusnaPage from "./pages/AsmaulHusnaPage";
import DoaPage from "./pages/DoaPage";
import AyatPage from "./pages/AyatPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ayat" element={<AyatPage/>} /> 
        <Route path="/quran/:nomorSurah" element={<QuranPage />} />
        <Route path="/asmaulhusna" element={<AsmaulHusnaPage/>} />
        <Route path="/doa" element={<DoaPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

