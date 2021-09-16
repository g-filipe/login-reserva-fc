import './CancelaAgenda.css';
import { Button } from '../../components/Button/Button';
import { Navbar2 } from '../../components/Navbar2/Navbar2';
import img from '../../assets/blog_programador4.png'
import { Check } from '../../assets/Icons/Check/Check';

const CancelaAgenda = () => {
  return (




    <div className="App">

      <div>

        <Navbar2 />

      </div>

      {/* WEB */}

      <div className="cancagenda-spa-home">

        <div className="cancagenda-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="cancagenda-spa-home-right">
        <div className='cancagenda-figure'>

<Check />

</div>

<div className='cancagenda-text'>

<h1> Sua reserva foi cancelada com sucesso </h1>

</div>

<div className='cancagenda-btn'>


<Button
buttonSize='btn--m'
> Ver meus agendamentos </Button>

<Button
buttonStyle='btn--vazado'
buttonSize='btn--m'
> Desfazer </Button>

</div>

        </div>
      </div>


      {/* MOBILE */}

      <div className='cancagenda-container'>


        <div className='cancagenda-card'>


          <div className='cancagenda-figure'>

            <Check />

          </div>

          <div className='cancagenda-text'>

            <h4> Sua reserva foi cancelada com sucesso</h4>

          </div>

          <Button
            buttonSize='btn--m'
          > Ver meus agendamentos </Button>

          <Button
            buttonStyle='btn--vazado'
            buttonSize='btn--m'
          > Desfazer </Button>

        </div>
      </div>

    </div>
  );
}

export default CancelaAgenda;
