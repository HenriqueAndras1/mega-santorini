import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 👈 importa aqui
import Home from './pages/home/Home';
import Produtos from './pages/home/Produtos';
import Sobre from './pages/home/Sobre';
import Contato from './pages/home/Contato';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer /> {/* 👈 adiciona aqui */}
      </div>
    </Router>
  );
}

export default App;
