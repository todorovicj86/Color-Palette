import React, { Component } from 'react'
import './PaletteFooter.css'

class PaletteFooter extends Component{
    render(){
        return(
            <div className="PaletteFooter">
                <h5>{this.props.paletteName}</h5>
            </div>
        )
    }
}

export default PaletteFooter;