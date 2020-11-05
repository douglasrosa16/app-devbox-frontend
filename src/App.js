import React, { useState } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import api from './services/api';

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
          <label htmlFor="">Email</label> 
          <input type="text"/>
        </div>        
        <div className="btn-cadastrar">
        <button type="submit">Cadastrar</button>
        </div>        
      </form>      
    </div>
    <div className="">
    <input defaultValue={process.env.REACT_APP_API_URL} />
    </div>    
    
    <button onClick={}>Mostra usuários</button>
    
    </>
  );
}

export default App;
