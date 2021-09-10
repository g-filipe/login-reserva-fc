import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginColaborador from "./Pages/LoginColaborador";
import LoginAdm from "./Pages/LoginAdm";
import Home from "./Pages/Prototipo/Home";


// Ainda sem autenticação

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={Home} />
                <Route path="/login-adm" component={LoginAdm} />
                <Route path="/login-colaborador" component={LoginColaborador} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;