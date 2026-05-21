import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// Importamos o array de dados mockados
import { filmesMock } from '../services/filmesMock';
// Importamos o contexto do tema para manter os estilos corretos
import { ThemeContext } from '../contexts/ThemeContext';

function Home() {
  const { tema } = useContext(ThemeContext);
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simulando o tempo de resposta (delay) de uma API real
    const timer = setTimeout(() => {
      setFilmes(filmesMock);
      setCarregando(false);
    }, 800); // 800 milissegundos de loading

    return () => clearTimeout(timer);
  }, []);

  if (carregando) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Carregando catálogo de filmes...</h3>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>🍿 Filmes em Destaque</h2>
      
      {/* Grid de exibição dos cartões utilizando flexbox */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '25px', 
        justifyContent: 'center' 
      }}>
        {filmes.map((filme) => (
          <div 
            key={filme.imdbID} 
            style={{
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: tema === 'escuro' ? '#1e1e1e' : '#f9f9f9',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src={filme.Poster} 
              alt={filme.Title} 
              style={{ width: '100%', height: '280px', borderRadius: '4px', objectFit: 'cover' }} 
            />
            <h3 style={{ 
              fontSize: '16px', 
              margin: '10px 0 5px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {filme.Title}
            </h3>
            <p style={{ fontSize: '14px', color: '#777', marginBottom: '15px' }}>Año: {filme.Year}</p>
            
            <Link 
              to={`/filme/${filme.imdbID}`}
              style={{
                display: 'block',
                padding: '8px',
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;