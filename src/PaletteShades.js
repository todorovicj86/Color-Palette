import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PaletteNavbar from './PaletteNavbar'
import ColorBox from './ColorBox'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles';
import './PaletteShades.css'
import uuid from 'uuid'


const styles = {
    paletteShades: {
        backgroundColor: "white",
        height: "100vh",
        overflow: "auto",

    },
    header: {
        display: "flex",
        flexDirection:"row",
        width: "100%",
        height:"6vh",
        "& div:first-child div:nth-child(2)": {
            opacity: "0",
        }
    },
    link: {
        alignItems: "center",
        display: "flex",
        marginRight: "7px",
        width: "30%",
        "& button, button:hover":{
            background: "transparent",
            flex: "0 1 auto",
            marginLeft: "auto",
            color: "black",
        }

    },
    colorBoxesContainer: {
        height: "90vh",
    },

    linkBack: {
        color: "black",
        "& i":{
            marginRight: "5px",
        },
        "&:hover":{
            textDecoration: "none",
            color:"blue"
        }
    }

}

class PaletteShades extends Component {
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
        const {format, handleFormat, palette, onCopy, classes } = this.props;

       
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
                key = {uuid()}
                id={bgColor.id}
                showingFullPalette = {false}                                           
            />
        
        ))
        return(
            <div className={classes.paletteShades}>
                <div className={classes.header}>
                    <PaletteNavbar 
                        handleFormat = {handleFormat} 
                        format = {format}
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
                <Footer {...palette} />
            </div>
        )
    }
}

export default withStyles(styles)(PaletteShades);