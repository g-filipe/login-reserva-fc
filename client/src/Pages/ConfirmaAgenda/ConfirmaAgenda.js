import './ConfirmaAgenda.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/blog_programador4.png'
import { Check } from '../../assets/Icons/Check/Check';
import { Link } from 'react-router-dom';

const ConfirmaAgenda = () => {
  return (


    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="confagenda-spa-home">

        <div className="confagenda-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="confagenda-spa-home-right">
          <div className='confagenda-figure'>

            <Check />

          </div>

          <div className='confagenda-text'>

            <h1> Reserva confirmada! </h1>
            <h4> Não esqueça de usar máscara e ácool em gel para continuar seprotegendo.
              Estamos te esperando.</h4>

          </div>

          <div className='confagenda-btn'>


          <Link to="/agendamentos">
              <Button
                buttonSize='btn--m'
              > Ver meus agendamentos </Button>

            </Link>

            <Link To="/principal-adm">

              <Button
                buttonStyle='btn--vazado'
                buttonSize='btn--m'
              > Voltar à página inicial </Button>

            </Link>

          </div>

        </div>
      </div>


      {/* MOBILE */}

      <div className='confagenda-container'>


        <div className='confagenda-card'>


          <div className='confagenda-figure'>

            <Check />

          </div>

          <div className='confagenda-text'>

            <h4> Reserva confirmada! Não esqueça de usar máscara e ácool em gel para continuar seprotegendo.
              Estamos te esperando</h4>

          </div>

          <Link to="/agendamentos">
         
          <Button
            buttonSize='btn--m'
          > Ver meus agendamentos </Button>

          </Link>

          
          <Link to="/principal-adm">
          
          <Button
            buttonStyle='btn--vazado'
            buttonSize='btn--m'
          > Voltar à página inicial </Button>


          </Link>

        </div>
      </div>

    </div>
  );
}

export default ConfirmaAgenda;
