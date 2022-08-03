import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Profitpage } from "./pages/Profitpage";
import { Usedpage } from "./pages/Usedpage";
import { Processingpage } from "./pages/Processingpage";
import { Calcpage } from "./pages/Calcpage";
import { Rulespage } from "./pages/Rulespage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profit" element={<Profitpage />} />
        <Route path="/used" element={<Usedpage />} />
        <Route path="/processing" element={<Processingpage />} />
        <Route path="/calc" element={<Calcpage />} />
        <Route path="/rules" element={<Rulespage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
