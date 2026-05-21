import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../contexts/FavoritosContext';
import { ThemeContext } from '../contexts/ThemeContext';

function Favoritos() {
  const { favoritos, removerFavorito } = useContext(FavoritosContext);
  const { tema } = useContext(ThemeContext);

  // Se a lista global estiver vazia
  if (favoritos.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>🎬 Sua lista de favoritos está vazia!</h2>
        <p style={{ color: '#777', margin: '15px 0' }}>Navegue pela Home e adicione seus filmes prediletos.</p>
        <Link to="/" style={{ color: '#007bff', fontWeight: 'bold' }}>Ir para a Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>❤️ Meus Filmes Favoritos</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        {favoritos.map((filme) => (
          <div 
            key={filme.imdbID} 
            style={{
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: tema === 'escuro' ? '#1e1e1e' : '#f9f9f9',
            }}
          >
            <img src={filme.Poster} alt={filme.Title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3 style={{ fontSize: '16px', margin: '10px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {filme.Title}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to={`/filme/${filme.imdbID}`} style={{ fontSize: '13px', color: '#007bff', textDecoration: 'none' }}>
                Ver Detalhes
              </Link>
              <button 
                onClick={() => removerFavorito(filme.imdbID)}
                style={{
                  padding: '5px',
                  backgroundColor: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;