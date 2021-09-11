import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginColaborador from "./Pages/LoginColaborador";
import LoginAdm from "./Pages/LoginAdm";
import Home from "./Pages/Prototipo/Home";
import PrincipalAdm from "./Pages/PrincipalAdm/PrincipalAdm";
import ConfirmaAgenda from "./Pages/ConfirmaAgenda/ConfirmaAgenda";
import ConfirmaAlt from "./Pages/ConfirmaAlt/ConfirmaAlt";
import CancelaAgenda from "./Pages/CancelaAgenda/CancelaAgenda";


// Ainda sem autenticação

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Home} />
                <Route path="/login-adm" component={LoginAdm} />
                <Route path="/login-colaborador" component={LoginColaborador} />
                <Route path="/principal-adm" component={PrincipalAdm} />
                <Route path="/confirma-alt" component={ConfirmaAlt} />
                <Route path="/confirma-agenda" component={ConfirmaAgenda} />
                <Route path="/cancela-agenda" component={CancelaAgenda} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;