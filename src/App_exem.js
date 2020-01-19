import React, { useState } from 'react';

//Componente, retorna css, html etc (function app())[Bloco isolado de HTML, CSS e JS o uqal não interfere no restante da aplicação]
//Estado: Informações mantidas pelo componente(Lembrar: imutabilidade)
//Propriedade: Informações que um cpomponente PAI passa para o componente FILHO

function App() {
const [counter, setCounter ] = useState(0);

  function incrementCounter(){
     setCounter(counter +1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
