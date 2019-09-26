import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MainNavbar.css'

class MainNavbar extends Component {
    render(){
        return(
            <div className="MainNavbar" >
                <h1>Color Palettes</h1>
                <div className="MainNavbar-link">
                <h4>
                    <Link to ="/newpalette">Create A New Palette</Link>
                </h4>
                    
                </div>
                
            </div>
        )
    }
}

export default MainNavbar;