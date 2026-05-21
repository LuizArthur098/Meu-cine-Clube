import React, { useState, useContext } from 'react';
// IMPORTANTE: Importamos o useNavigate para fazer o redirecionamento via código
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const { usuario, login, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook para navegar o usuário programaticamente

  // Estados locais para controlar os campos do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página recarregue com o envio do form
    
    const logou = login(email, senha);
    if (logou) {
      navigate('/'); // Redireciona para a Home
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  // Se o usuário já estiver logado, exibe o botão de Logout
  if (usuario) {
    return (
      <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
        <h2>Olá, {usuario.nome}!</h2>
        <p>Você já está conectado como: {usuario.email}</p>
        <button 
          onClick={logout}
          style={{ padding: '8px 16px', backgroundColor: '#e53935', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sair da Conta (Logout)
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>🔐 Área de Acesso</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Digite seu e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Digite sua senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;