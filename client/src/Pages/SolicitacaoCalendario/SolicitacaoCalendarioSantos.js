import './SolicitacaoCalendario.css';
import { Button } from '../../components/Button/Button';
import { Navbar2 } from '../../components/Navbar2/Navbar2';
import img from '../../assets/home-intro.png'
import ReactCalendarSantos from '../../components/Calendar/CalendarSantos';

const SolicitacaoCalendarioSantos = () => {



  return (


    <div className="calendar-App">

      <div>

        <Navbar2 />

      </div>

      
<div className = 'calendar-web'>


            <ReactCalendarSantos />

</div>

      {/* MOBILE */}

      <div className='calendar-container'>


        <div className='calendar-card'>


          <div className='solicita-calendar'>

            <ReactCalendarSantos />

          </div>

        </div>

      </div>

    </div>
  );

}

export default SolicitacaoCalendarioSantos;
