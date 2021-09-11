import './style.css';
import logo from '../../assets/F_LARANJA.png'
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import calendario from '../../assets/calendario.png'

const LoginColaborador = () => {
  return (

    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}


      <div className="spa-home-c">

        <div className="spa-home-logo-c">
          <img src={calendario} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="spa-home-right-c">

        <h1>Área do colaborador</h1>

          <div className="dados">

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

          <div className="button">

            <Button> Entrar </Button>

          </div>

          <div className="options">

            <div>

              <input type="checkbox"></input>

              <label>Lembrar</label>

            </div>

            <a href=''>Esqueceu sua senha?</a>

          </div>


          <div className='options2'>

            <a href=''>Primeiro acesso? Clique aqui.</a>

          </div>


        </div>
      </div>

      {/* MOBILE */}

      <div className='container'>

        <div className='card'>

          <div className='figure'>

            <img src={logo} alt='logo Fcamara' />

          </div>

          <div className="dados">

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

          <div className="button">

            <Button> Entrar </Button>

          </div>

          <div className="options">

            <div>

              <input type="checkbox"></input>

              <label>Lembrar</label>

            </div>

            <a href=''>Esqueceu sua senha?</a>

          </div>


          <div className='options2'>

            <a href=''>Primeiro acesso? Clique aqui.</a>

          </div>

        </div>
      </div>
    </div>

  );
}

export default LoginColaborador;
