import './SolicitacaoCalendario.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/home-intro.png'
import ReactCalendarSP from '../../components/Calendar/CalendarSP';

const SolicitacaoCalendarioSP = () => {


  return (


    <div className="calendar-App">

      <div>

        <Navbar />

      </div>

      
<div className = 'calendar-web'>


            <ReactCalendarSP />

</div>

      {/* MOBILE */}

      <div className='calendar-container'>


        <div className='calendar-card'>


          <div className='solicita-calendar'>

            <ReactCalendarSP />

          </div>

        </div>

      </div>

    </div>
  );

}

export default SolicitacaoCalendarioSP;
