import './SelecionaUnidade.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/newsletter-effects.png'
import { MapPin } from '../../assets/Icons/MapPin/MapPin';

const SelecionaUnidade = () => {
  
    return (


    <div className="App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="selunid-spa-home">

        <div className="selunid-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="selunid-spa-home-right">
          <div className='selunid-figure'>

            <MapPin />

          </div>

          <div className='selunid-text'>

            <h1> Selecione o escritório </h1>

          </div>

          <div className='selunid-btn'>

            <Button
              buttonStyle='btn--select'
              buttonSize='btn--m'
            > São Paulo </Button>

            <Button
              buttonStyle='btn--select'
              buttonSize='btn--m'
            > Santos </Button>

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

      <div className='selunid-container'>


        <div className='selunid-card'>


          <div className='selunid-figure'>

            <MapPin />

          </div>

          <div className='selunid-text'>

            <h4> Selecione o escritório</h4>

          </div>

          <Button
            buttonStyle='btn--select'
            buttonSize='btn--m'
          > São Paulo </Button>

          <Button
            buttonStyle='btn--select'
            buttonSize='btn--m'
          > Santos </Button>

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
  );
}

export default SelecionaUnidade;