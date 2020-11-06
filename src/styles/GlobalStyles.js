import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;     
  }

  h1 {
    margin-top: 24px;
    
    font-size: 28px;
    text-align: center;    
    color: black;
  }

  form {
    padding: 15px;
    text-align: left;
    max-width: 350px;   
    display: block;
    margin: 0 auto;    
  }

  label {
    margin-top: 10px;
  }

  input {
    margin-top: 4px;
    height: 20px;
  }

  .btn-cadastrar {
    margin-top: 20px;
    text-align: center;
  } 

  button {
    text-align: center;
    width: 120px;
    height: 30px;
  }

  .dados {
    display: flex;
    flex-direction: column;
  }

  #btn-show-users {
    padding: 5px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .listUsers {
    margin-top: 8px;
    margin-left: 10px;
  }
`; 