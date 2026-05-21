import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Estado para armazenar o usuário logado.
  // Buscamos no localStorage para manter a sessão ativa mesmo se der F5.
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem('meuCineClube:usuario');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  // Função que simula o login do usuário
  const login = (email, senha) => {
    // Simulação simples: se preencheu os campos, loga com sucesso
    if (email && senha) {
      const dadosUsuario = { email, nome: 'Luiz Arthur' };
      setUsuario(dadosUsuario);
      localStorage.setItem('meuCineClube:usuario', JSON.stringify(dadosUsuario));
      return true; // Retorna true para a página saber que deu certo
    }
    return false;
  };

  // Função para deslogar do sistema
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('meuCineClube:usuario');
  };

  return (
    // Compartilhamos o estado do usuário e as funções de login e logout
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}