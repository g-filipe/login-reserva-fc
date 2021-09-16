import './ConfirmaAlt.css';
import { Button } from '../../components/Button/Button';
import { Navbar2 } from '../../components/Navbar2/Navbar2';
import img from '../../assets/blog_programador4.png'
import { Check } from '../../assets/Icons/Check/Check';

const ConfirmaAlt = () => {
  return (




    <div className="confalt-App">

      <div>

        <Navbar2 />

      </div>

      {/* WEB */}

      <div className="confalt-spa-home">

        <div className="confalt-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="confalt-spa-home-right">
          <div className='confalt-figure'>

            <Check />

          </div>

          <div className='confalt-text'>

            <h1> As taxas de ocupação foram atualizadas! </h1>
            <h4> Em breve os Colaboradores receberão uma notificação.</h4>

          </div>

          <div className='confalt-btn'>


            <Button
              buttonSize='btn--m'
            > Voltar à página inicial </Button>

            <Button
              buttonStyle='btn--vazado'
              buttonSize='btn--m'
            > Desfazer </Button>

          </div>

        </div>
      </div>


      {/* MOBILE */}

      <div className='confalt-container'>


        <div className='confalt-card'>


          <div className='confalt-figure'>

            <Check />

          </div>

          <div className='confalt-text'>

            <h4> As taxas de ocupação foram atualizadas! Em breve os Colaboradores receberão uma notificação.</h4>

          </div>

          <Button
            buttonSize='btn--m'
          > Voltar à página inicial </Button>

          <Button
            buttonStyle='btn--vazado'
            buttonSize='btn--m'
          > Desfazer </Button>

        </div>
      </div>

    </div>
  );
}

export default ConfirmaAlt;
