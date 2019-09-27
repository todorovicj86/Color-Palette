import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import {CopyToClipboard} from 'react-copy-to-clipboard'
// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'
import PaletteNavbar from './PaletteNavbar'
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js'
import './ColorPalette.css'
import {getPaletteShades} from './helpers'
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

        const palette = this.props.palette;
        const colorBoxes = palette.colors[this.state.shadeLevel].map (color => (
            <ColorBox 
                    bgColor = {
                        (this.props.format === 'hex' &&  chroma(color.hex).hex()) ||
                        (this.props.format === "rgb" && chroma(color.rgb).css()) ||
                        (this.props.format === "rgba" && chroma(color.rgba).alpha(0.9).css())                                                             
                    }
                    colorName = {color.name}
                    key={uuid()}
                    onCopy = {this.handleCopy}
                    format = {this.props.format}
                    paletteId = {palette.id}
            />
        ))
        // console.log(palette.colors[0])
        // for(let i = 0; i < palette.colors.length; i++){
        //     console.log(palette.colors[i].color)
        //   }
          
          getPaletteShades(palette)
        return (
            <div className="ColorPalette">
                <div className="ColorPalette-header">
                    <PaletteNavbar handleFormat = {this.props.handleFormat} 
                                    format = {this.props.format} 
                                    marks = {this.props.sliderMarks}
                                    changeShade = {this.changeShade}
                                    />

                    <div className="ColorPalette-link">
                         <Button>
                            <Link className= "LinkBackTo" id="LinkBackTo" to = "/"><i class="fas fa-arrow-left"></i> Go back</Link>
                        </Button>
                    </div>
                </div>
                <div className="ColorPalette-ColorBoxes">
                    {colorBoxes}
                </div>

                <div className="ColorPalette-Footer">
                    <PaletteFooter paletteName = {palette.paletteName} />
                </div>

            </div>
        )
    }
}

export default ColorPalette;