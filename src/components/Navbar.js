import React, { useState } from 'react'
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} alt="logo..." className="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={show ? faTimes : faBars} style={{color:'white'}}/>
                    
                    </button>
                    <div className={` ${show ? 'collapse navbar-collapse':'hide'}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">about me</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link" href="/">services</a>
                        </li>  
                        <li className="nav-item">
                        <a className="nav-link" href="/">how work</a>
                        </li>  
                        <li className="nav-item">
                        <a className="nav-link" href="/">portfolio</a>
                        </li>              
                        <li className="nav-item">
                        <a className="nav-link" href="/">contacts</a>
                        </li>  
                    </ul>
                    </div>
                </div>
                
</nav>
    )
}

export default Navbar
