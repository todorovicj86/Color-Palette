import React, { Component } from 'react'
import './PaletteFooter.css'

class PaletteFooter extends Component{
    render(){
        return(
            <div className="PaletteFooter">
                <h6>{this.props.paletteName}</h6>
            </div>
        )
    }
}

export default PaletteFooter;