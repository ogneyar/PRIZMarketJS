import React from 'react'
import { NavLink } from 'react-router-dom'

// import logo from '../../assets/logo.svg'
import logo from '../../assets/prizmarket_logo.png'

import './HomePage.css'


export const HomePage = () => {
    return (

        <div className="Home">
            <header className="Home-header" id="header">
                    
                {/* <NavLink 
                    className="NavLink" 
                    to="/tutorials/main"
                >
                    Tutorials
                </NavLink> */}

                <img src={logo} className="Home-logo" alt="logo" />

                <h1 style={{textDecoration: "underline wavy"}}>
                    Сайт на реконструкции
                </h1>
                
            </header>

        </div>

    )
}

