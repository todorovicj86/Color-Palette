import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PaletteNavbar from './PaletteNavbar'
import Footer from './Footer'
import ColorBox from './ColorBox'
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid'
import chroma from 'chroma-js'
import './PaletteShades.css'
import uuid from 'uuid'


class PaletteShades extends Component {
//  make shades of one color
    getShades(){
        let shadeObj =[]
        const baseColor = this.props.color.color;
        const name = this.props.color.name;
        const darkestShade = chroma(baseColor).darken(4);
        const brightestShade = chroma(baseColor).brighten(2.6)
        const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        let colorShade = chroma.scale([brightestShade, baseColor, darkestShade]).colors(10); 
        for(let i = 0; i < levels.length; i++){
            let data = {
                name: name + " " + levels[i],
                color: colorShade[i]
            }
            shadeObj.push(data)
        }
        return shadeObj;
    }

    render(){
        const shades = this.getShades();
       
        const colorShades = shades.map(bgColor => (
            <ColorBox 
                colorName = {bgColor.name} 
                bgColor = {
                    (this.props.format === 'hex' &&  chroma(bgColor.color).hex()) ||
                    (this.props.format === "rgb" && chroma(bgColor.color).css()) ||
                    (this.props.format === "rgba" && chroma(bgColor.color).alpha(0.9).css())                                                             
                }
                onCopy = {this.props.onCopy}
                format = {this.props.format}
                key = {uuid()}                                               
            />
        
        ))
        return(
            <div className="PaletteShades">
                <div className="PaletteShades-header">
                    <PaletteNavbar handleFormat = {this.props.handleFormat} format = {this.props.format}/>
                    <div className = "PaletteShades-link">
                        <Button>
                            <Link className= "LinkBackTo" to = {`/palette/${this.props.palette.id}`}><i class="fas fa-arrow-left"></i> Go back</Link>
                        </Button>
                    </div>
                </div>
                <div className="ShadeBoxes">
                    {colorShades}
                </div>
                <Footer {...this.props.palette} />    
            </div>
        )
    }
}

export default PaletteShades;