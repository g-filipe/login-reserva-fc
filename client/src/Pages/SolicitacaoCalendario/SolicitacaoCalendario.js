import './SolicitacaoCalendario.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro.png'
import ReactCalendar from '../../components/Calendar/Calendar';

const SolicitacaoCalendario = () => {


  return (


    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      {/* <div className="calendar-spa-home"> */}

        {/* <div className="calendar-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div> */}
        {/* <div className="calendar-spa-home-right"> */}

         {/* <div className='solicita-calendar'> */}

<div className = 'calendar-web'>


            <ReactCalendar />

</div>

          {/* </div> */}

          

        {/* </div> */}
      {/* </div> */}


      {/* MOBILE */}

      <div className='calendar-container'>


        <div className='calendar-card'>


          <div className='solicita-calendar'>

            <ReactCalendar />

          </div>

        </div>

      </div>

    </div>
  );

}

export default SolicitacaoCalendario;
