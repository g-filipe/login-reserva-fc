import React, { useState } from 'react';
import './SelecionaUnidade.css';
import { Button } from '../../components/Button/Button';
import { Navbar2 } from '../../components/Navbar2/Navbar2';
import img from '../../assets/newsletter-effects.png'
import { MapPin } from '../../assets/Icons/MapPin/MapPin';
import { Link } from 'react-router-dom';


const SelecionaUnidade = () => {


  const [unidade, setUnidade] = useState(false)
  const SP = "/calendario-sp"
  const Santos = "/calendario-santos"
const not = "/NotFound"

  return (


    <div className="App">

      <div>

        <Navbar2 />

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
              onClick={() => {
                setUnidade(SP);
              }}
            > São Paulo </Button>

            <Button
              buttonStyle='btn--select'
              buttonSize='btn--m'
              onClick={() => {
                setUnidade(Santos);
              }}
            > Santos </Button>


            <Link to={unidade?unidade:not} >

              <Button
                buttonSize='btn--m'
              > Continuar </Button>

            </Link>

            <Link to="/principal-adm">

              <Button
                buttonStyle='btn--vazado'
                buttonSize='btn--m'
              > Voltar </Button>

            </Link>

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
            onClick={() => {
              setUnidade(SP);              
            }}
          > São Paulo </Button>

          <Button
            buttonStyle='btn--select'
            buttonSize='btn--m'
            onClick={() => {
              setUnidade(Santos);
            }}
          > Santos </Button>

          <Link to={unidade}>

            <Button
              buttonSize='btn--m'
            > Continuar </Button>

          </Link>

          <Link to='principal-adm'>

            <Button
              buttonStyle='btn--vazado'
              buttonSize='btn--m'
            > Voltar </Button>
          </Link>

        </div>
      </div>

    </div>
  );
}

export default SelecionaUnidade;
