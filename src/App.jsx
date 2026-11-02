import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solucao from "./pages/Solucao";
import Publico from "./pages/Publico";
import Galeria from "./pages/Galeria";
import Equipe from "./pages/Equipe";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/publico" element={<Publico />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;