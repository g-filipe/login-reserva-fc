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

      
<div className = 'calendar-web'>


            <ReactCalendar />

</div>

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
