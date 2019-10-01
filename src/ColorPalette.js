import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ColorBox from './ColorBox'
import PaletteNavbar from './PaletteNavbar'
import Footer from './Footer'
import {getPaletteShades} from './helpers'
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
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

        const {palette, format, sliderMarks,handleFormat, classes} = this.props;
        const colorBoxes = palette.colors[this.state.shadeLevel].map (color => (
            <ColorBox 
                bgColor = {color[format]}
                colorName = {color.name}
                key={uuid()}
                onCopy = {this.handleCopy}
                format = {format}
                paletteId = {palette.id}
                id={color.id}
                showingFullPalette={true}
            />
        ))
          
          getPaletteShades(palette)
        return (
            <div className={classes.colorPalette}>
                <div className={classes.header}>
                    <PaletteNavbar 
                        handleFormat = {handleFormat} 
                        format = {format} 
                        marks = {sliderMarks}
                        changeShade = {this.changeShade}
                        hiddenSlider = {false}
                    />

                    <div className={classes.link}>
                         <Button>
                            <Link className= {classes.linkBack} id="LinkBackTo" to = "/"><i className="fas fa-arrow-left"></i> Go back</Link>
                        </Button>
                    </div>
                </div>
                <div className={classes.colorBoxesContainer}>
                    {colorBoxes}
                </div>

                <Footer {...palette}/>
    
            </div>
        )
    }
}

export default withStyles(styles)(ColorPalette);