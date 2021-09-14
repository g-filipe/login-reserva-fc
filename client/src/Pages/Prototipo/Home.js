import './Home.css';
import logo from '../../assets/F_LARANJA.png'
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import greeting from '../../assets/greeting.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (




    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="spa-home">

        <div className="spa-home-logo">
          <img src={greeting} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="spa-home-right">
          <h4>BEM-VINDO, SANGUE LARANJA</h4>
          <h1>Para agendar seu horário, entre numas das áreas abaixo:</h1>

          <Link to="/login-colaborador">

            <Button> Colaborador </Button>

          </Link>

          <Link to="/login-adm">

            <Button > Administrador </Button>

          </Link>

        </div>
      </div>


      {/* MOBILE */}

      <div className='container'>



        <div className='card'>


          <div className='figure'>

            <img src={logo} alt='logo Fcamara' />

          </div>

          <Link to="/login-colaborador">

            <Button> Colaborador </Button>

          </Link>

          <Link to="/login-adm">

            <Button> Administrador </Button>

          </Link>

        </div>
      </div>

    </div>
  );
}

export default Home;
