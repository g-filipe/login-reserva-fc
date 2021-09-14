import './SolicitacaoCalendario.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro.png'
import ReactCalendar from '../../components/Calendar/Calendar';

const SolicitacaoCalendario = () => {

  return (


    <div className="calendar-App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="calendar-spa-home">

        <div className="calendar-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="calendar-spa-home-right">

          <div className='calendar-text'>

            <h1> Selecione o escritório </h1>

          </div>

          <div className='solicita-calendar'>

            <ReactCalendar />

          </div>

          <div className='calendar-btn'>


            <Button
              buttonSize='btn--m'
            > Continuar </Button>

            <Button
              buttonStyle='btn--vazado'
              buttonSize='btn--m'
            > Voltar </Button>

          </div>

        </div>
      </div>


      {/* MOBILE */}

      <div className='calendar-container'>


        <div className='calendar-card'>


          <div className='calendar-text'>

            <h4> Selecione a data:</h4>

          </div>

          <div className='solicita-calendar'>

            <ReactCalendar />

          </div>

          <div className='calendar-btn'>

            <Button
              buttonSize='btn--m'
            > Continuar </Button>

            <Button
              buttonStyle='btn--vazado'
              buttonSize='btn--m'
            > Voltar </Button>

          </div>
        </div>

      </div>

    </div>
  );
}

export default SolicitacaoCalendario;
