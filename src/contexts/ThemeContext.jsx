import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Estado que armazena qual o tema atual ('claro' ou 'escuro')
  // Usamos uma função de inicialização para ler o localStorage e lembrar o tema escolhido pelo utilizador
  const [tema, setTema] = useState(() => {
    const temaSalvo = localStorage.getItem('meuCineClube:tema');
    return temaSalvo ? temaSalvo : 'claro';
  });

  // Função para inverter o tema atual
  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  useEffect(() => {
    localStorage.setItem('meuCineClube:tema', tema);
    
    if (tema === 'escuro') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [tema]); // O array de dependências garante que o efeito só roda quando o 'tema' mudar

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}