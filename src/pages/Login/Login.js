import React, { useState } from 'react';
import './login.css';
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff  } from "react-icons/hi";


function Login () {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src = "https://github.com/g-filipe/sources/blob/main/calendar.jpg?raw=true" alt="Duas mulheres e um calendário ilustrado" />
            </div>
            <div className="login-right">
                <h1>Acesse sua conta</h1>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input 
                    type="text"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-loginInputPassword">
                    <MdLock />
                    <input 
                    type={show ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                           <HiEye
                           
                           onClick={handleClick}
                           />
                        ) : (
                            <HiEyeOff 
                            onClick={handleClick}
                            />
                            
                        )}
                    </div>
                </div>

                <button type="submit">
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default Login;
