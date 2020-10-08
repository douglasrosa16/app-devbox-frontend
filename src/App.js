import React from 'react';

import './styles/GlobalStyles';

function App() {



  return (
    <>
    <div className="main">
      <form action="/">
        Informe um nome
        <input type="text"/>
        Informe a idade
        <input type="number" name="idade" id="idade"/>
        Whatsapp
        <input type="number"/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
      
    </>
  );
}

export default App;
