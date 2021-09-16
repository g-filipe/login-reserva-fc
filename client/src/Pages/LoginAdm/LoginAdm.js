import './LoginAdm.css';
import logo from '../../assets/F_LARANJA.png'
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import calendario from '../../assets/calendario.png'
import { Link } from 'react-router-dom';



const LoginAdm = () => {



  return (

    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}


      <div className="adm-spa-home-c">

        <div className="adm-spa-home-logo-c">
          <img src={calendario} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="adm-spa-home-right-c">

          <h1>Área do Administrador</h1>

          <div className="adm-dados">

            <Input

              placeholder=" E-mail/Usuario"
              type="email"
              inputStyle="input--vazado"
              inputSize="input-g"
            ></Input>

            <Input

              placeholder="Senha"
              type="password"
              inputStyle="input--vazado"
              inputSize="input-g"
            ></Input>

          </div>


          <div className="adm-button">

            <Link to="/principal-adm">

              <Button> Entrar </Button>

            </Link>

          </div>

          <div className="adm-options">

            <div>

              <input type="checkbox"></input>

              <label>Lembrar</label>

            </div>

            <a href=''>Esqueceu sua senha?</a>

          </div>


          <div className='adm-options2'>

            <a href=''>Primeiro acesso? Clique aqui.</a>

          </div>


        </div>
      </div>

      {/* MOBILE */}

      <div className='adm-container'>

        <div className='adm-card'>

          <div className='adm-figure'>

            <img src={logo} alt='logo Fcamara' />

          </div>

          <div className="adm-dados">

            <Input

              placeholder="E-mail/Usuario"
              type="email"
              inputStyle="input--vazado"
              inputSize="input-g"
            ></Input>

            <Input

              placeholder="Senha"
              type="password"
              inputStyle="input--vazado"
              inputSize="input-g"
            ></Input>

          </div>

          <div className="adm-button">

            <Link to="/principal-adm">

              <Button> Entrar </Button>

            </Link>

          </div>

          <div className="adm-options">

            <div>

              <input type="checkbox"></input>

              <label>Lembrar</label>

            </div>

            <a href=''>Esqueceu sua senha?</a>

          </div>


          <div className='adm-options2'>

            <a href=''>Primeiro acesso? Clique aqui.</a>

          </div>

        </div>
      </div>
    </div>

  );
}

export default LoginAdm;
