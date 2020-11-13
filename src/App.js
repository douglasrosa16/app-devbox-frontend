import React, { useState, useEffect } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import api from './services/api';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers([response.data])
    })
    
  }, []);


  function buscaUsuarios(e){
    e.preventDefault();
    api.get('users').then((response) => {
      setUsers([response.data]);       
    });       
    console.log(users)
  }
  
  async function cadastraUsuario(){
    const nome = document.getElementById("usuario").value;
    const idade = document.getElementById("idade").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("mail").value;
    
    const newUser = 
      {        
        name: nome,
        wpp: whatsapp,
        mail: email,
        age: idade
      }
    ;
    setUsers([newUser]);
    
    const res = await api.post('cadastro', {
      name: nome,
      wpp: whatsapp,
      mail: email,
      age: idade
    })
    return res.data;
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
          <input type="text" id="mail"/>
        </div>        
        <div className="btn-cadastrar">
        <button type="submit" onClick={cadastraUsuario}>Cadastrar</button>
        </div>        
      </form>      
    </div>
    
    <button id="btn-show-users" onClick={buscaUsuarios} type="button">Mostra usuários</button>    
    <ul>      
      {users.map(user => <li key={user}>{user.email}</li>)}
    </ul>
    </>
  );
}

export default App;
