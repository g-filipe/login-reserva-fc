import './PrincipalAdm.css';
import { Button } from '../../components/Button/Button';
import { Navbar } from '../../components/Navbar/Navbar';
import img from '../../assets/servicos-digital.png'
import { Bell } from '../../assets/Icons/Bell/bell';
import { Link } from 'react-router-dom';

const PrincipalAdm = () => {


    return (

        <div className="App">

            <div>

                <Navbar />

            </div>

            {/* WEB */}

            <div className="adm-spa-home">

                <div className="adm-spa-home-logo">
                    <img src={img} alt="Pessoas reunidas em ambiente de trabalho" />
                </div>
                <div className="adm-spa-home-right">
                    <div className='ola'>

                        <h1>Olá, Sangue Laranja</h1>

                    </div>


                    <Link to='/seleciona-unidade'>

                        <Button
                            buttonStyle='btn--icon'
                            buttonSize='btn--gg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9">
                                </path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0">

                                </path>
                            </svg>

                            Novo Agendamento

                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6">
                                </polyline>
                            </svg>
                        </Button>

                    </Link>

                    <Button
                        buttonStyle='btn--icon'
                        buttonSize='btn--gg'
                    > <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>

                        Seus Agendamentos

                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right2">
                            <polyline points="9 18 15 12 9 6">
                            </polyline>
                        </svg>

                    </Button>


                    <Link to='/diretrizes'>

                        <Button
                            buttonStyle='btn--icon'
                            buttonSize='btn--gg'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
                                <line x1="4" y1="21" x2="4" y2="14">
                                </line><line x1="4" y1="10" x2="4" y2="3">
                                </line>
                                <line x1="12" y1="21" x2="12" y2="12">
                                </line><line x1="12" y1="8" x2="12" y2="3">
                                </line>
                                <line x1="20" y1="21" x2="20" y2="16">
                                </line>
                                <line x1="20" y1="12" x2="20" y2="3">
                                </line>
                                <line x1="1" y1="14" x2="7" y2="14">
                                </line>
                                <line x1="9" y1="8" x2="15" y2="8">
                                </line>
                                <line x1="17" y1="16" x2="23" y2="16">
                                </line>
                            </svg>

                            Diretrizes

                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right3">
                                <polyline points="9 18 15 12 9 6">
                                </polyline>
                            </svg>

                        </Button>

                    </Link>

                </div>
            </div>


            {/* MOBILE */}

            <div className='admcontainer'>

                <div className='admcard'>

                    <div className='ola'>

                        <h4>Olá, Sangue Laranja</h4>

                    </div>


                    <Link to='/seleciona-unidade'>

                        <Button
                            buttonStyle='btn--icon'
                            buttonSize='btn--gg'><Bell />

                            Novo Agendamento

                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6">
                                </polyline>
                            </svg>
                        </Button>

                    </Link>


                    <Button
                        buttonStyle='btn--icon'
                        buttonSize='btn--gg'
                    > <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>

                        Seus Agendamentos

                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right2">
                            <polyline points="9 18 15 12 9 6">
                            </polyline>
                        </svg>

                    </Button>

                    <Link to='/diretrizes'>

                        <Button
                            buttonStyle='btn--icon'
                            buttonSize='btn--gg'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
                                <line x1="4" y1="21" x2="4" y2="14">
                                </line><line x1="4" y1="10" x2="4" y2="3">
                                </line>
                                <line x1="12" y1="21" x2="12" y2="12">
                                </line><line x1="12" y1="8" x2="12" y2="3">
                                </line>
                                <line x1="20" y1="21" x2="20" y2="16">
                                </line>
                                <line x1="20" y1="12" x2="20" y2="3">
                                </line>
                                <line x1="1" y1="14" x2="7" y2="14">
                                </line>
                                <line x1="9" y1="8" x2="15" y2="8">
                                </line>
                                <line x1="17" y1="16" x2="23" y2="16">
                                </line>
                            </svg>

                            Diretrizes

                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right3">
                                <polyline points="9 18 15 12 9 6">
                                </polyline>
                            </svg>

                        </Button>

                    </Link>

                </div>
            </div>

        </div>
    );
}

export default PrincipalAdm;
