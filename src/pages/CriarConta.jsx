import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../App.css';
import jbLogo from '../assets/logo_sem_fundo.png';

const CriarConta = () =>{
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>
              Criar Conta
            </span>
            <span className='login-form-title'>
              <img src={jbLogo} alt='JB Logo' />
            </span>

            <div class='wrap-input'>
              <input
                className={nome !== "" ? 'has-val input' : 'input'}
                type='text'
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nome completo'></span>
            </div>

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

            <div class='wrap-input'>
              <input
                className={confirmedPassword !== '' ? 'has-val input' : 'input'}
                type='password'
                value={confirmedPassword}
                onChange={e => setConfirmedPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Confirme a senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div class="text-center">
              <span className='txt1'>Possui conta?</span>
              <Link className='txt2' to='/'>Clique aqui!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CriarConta;
