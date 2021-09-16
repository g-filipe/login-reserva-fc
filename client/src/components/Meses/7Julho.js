
import React from "react";
import '../Carrossel/Carrossel.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";


export const Julho = () => {
    
    const[dados, setDados] = useState([]) 
     

    useEffect(() =>{
        
        axios.get('http://localhost:3000/api/agendamentos/2')
        .then(res =>{
            // console.log(res)
            setDados(res.data)  
            
            })
        .catch(err => {
            console.log(err)
        })
        
    }, [])
    
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const mes = 6

    return(
        
    

<div className ='Carrossel'>



{dados.map((dados) =>{
    // console.log(dados.data[6])
    return ( 
        
          
        <div className='agenda'>

<ul>

{dados.data[5]=== '0' && dados.data[6] ==='7'?

<li key={dados.id_agendamento}><Button
buttonStyle = 'btn--agenda'
buttonSize = 'btn--xg'
>
<h2>{dados.data[8]}{dados.data[9]} de {meses[mes]}</h2>
<h3>Unidade: {dados.id_escritorio === 1? 'São Paulo' : 'Santos'} </h3>
</Button></li>

:null}

  </ul>

</div>



)})}



</div>




        )
}