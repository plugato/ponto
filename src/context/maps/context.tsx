import React, { createContext, useState } from 'react';

//Tipando os dados que quero para usuário
type UserType = {
  geolocation: {
    lat: number;
    lng: number;
    id: string;
  }[];
  token: string;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    geolocation: [{ lat: -23.3829291, lng: -51.9262769, id: '1' }],
    token: '',
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto UserContext
const MapsContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const MapsContextProvider: React.FC<any> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <MapsContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </MapsContext.Provider>
  );
};
export { MapsContextProvider };
export default MapsContext;
