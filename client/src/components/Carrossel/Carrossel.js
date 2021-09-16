import React from "react";
import './Carrossel.css'
import { Janeiro } from "../Meses/1Janeiro";
import { Fevereiro } from "../Meses/2Fevereiro";
import { Marco } from "../Meses/3Marco";
import { Abril } from "../Meses/4Abril";
import { Maio } from "../Meses/5Maio";
import { Junho } from "../Meses/6Junho";
import { Julho } from "../Meses/7Julho";
import { Agosto } from "../Meses/8Agosto";
import { Setembro } from "../Meses/9Setembro";
import { Outubro } from "../Meses/10Outubro";
import { Novembro } from "../Meses/11Novembro"
import { Dezembro } from "../Meses/12Dezembro";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";


export const Carrossel = () => {


    return (

        <div className='carrossel-container'>


            <div className='card'>


                <h1>Janeiro</h1>

                <Janeiro />

                <Link to='/calendario'>

                    <Button buttonSize='btn--xg'
                        buttonStyle='btn--vazado'>

                        <h2>Criar novo agendamento</h2>

                    </Button>

                </Link>

            </div>

            <div className='card'>

                <h1>Fevereiro</h1>
                <Fevereiro />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>


            <div className='card'>

                <h1>Março</h1>
                < Marco />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>

            </div>


            <div className='card'>

                <h1>Abril</h1>
                <Abril />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>

            </div>


            <div className='card'>
                <h1>Maio</h1>
                <Maio />

                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>


            <div className='card'>


                <h1>Junho</h1>
                <Junho />

                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>


            <div className='card'>

                <h1>Julho</h1>
                <Julho />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>

            </div>

            <div className='card'>

                <h1>Agosto</h1>
                <Agosto />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>

            <div className='card'>


                <h1>Setembro</h1>

                <Setembro />
                <div className='btn-agnd'>


                    <Button buttonSize='btn--xg'
                        buttonStyle='btn--vazado'
                    >
                        <h2>Criar novo agendamento</h2>

                    </Button>

                </div>
            </div>


            <div className='card'>

                <h1>Outubro</h1>
                <Outubro />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>

            </div>

            <div className='card'>


                <h1>Novembro</h1>
                <Novembro />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>

            <div className='card'>


                <h1>Dezembro</h1>

                <Dezembro />
                <Button buttonSize='btn--xg'
                    buttonStyle='btn--vazado'>

                    <h2>Criar novo agendamento</h2>

                </Button>
            </div>

        </div>







    )
}