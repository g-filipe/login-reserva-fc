import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';



const Navbar = () =>{
// class Navbar extends Component {
    
    

    
    const [isMobile, setIsMobile] = useState(false);
   
    // Mudei pq o useState não estava funcionando - JP

    // state = { clicked: false };

    // handleClick = () => {
        //     this.setState({ clicked: !this.state.clicked})
        // }
        
        
        // render() {
            return (
                
                
                <nav className="NavbarItems">

                    <img class="navbar-logo"  src="https://blog.fcamara.com.br/wp-content/uploads/2019/10/Logotipo-FCamara.png" alt="Logo FCamara" />
                    
                    {/* <div className="menu-icon" onclick={this.handleClick}>
                        <i className= {this.state.clicked ? 'fas fa-times-square' : 'fas fa-bars'}></i>
                        
                    </div> */}
                    {/* <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}> */}
                    <ul onClick={() => setIsMobile(false)} className = {isMobile? 'nav-links-mobile' : 'nav-links'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key= {index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                    
                                </li>
                            )
                        })}
                    </ul>
                    <button onClick={() => setIsMobile(!isMobile)} className= 'mobile-menu-icon'>
                        {isMobile? (<i className = 'fas fa-times'></i>) : (<i className = 'fas fa-bars'></i>)}
                    </button>
                </nav>
            )
       
        }
// }

export default Navbar;