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
                <img src = "https://github.com/g-filipe/sources/blob/main/servicos-cloud%20(1).png?raw=true" alt="Pessoas reunidas em ambiente de trabalho" />
            </div>
            <div className="login-right">
                <h4>Neque porro quisquam est qui dolorem ipsum</h4>
                <h1>Dolor sittconsectetur, adipisci &#38; velit</h1>
                <p>porro quisquam est qui dolorem ipsum quia dolor sit</p>

                
                <button type="submit">
                        FAÇA AQUI A SUA RESERVA
                </button>
            </div>
        </div>
    )
}

export default Login;