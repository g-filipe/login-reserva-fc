import React from "react";
import './Carrossel.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Janeiro } from "../Agendamentos/1Janeiro";
import { Fevereiro } from "../Agendamentos/2Fevereiro";
import { Marco } from "../Agendamentos/3Marco";
import { Abril } from "../Agendamentos/4Abril";
import {Maio} from "../Agendamentos/5Maio";
import { Junho } from "../Agendamentos/6Junho";
import { Julho } from "../Agendamentos/7Julho";
import { Agosto } from "../Agendamentos/8Agosto";
import { Setembro } from "../Agendamentos/9Setembro";
import { Outubro } from "../Agendamentos/10Outubro";
import { Novembro } from "../Agendamentos/11Novembro"
import { Dezembro } from "../Agendamentos/12Dezembro";


export const Carrossel = () => {
    
    return(
        
    <div className ='carrossel-container'>

<Janeiro /> <Fevereiro /> < Marco/> <Abril /> <Maio /> <Junho /> <Julho /> <Agosto /> <Setembro /> <Outubro /> <Novembro /> <Dezembro />
{/* <Setembro/> < Outubro/> */}

</div>







        )
}