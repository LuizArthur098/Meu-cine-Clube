import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// IMPORTANTE: Importamos o hook useContext e a nossa referência do ThemeContext
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <header style={{ 
      padding: '15px', 
      borderBottom: '1px solid #ccc', 
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>🎬 MeuCineClube</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          {/* Mudamos dinamicamente as cores dos links baseado no tema ativo */}
          <Link to="/" style={{ color: tema === 'escuro' ? '#90caf9' : 'blue' }}>Home</Link>
          <Link to="/favoritos" style={{ color: tema === 'escuro' ? '#90caf9' : 'blue' }}>Favoritos</Link>
          <Link to="/login" style={{ color: tema === 'escuro' ? '#90caf9' : 'blue' }}>Login</Link>
        </nav>
      </div>

      {/* Botão interativo que dispara a nossa função global */}
      <button 
        onClick={alternarTema}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #ccc',
          background: tema === 'escuro' ? '#ffffff' : '#333333',
          color: tema === 'escuro' ? '#000000' : '#ffffff'
        }}
      >
        Mudar para Modo {tema === 'claro' ? 'Escuro 🌙' : 'Claro ☀️'}
      </button>
    </header>
  );
}

export default Header;