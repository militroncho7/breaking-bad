import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 7px;
`;

function App() {

  const consultarAPI = async () => {
    const api = await (await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes'));
    const frase = await api.json();
    console.log(frase[0]);
  };

  return (
    <Contenedor>
      <Boton
        onClick={ consultarAPI }
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
