import './App.css';
import List from './components/list';
import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SimpleMap from './components/maps';
import MapsContext from './context/maps/context';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

function App() {
  const { setState: setGlobalState, state } = useContext(MapsContext);
  const getToken = () => {
    const token = new URLSearchParams(window.location.search).get('token');

    return token;
  };
  useEffect(() => {
    setGlobalState({ ...state, token: getToken() || '' });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>token '{state.token}'.</p>
          <List />
        </header>
      </div>
      <Wrapper>
        <SimpleMap />
      </Wrapper>
    </>
  );
}

export default App;
