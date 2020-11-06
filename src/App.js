import React, { useState } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import api from './services/api';
import Usuarios from './Pages/Usuarios';

function App() {

  const [user, setUser] = useState(['Kleber','Wellen','Diego']);

  //const usuarios = ['Douglas','Wellen','Diego'];

  function buscaUsuarios(e){
    e.preventDefault();
    const users = api.get('users').then((response) => {
      console.log(response.data);
    });
    setUser(users);    
  }
  
  function cadastraUsuario(){
    const nome = document.getElementById("usuario").value;
    const idade = document.getElementById("idade").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    
    const newUser = [
      {
        id: 3,
        name: nome,
        wpp: whatsapp,
        mail: email,
        age: idade
      }
    ];
    setUser(newUser);
    //setUser(newUser);
    console.log(newUser);
    //const res = await api.post('cadastro', {newUser})
    //return res.data;
  }
  
  return (
    <>    
    <GlobalStyles />

    <div className="main">
      
      <h1>Cadastro de Usuário</h1>
        
      <form action="/">
        <div className="dados">
          <label>Informe seu nome</label> 
          <input type="text" id="usuario"/>
          <label htmlFor=""> Informe sua idade</label>
          <input type="number" name="idade" id="idade"/>
          <label htmlFor="">Whatsapp</label> 
          <input type="number" id="whatsapp"/>
          <label htmlFor="">Email</label> 
          <input type="text" id="email"/>
        </div>        
        <div className="btn-cadastrar">
        <button type="submit">Cadastrar</button>
        </div>        
      </form>      
    </div>
    
    <button id="btn-show-users" onClick={buscaUsuarios} type="button">Mostra usuários</button>    
    
    <button id="btn-cad-user"type="button" onClick={cadastraUsuario}>Cadastra usuário</button>    

    
    </>
  );
}

export default App;
