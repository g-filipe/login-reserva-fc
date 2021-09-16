import './SolicitacaoCalendario.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro.png'
import ReactCalendarSantos from '../../components/Calendar/CalendarSantos';

const SolicitacaoCalendarioSantos = () => {


  return (


    <div className="calendar-App">

      <div>

        <Navbar />

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
