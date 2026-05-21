import React, { createContext, useState, useEffect } from 'react';

// Criamos o contexto isolado para os favoritos
export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  // Estado para armazenar o array de filmes favoritados.
  // Inicializa lendo do localStorage para persistir os dados entre recarregamentos.
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem('meuCineClube:favoritos');
    return salvos ? JSON.parse(salvos) : [];
  });

  // Efeito colateral: toda vez que a lista de favoritos mudar, atualiza o localStorage
  useEffect(() => {
    localStorage.setItem('meuCineClube:favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Função para adicionar um filme aos favoritos (evitando duplicatas)
  const adicionarFavorito = (filme) => {
    setFavoritos((listaAtual) => {
      const jaExiste = listaAtual.some((item) => item.imdbID === filme.imdbID);
      if (!jaExiste) {
        return [...listaAtual, filme];
      }
      return listaAtual; // Se já existir, mantém a lista igual
    });
  };

  // Função para remover um filme dos favoritos baseado no ID
  const removerFavorito = (id) => {
    setFavoritos((listaAtual) => listaAtual.filter((item) => item.imdbID !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}