import React, { useState } from "react";
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
import { SetaDireita } from "../../assets/Icons/Setadireita/SetaDireita";


export const Carrossel = () => {

    const d = new Date();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [active, setActive] = useState(meses[d.getMonth()]);

    return (



        <div className='carrossel-container' >

            {active === "Janeiro" &&

                <div className='car-card'>

                    <div className='mes'>

                        <h1>Janeiro</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Fevereiro")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Janeiro />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>

            }

            {active === "Fevereiro" &&


                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Janeiro")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Fevereiro</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Março")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Fevereiro />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>
                </div>

            }

            {active === "Março" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Fevereiro")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Março</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Abril")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    < Marco />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>
            }


            {active === "Abril" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Março")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Abril</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Maio")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Abril />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>

            }


            {active === "Maio" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Abril")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Maio</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Junho")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>



                    <Maio />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>
            }


            {active === "Junho" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Maio")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Junho</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Julho")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Junho />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>
            }


            {active === "Julho" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Junho")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Julho</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Agosto")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Julho />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>
            }

            {active === "Agosto" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Julho")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Agosto</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Setembro")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Agosto />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>

            }

            {active === "Setembro" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Agosto")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <div className='nome-mes'>

                            <h1>Setembro</h1>


                        </div>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Outubro")
                            }
                            ><SetaDireita />
                            </button>

                        </div>
                    </div>
                    <Setembro />

                    <div>

                        <Link to='/seleciona-unidade'>

                            <Button buttonSize='btn--m'
                                buttonStyle='btn--solido'>

                                <h5>Criar novo agendamento</h5>

                            </Button>

                        </Link>

                    </div>
                </div>
            }

            {active === "Outubro" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Setembro")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Outubro</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Novembro")
                            }
                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Outubro />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>

                </div>

            }

            {active === "Novembro" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Outubro")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Novembro</h1>

                        <div className='rolar-direita'>

                            <button onClick={() =>
                                setActive("Dezembro")
                            }

                            ><SetaDireita /></button>

                        </div>

                    </div>

                    <Novembro />
                    
                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>
                </div>
            }


            {active === "Dezembro" &&

                <div className='car-card'>

                    <div className='mes'>

                        <div className='rolar-esquerda'>

                            <button onClick={() =>
                                setActive("Novembro")
                            }

                            ><SetaDireita /></button>

                        </div>

                        <h1>Dezembro</h1>

                    </div>

                    <Dezembro />

                    <Link to='/seleciona-unidade'>

                        <Button buttonSize='btn--m'
                            buttonStyle='btn--solido'>

                            <h5>Criar novo agendamento</h5>

                        </Button>

                    </Link>
                </div>
            }

        </div>



    )
}