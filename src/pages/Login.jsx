import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../App.css';
import jbLogo from '../assets/logo_sem_fundo.png';
import codeLogo from '../assets/logo.png'

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>
              Login
            </span>
            <span className='login-form-title code-logo'>
              <img src={jbLogo} alt='Code Logo' />
            </span>

            <div class='wrap-input'>
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div class='wrap-input'>
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div class="text-center">
              <span className='txt1'>Não possui conta?</span>
              <Link className='txt2' to='./CriarConta'>Clique aqui!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
