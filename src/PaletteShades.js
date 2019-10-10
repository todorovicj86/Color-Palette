import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js'
import PaletteNavbar from './PaletteNavbar'
import ColorBox from './ColorBox'
import Footer from './Footer'
import styles from './styles/PaletteShadesStyles';


class PaletteShades extends Component {
    static defaultProps = {
        showingFullPalette: false,
    }

//  make shades of one color
    getShades(){
        let shadeObj =[]
        const baseColor = this.props.color.color;
        console.log(baseColor)
        const name = this.props.color.name;
        const darkestShade = chroma(baseColor).darken(4);
        const brightestShade = chroma(baseColor).brighten(2.6)
        const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        let colorShade = chroma.scale([brightestShade, baseColor, darkestShade]).colors(10); 
        for(let i = 0; i < levels.length; i++){
            let data = {
                name: name + " " + levels[i],
                color: colorShade[i],
                id: name,
            }
            shadeObj.push(data)
        }
        return shadeObj;
    }

    render(){
        const shades = this.getShades();
        const {format, handleFormat, palette, onCopy, classes, showingFullPalette} = this.props;
       
        const colorShades = shades.map(bgColor => (
            <ColorBox 
                colorName = {bgColor.name} 
                bgColor = {
                    (format === 'hex' &&  chroma(bgColor.color).hex()) ||
                    (format === "rgb" && chroma(bgColor.color).css()) ||
                    (format === "rgba" && chroma(bgColor.color).alpha(0.9).css())                                                             
                }
                onCopy = {onCopy}
                format = {format}
                key = {bgColor.name}
                id={bgColor.id}
                showingFullPalette = {showingFullPalette}                                           
            />
        
        ))
        return(
            <div className={classes.colorPalette}>
                <div className={classes.header} >
                    <PaletteNavbar 
                        handleFormat = {handleFormat} 
                        format = {format}
                        hiddenSlider = {true}
                        showingFullPalette = {showingFullPalette}
                    />
                    <div className = {classes.link}>
                        <Button>
                            <Link className= {classes.linkBack} to = {`/palette/${palette.id}`}><i className="fas fa-arrow-left"></i> Go back</Link>
                        </Button>
                    </div>
                </div>
                <div className={classes.colorBoxesContainer}>
                    {colorShades}
                </div>  
                <Footer {...palette}
                    showingFullPalette = {showingFullPalette} 
                />
            </div>
        )
    }
}

export default withStyles(styles)(PaletteShades);