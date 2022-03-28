import './App.css';
import criarConta from './criarConta'
import jbLogo from './assets/logo_sem_fundo.png';

function App() {
  return (
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>
              Login
            </span>
            <span className='login-form-title'>
              <img src={jbLogo} alt='JB Logo' />
            </span>

            <div class='wrap-input'>
              <input className='input' type='email' />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div class='wrap-input'>
              <input className='input' type='password' />
              <span className='focus-input' data-placeholder='Password'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div class="text-center">
              <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href='./criarConta.js'>Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
