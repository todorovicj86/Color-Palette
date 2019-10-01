import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles';
import './ColorBox.css'

const styles = {

    ColorBox: {
        display: "inline-block",
        height: props => props.showingFullPalette? "25%" : "50%",
        margin: "0 auto",
        position: "relative",
        width: "20%",
        verticalAlign: "middle",
        "&:hover button:first-of-type": {
            opacity: "1",
            transition: "0.5s"
        }
    },

    colorName: {
        bottom: "0",
        fontSize: "12px",
        marginBottom: "8px",
        marginLeft: "10px",
        left: "0",
        letterSpacing: "1px",
        padding: "0",
        position: "absolute",
        textTransform: "uppercase",
    },
    dynamicColor:{
        color: props => chroma.contrast(props.bgColor, 'white') >= 4.5 ? "white" : "black",
        backgroundColor: props => props.bgColor,
    },

    show: {
        opacity: "1",
        position: "absolute",
        transform: "scale(50)",
        zIndex: "10",
    },

    copyButton: {
        color: props => chroma.contrast(props.bgColor, 'white') >= 4.5 ? "white" : "black",
        backgroundColor: "rgba(255, 255, 255, 0.3)!important",
        display: "inline-block",
        fontSize:" 1rem",
        height:" 30px",
        marginTop: "-15px",
        marginLeft: "-50px",
        left: "50%",
        letterSpacing: "1px",
        opacity: "0",
        border:" none",
        position: "absolute",
        textAlign: "center",
        textTransform: "uppercase",
        top: "50%",
        width: "100px",
    },

    moreButton: {
        color: props => chroma.contrast(props.bgColor, 'white') >= 4.5 ? "white" : "black",
        backgroundColor: "rgba(255, 255, 255, 0.3)!important",
        bottom: "0",
        borderRadius: "0!important",
        fontSize: "12px!important",
        letterSpacing: "1px!important",
        opacity: "1",
        position:" absolute!important",
        right: "0",
        textTransform: "uppercase",
        "& a:hover": {
            textDecoration: "none!important"
        }
    },

    copyOverlayer: {
        backgroundColor: props => props.bgColor,
        height: "100%",
        opacity: "0",
        transition: "transform 0.6s ease-in-out",
        width: "100%",
        zIndex: "0",
    },

    copyOverlayerShow: {
        opacity: "1",
        position: "absolute",
        transform: "scale(50)",
        zIndex: "10",
    },

    overlayerMsg: {
        alignItems: "center",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        left: "0",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        right: "0",
        opacity: "0",
        transform: "scale(0.1)",
        "& h1":{
            backgroundColor: "rgb(255, 255, 255, 0.3)",
            fontSize: "5rem",
            fontHeight: "400",
            textShadow: "1px 2px black",
            textAlign: "center",
            textTransform: "uppercase",
            padding: "1rem",
            width: "100%",
        },
        "& p": {
            fontSize: "1.5rem",
            fontWeight: "100",
        }
    },
    overlayerMsgShow: {
        opacity: "1",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
        transform: "scale(1)",
        zIndex: "50",
    }

}

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false,
        }
        this.handleCopy = this.handleCopy.bind(this)
        // this.handleClick = this.handleClick.bind(this);
    }

    handleCopy(evt){
    //    this.props.onCopy(true)
       this.setState({
           copied: true,
        },() => (setTimeout(() => this.setState({copied: false}), 1500)))
    }

    // handleClick(evt){
    //     this.setState({
    //         copied: true,
    //     })
    //     setTimeout(()=>
    //         this.setState({
    //             copied: false,
    //     }),1000)
    // }
    render(){
        // let bgColor = this.props.colorCode; 
        const { bgColor, colorName, paletteId, id, showingFullPalette, classes, format } = this.props;
        const{copied } = this.state;
        return(
            
            <div className={`${classes.ColorBox} ${classes.dynamicColor}`}>
                <div className={ `${classes.copyOverlayer} ${copied && classes.copyOverlayerShow}`} 
                    
                ></div>
                <div className={`${classes.overlayerMsg} ${copied && classes.overlayerMsgShow}` }>
                    <h1>Copied!</h1>
                    <p>{bgColor}</p>
                </div>

                <div className={classes.colorName}>
                    {colorName} 
                </div>
                
                <CopyToClipboard onCopy = {this.handleCopy} 
                    text={(format === 'hex' &&  chroma(bgColor).hex()) ||
                        (format === "rgb" && chroma(bgColor).css()) ||
                        (format === "rgba" && chroma(bgColor).alpha(0.9).css()) }
                >
                    <button className={classes.copyButton}>
                        Copy
                    </button>
                </CopyToClipboard>
           
            {showingFullPalette &&
                <Button className={classes.moreButton}>
                    <Link  to = {`/palette/${paletteId}/${id}`} 
                            onClick={e => e.stopPropagation()} style={{ color: textColor}}>
                        More
                    </Link> 
                </Button>
            }
               
                
            </div>
            
        )
    }
}

export default withStyles(styles)(ColorBox);