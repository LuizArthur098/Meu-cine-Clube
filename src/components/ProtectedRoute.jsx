import React, { useContext } from 'react';
// IMPORTANTE: O 'Navigate' (com N maiúsculo) é um componente de redirecionamento declarativo
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { usuario } = useContext(AuthContext);

  // Se o usuário NÃO estiver logado, barra o acesso e joga ele para a tela de login
  if (!usuario) {
    /* 
       Usamos o <Navigate to="..." replace /> aqui porque ele substitui a rota atual no histórico, 
       impedindo que o usuário caia em um loop infinito ao clicar no botão 'Voltar' do navegador.
    */
    return <Navigate to="/login" replace />;
  }

  // Se o usuário estiver logado, permite que ele veja a página protegida normalmente
  return children;
}

export default ProtectedRoute;