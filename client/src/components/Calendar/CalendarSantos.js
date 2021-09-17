import React from "react";
import Calendar from 'react-calendar';
import { useState } from "react";
import './Calendar.css';
import { Button } from "../Button/Button";
import axios from "axios";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";


export const ReactCalendarSantos = () => {


    // Conexão com db


    const criarAgendamento = async (agendamento) => {
        const Created = await axios.post('http://localhost:3000/api/agendamentos', agendar);
        if (Created.status === 201) {
            console.log('Ceated');
        } else
            console.log('Bad Request');
    };

    // Pegando a data

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    const dia = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const [agendar, setAgendar] = useState({
        "id_escritorio": 2,
        "id_usuario": 2,
        "data": ''
    })

    console.log(agendar);


    // Modal

    const [openModal, setOpenModal] = useState(false);


    return (


        <div className='tudo'>

            {/* Modal */}

            {openModal && <Modal closeModal={setOpenModal}>

                <div className='modal-text'>

                    <h1>Deseja confirmar reserva?  </h1>

                </div>

                <Link to='confirma-agenda'>

                    <Button
                        type='Submit'
                        buttonSize='btn--p'
                        buttonStyle='btn--solido'
                        onClick={() => {
                            criarAgendamento();
                        }}
                    >Sim</Button>

                </Link>

                <Button
                    buttonSize='btn--p'
                    buttonStyle='btn--vazado'
                    onClick={() => setOpenModal(false)}
                >
                    Voltar
                </Button>

            </Modal>}


            <div className='calendar'>

                <div className='calendar-text'>

                    <h4> Selecione a data:</h4>
                </div>

                <div>
                    <Calendar locale='pt-br' onChange={onChange} value={date} >

                    </Calendar>

                </div>

                <div className='agendar'>


                    <Button

                        onClick={() => {
                            setOpenModal(true);
                            setAgendar({ ...agendar, data: dia });
                        }}

                        buttonStyle='btn--solido'
                        buttonSize='btn--m'
                    > Continuar </Button>


                    <Link to='seleciona-unidade'>
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

export default ReactCalendarSantos