import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
const Home = () => 

    
    <div>

    <Navbar />
    
    
    <div className="spa-home">



        <div className="spa-home-logo">
            <img src = "https://github.com/g-filipe/sources/blob/main/greeting.jpg?raw=true" alt="Pessoas reunidas em ambiente de trabalho" />
        </div>
        <div className="spa-home-right">
            <h4>Neque &#38; porro quisquam ipsum</h4>
            <h1>Dolor sittconsectetur, adipisci &#38; velit</h1>
            <p>porro quisquam est qui dolorem ipsum quia dolor sit</p>

            
            <a href="http://localhost:3000/login"><button type="submit">
                    FAÇA AQUI A SUA RESERVA
            </button></a>
        </div>
    </div>
    </div>

export default Home;