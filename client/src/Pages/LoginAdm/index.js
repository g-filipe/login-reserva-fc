import './style.css';
import logo from '../../assets/logo5.png'

const LoginAdm = () => {
  return (
    <div className="App">

      <div className='container'>

        <div className='card'>

          <div className = 'figure'>

            <img src={logo} alt='logo Fcamara' />

          </div>

          <div className='dados'>

            <input type='e-mail' id='usuario' placeholder="e-mail"></input>

          </div>

          <div className='dados'>

            <input type='password' id='senha' placeholder="senha"></input>

          </div>

          {/* <div className='options'>

            <input type='checkbox'></input>
            <label> Lembrar </label>

            <a href=''>Esqueceu sua senha?</a>

          </div> */}

          <div className='button'>

            <button>Login</button>

          </div>
{/* 
          <div className='options'>

            <a href=''>Primeiro acesso? Clique aqui.</a>

          </div> */}

        </div>
      </div>







    </div>
  );
}

export default LoginAdm;
