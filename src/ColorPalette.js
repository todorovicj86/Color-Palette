import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ColorBox from './ColorBox'
import PaletteNavbar from './PaletteNavbar'
import Footer from './Footer'
import {getPaletteShades} from './helpers'
import './ColorPalette.css'
import uuid from 'uuid'

class ColorPalette extends Component {
    constructor(props){
        super(props);
        this.state = {
            shadeLevel: 500,

        }
        this.handleCopy = this.handleCopy.bind(this)
        this.changeShade = this.changeShade.bind(this)
    }

    handleCopy(evt){
       this.props.onCopy(true)
    }

    changeShade(shadeLevel){
        this.setState({
            shadeLevel: shadeLevel
        })
    }

    render(){

        const {palette, format, sliderMarks,handleFormat} = this.props;
        const colorBoxes = palette.colors[this.state.shadeLevel].map (color => (
            <ColorBox 
                    bgColor = {color[format]}
                    colorName = {color.name}
                    key={uuid()}
                    onCopy = {this.handleCopy}
                    format = {format}
                    paletteId = {palette.id}
            />
        ))
          
          getPaletteShades(palette)
        return (
            <div className="ColorPalette">
                <div className="ColorPalette-header">
                    <PaletteNavbar 
                        handleFormat = {handleFormat} 
                        format = {format} 
                        marks = {sliderMarks}
                        changeShade = {this.changeShade}
                    />

                    <div className="ColorPalette-link">
                         <Button>
                            <Link className= "LinkBackTo" id="LinkBackTo" to = "/"><i className="fas fa-arrow-left"></i> Go back</Link>
                        </Button>
                    </div>
                </div>
                <div className="ColorPalette-ColorBoxes">
                    {colorBoxes}
                </div>

                <Footer {...palette}/>

            </div>
        )
    }
}

export default ColorPalette;