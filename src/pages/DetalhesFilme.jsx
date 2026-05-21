import React, { useState, useEffect, useContext } from 'react';
// IMPORTANTE: Importamos o useParams para ler parâmetros da URL e o Link para voltar
import { useParams, Link } from 'react-router-dom';
import { filmesMock } from '../services/filmesMock';
import { ThemeContext } from '../contexts/ThemeContext';

function DetalhesFilme() {
  const { id } = useParams();
  const { tema } = useContext(ThemeContext);

  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Procuramos no nosso array o filme que possui o mesmo imdbID da URL 
    const filmeEncontrado = filmesMock.find((f) => f.imdbID === id);
    
    // Simula um pequeno delay de carregamento de API
    const timer = setTimeout(() => {
      setFilme(filmeEncontrado);
      setCarregando(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]); // Executa novamente se o ID na URL mudar 

  if (carregando) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Carregando detalhes do filme...</h3>;
  }

  // Se o usuário digitar um ID manual na URL que não existe no nosso sistema
  if (!filme) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Filme não encontrado no catálogo!</h3>
        <Link to="/" style={{ color: '#007bff' }}>Voltar para a Home</Link>
      </div>
    );
  }

  return (
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
      {/* Pôster do Filme */}
      <img 
        src={filme.Poster} 
        alt={filme.Title} 
        style={{ width: '250px', height: '370px', borderRadius: '6px', objectFit: 'cover' }} 
      />

      {/* Informações Textuais */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{filme.Title}</h2>
          <p style={{ color: '#888', marginBottom: '15px' }}><strong>Ano de Lançamento:</strong> {filme.Year}</p>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}><strong>Sinopse:</strong> {filme.Plot}</p>
        </div>

        {/* Botão de Favoritar (Deixaremos o botão pronto, a lógica será no Passo 8)  */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
          <button 
            style={{
              padding: '10px 20px',
              backgroundColor: '#e91e63',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => alert('A funcionalidade de favoritos será ativada no Passo 8!')}
          >
            Adicionar aos Favoritos
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
  );
}

export default DetalhesFilme;