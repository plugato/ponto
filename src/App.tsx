import './App.css';
import List from './components/list';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import SimpleMap from './components/maps';
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
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
