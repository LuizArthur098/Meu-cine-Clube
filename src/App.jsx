import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';
// IMPORTANTE: Importamos a nova página de detalhes 
import DetalhesFilme from './pages/DetalhesFilme'; 

import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
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
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;