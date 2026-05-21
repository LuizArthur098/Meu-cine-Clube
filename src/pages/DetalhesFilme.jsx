import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { filmesMock } from '../services/filmesMock';
import { ThemeContext } from '../contexts/ThemeContext';
import { FavoritosContext } from '../contexts/FavoritosContext';

function DetalhesFilme() {
  const { id } = useParams();
  const { tema } = useContext(ThemeContext);
  const { favoritos, adicionarFavorito, removerFavorito } = useContext(FavoritosContext);

  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  
  // NOVIDADE PASSO 9: Estado para controlar a mensagem de feedback na tela
  const [mensagemFeedback, setMensagemFeedback] = useState('');

  const isFavoritado = favoritos.some((item) => item.imdbID === id);

  useEffect(() => {
    const filmeEncontrado = filmesMock.find((f) => f.imdbID === id);
    
    const timer = setTimeout(() => {
      setFilme(filmeEncontrado);
      setCarregando(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleFavoritoClick = () => {
    if (isFavoritado) {
      removerFavorito(filme.imdbID);
      // REGRA DO PASSO 9: Feedback de remoção
      setMensagemFeedback('❌ Filme removido dos seus favoritos!');
    } else {
      adicionarFavorito(filme);
      // REGRA DO PASSO 9: Feedback de adição
      setMensagemFeedback('✨ Filme adicionado aos favoritos com sucesso!');
    }

    // Remove a mensagem da tela após 3 segundos automaticamente
    setTimeout(() => {
      setMensagemFeedback('');
    }, 3000);
  };

  if (carregando) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Carregando detalhes do filme...</h3>;
  }

  if (!filme) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Filme não encontrado no catálogo!</h3>
        <Link to="/" style={{ color: '#007bff' }}>Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}> {/* Elemento pai relativo para o alerta */}
      
      {/* NOVIDADE PASSO 9: Alerta flutuante elegante na tela */}
      {mensagemFeedback && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: isFavoritado ? '#4caf50' : '#f44336',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '5px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000,
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}>
          {mensagemFeedback}
        </div>
      )}

      <div style={{ 
        maxWidth: '800px', 
        margin: '20px auto', 
        padding: '20px',
        display: 'flex',
        gap: '30px',
        backgroundColor: tema === 'escuro' ? '#1e1e1e' : '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
      }}>
        <img 
          src={filme.Poster} 
          alt={filme.Title} 
          style={{ width: '250px', height: '370px', borderRadius: '6px', objectFit: 'cover' }} 
        />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{filme.Title}</h2>
            <p style={{ color: '#888', marginBottom: '15px' }}><strong>Ano de Lançamento:</strong> {filme.Year}</p>
            <p style={{ lineHeight: '1.6', fontSize: '16px' }}><strong>Sinopse:</strong> {filme.Plot}</p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <button 
              onClick={handleFavoritoClick}
              style={{
                padding: '10px 20px',
                backgroundColor: isFavoritado ? '#e53935' : '#e91e63',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {isFavoritado ? '💔 Remover dos Favoritos' : '❤️ Adicionar aos Favoritos'}
            </button>
            
            <Link 
              to="/" 
              style={{
                padding: '10px 20px',
                backgroundColor: '#666',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilme;