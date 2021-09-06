import React, { Component } from 'react';
import  { MenuItems } from "./MenuItems"

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Reacti<i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={MenuItems.cName} href={item.url}>
                                  {item.title}  
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;