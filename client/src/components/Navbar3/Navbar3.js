import React, { useState } from 'react';
import { MenuItems3 } from "./MenuItems3";
import './Navbar3.css';



export const Navbar3 = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (

        <nav className="NavbarItems">

            <div>
                <img className="navbar-logo" src="https://blog.fcamara.com.br/wp-content/uploads/2019/10/Logotipo-FCamara.png" alt="Logo FCamara" />
            </div>

           <ul onClick={() => setIsMobile(false)} className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                {MenuItems3.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>

                        </li>
                        
                        )
                    })}
            </ul>
                    
            
            <button onClick={() => setIsMobile(!isMobile)} className='mobile-menu-icon'>
                {isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
            </button>
        </nav>
    )

}

