import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '15px', background: '#eee', marginBottom: '20px' }}>
      <h1>🎬 MeuCineClube</h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ fontWeight: 'bold', color: 'blue' }}>Ir para Home</Link>
        <Link to="/favoritos" style={{ fontWeight: 'bold', color: 'blue' }}>Ir para Favoritos</Link>
        <Link to="/login" style={{ fontWeight: 'bold', color: 'blue' }}>Ir para Login</Link>
      </nav>
    </header>
  );
}

export default Header;