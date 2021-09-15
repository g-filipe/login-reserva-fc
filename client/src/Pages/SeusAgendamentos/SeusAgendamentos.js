import './SeusAgendamentos.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/newsletter-effects.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { YearView } from 'react-calendar';

const SeusAgendamentos = () => {
  
  
  // pegar dados
  
  const[dados, setDados] = useState([]) 

  useEffect(() =>{

       axios.get('http://localhost:3000/api/agendamentos/2')
       .then(res =>{
         console.log(res)
         setDados(res.data)
       })
       .catch(err => {
         console.log(err)
       })
    
  }, [])

  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  
    
 return (


    <div className="agnd-App">

      <div>

        <Navbar />

      </div>

      {/* WEB */}

      <div className="agnd-spa-home">

        <div className="agnd-spa-home-logo">
          <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="agnd-spa-home-right">
          
          <div className='agnd-text'>

            <h1> Selecione o escritório </h1>

          </div>

          <div className='agnd-btn'>

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

      <div className='agnd-container'>


        <div className='agnd-card'>


          <div className='agnd-text'>

            <h4> Seus Agendamentos</h4>

          </div>


  {dados.map((dados) =>{
    return ( 

<div className='agenda'>
  
      <Button
    buttonStyle = 'btn--agenda'
    buttonSize = 'btn--xg'
    key={dados.id_agendamento}>
      <h2>{dados.data[8]}{dados.data[9]} de {meses[dados.data[5,6]-1]}</h2>
      <h3>Unidade: {dados.id_escritorio = 1? 'São Paulo' : 'Santos'} </h3>
      </Button>

      </div>

  )})}
  

        </div>
      </div>

    </div>
  );
}

export default SeusAgendamentos;
