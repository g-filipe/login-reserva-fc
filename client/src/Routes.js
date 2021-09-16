import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginColaborador from "./Pages/LoginColaborador/LoginColaborador";
import LoginAdm from "./Pages/LoginAdm/LoginAdm";
import Home from "./Pages/Prototipo/Home";
import PrincipalAdm from "./Pages/PrincipalAdm/PrincipalAdm";
import ConfirmaAgenda from "./Pages/ConfirmaAgenda/ConfirmaAgenda";
import ConfirmaAlt from "./Pages/ConfirmaAlt/ConfirmaAlt";
import CancelaAgenda from "./Pages/CancelaAgenda/CancelaAgenda";
import SelecionaUnidade from "./Pages/SelecionaUnidade/SelecionaUnidade";
import Diretrizes from "./Pages/Diretrizes/Diretrizes";
import NotFound from "./Pages/NotFound/NotFound";
import SolicitacaoCalendario from "./Pages/SolicitacaoCalendario/SolicitacaoCalendario";
import Agendamentos from "./Pages/Agendamentos/Agendamentos";

// Ainda sem autenticação

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
               
                <Route exact path="/" component={Home} />
                <Route path="/login-adm" component={LoginAdm} />
                <Route path="/login-colaborador" component={LoginColaborador} />
                <Route path="/principal-adm" component={PrincipalAdm} />
                <Route path="/confirma-alt" component={ConfirmaAlt} />
                <Route path="/confirma-agenda" component={ConfirmaAgenda} />
                <Route path="/cancela-agenda" component={CancelaAgenda} />
                <Route path="/seleciona-unidade" component={SelecionaUnidade} />
                <Route path="/diretrizes" component={Diretrizes} />
                <Route path="/calendario" component={SolicitacaoCalendario} />
                <Route path="/agendamentos" component={Agendamentos} />
                <Route component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;