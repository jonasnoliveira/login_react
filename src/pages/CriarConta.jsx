import '../App.css';
import jbLogo from '../assets/logo.png';

function CriarConta() {
    return(
        <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='text-center m-2'>
              Bem vindo!
            </span>
            <span>
              <img src={jbLogo} alt='JB Logo' />
            </span>

            <div class='wrap-input'>
              <input type='email' />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div class='wrap-input'>
              <input type='password' />
              <span className='focus-input' data-placeholder='Password'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Criar Conta</button>
            </div>

            <div class="text-center">
              <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href="https://www.youtube.com/watch?v=9pB_lwmLc74">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default CriarConta;