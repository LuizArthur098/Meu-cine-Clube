import React from 'react';
// Importamos os componentes estruturais obrigatórios para a abordagem clássica/declarativa
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das nossas páginas e do componente Header
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Menu visível em todo o app */}
      
      <main style={{ padding: '0 10px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;