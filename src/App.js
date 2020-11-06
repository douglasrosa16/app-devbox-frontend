import React, { useState } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import api from './services/api';
import Usuarios from './Pages/Usuarios';

function App() {

  const [user, setUser] = useState([]);
  const usuarios = ['Douglas','Wellen','Diego'];

  function buscaUsuarios(e){
    e.preventDefault();
    const users = api.get('users').then((response) => {
      console.log(response.data);
    });
    return users;
  }
  
  async function cadastraUsuario(){
    console.log(user);
    const newUser = [
      {
        id: 3,
        name: 'Wellen'
      }
    ];
    setUser(newUser);
    console.log(user);
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
    
    <button id="btn-show-users" onClick={buscaUsuarios} type="button">Mostra usuários</button>    
    
    <button id="btn-cad-user"type="button" onClick={cadastraUsuario}>Cadastra usuário</button>    

    <div className="listUsers">
      <p>Lista de Usuários cadastrados</p>
      <ul>        
        {usuarios.map(u => (
          <li>{u}</li>
        ))
        }       
      </ul>
    </div>
    </>
  );
}

export default App;
