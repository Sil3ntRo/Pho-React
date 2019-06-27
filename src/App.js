import React from 'react';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
            font-family: 'Roboto', sans-serif;
    
  }
  
  h1, h2, h3 {
        font-family: 'Righteous', cursive;
  
  }

`

function App() {
  return (
    <>
        <h1>Pho-React</h1>
        <GlobalStyle/>
        <div>Hello Pho-React</div>
      </>
  );
}

export default App;
