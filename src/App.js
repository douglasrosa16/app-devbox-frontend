import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {



  return (
    <>
    <GlobalStyles />


    <div className="main">
      
      <h1>Cadastro de Usuário</h1>
        
      <form action="/">
        <div className="dados">
          <label>Informe seu nome</label> 
          <input type="text"/>
          <label htmlFor=""> Informe sua idade</label>
          <input type="number" name="idade" id="idade"/>
          <label htmlFor="">Whatsapp</label> 
          <input type="number"/>
        </div>        
        <div className="btn-cadastrar">
        <button type="submit">Cadastrar</button>
        </div>
        
      </form>
    </div>
      
    </>
  );
}

export default App;
