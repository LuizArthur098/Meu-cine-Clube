import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';
import DetalhesFilme from './pages/DetalhesFilme';

import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
// IMPORTANTE: Importamos o provedor de favoritos
import { FavoritosProvider } from './contexts/FavoritosContext'; 
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        {/* Adicionamos o FavoritosProvider envolvendo as rotas */}
        <FavoritosProvider>
          <BrowserRouter>
            <Header />
            <main style={{ padding: '0 10px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/filme/:id" element={<DetalhesFilme />} />
                
                <Route 
                  path="/favoritos" 
                  element={
                    <ProtectedRoute>
                      <Favoritos />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;